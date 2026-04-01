import Operation from "../models/operation.js";
import User from "../models/user.js";
import AppError from "../utils/appError.js";
import cleanObject from "../utils/cleaner.js";

class OperService {
  async getAllOperations() {
    const operations = await Operation.find()
      .populate("serviceId", "name price")
      .populate("hairdresserId", "firstName lastName");

    if (operations.length === 0) return []; // UX: une liste vide n'est pas une erreur

    // Format unifié côté frontend (OperationTable + filtres admin)
    return operations.map((op) => ({
      id: op.id,
      serviceId: op.serviceId?._id?.toString?.() ?? op.serviceId?._id ?? null,// IDs pour filtrer côté admin
      hairdresserId: op.hairdresserId?._id?.toString?.() ?? op.hairdresserId?._id ?? null,
      service: { 
        name: op.serviceId?.name, 
        price: op.serviceId?.price 
      },// Objets attendus par operationTable.jsx
      hairdresser: {
        firstName: op.hairdresserId?.firstName,
        lastName: op.hairdresserId?.lastName,
      },
      amountReceived: op.amountReceived,
      tip: op.tip,
      createdAt: op.createdAt,
    }));
  }

  async getOperationsByHairdresser(hairdresserId) {
    if (!hairdresserId) throw AppError.validation("hairdresserId");
    const operations = await Operation.find({ hairdresserId })
      .populate("serviceId", "name price")
      .populate("hairdresserId", "firstName lastName");
    if (operations.length === 0) return [];
    return operations.map((op) => ({
      id: op.id,
      service: { 
        name: op.serviceId?.name,
        price: op.serviceId?.price,
      },
      hairdresser: {
        firstName: op.hairdresserId?.firstName,
        lastName: op.hairdresserId?.lastName,
      },
      amountReceived: op.amountReceived,
      tip: op.tip,
      createdAt: op.createdAt,
    }));
  }

  async createOperation(operationData) {
    const operation = await Operation.create(operationData);
    return cleanObject(operation);
  }

  async getOperationsSummary() {
    const [hairdressers, operations] = await Promise.all([
      User.find({ role: "coiffeur" }, "firstName lastName _id").lean(),
      Operation.find().populate("serviceId", "price").lean(),
    ]);

    // Totaux par coiffeur : { hairdresserId: { totalOperations, totalAmountReceived, totalTip } }
    const statsByHairdresser = {};
    for (const op of operations) {
      const id = op.hairdresserId?.toString?.() ?? op.hairdresserId;
      if (!id) continue;
      if (!statsByHairdresser[id]) {
        statsByHairdresser[id] = {
          totalOperations: 0,
          totalAmountReceived: 0,
          totalTip: 0,
        };
      }
      const price = op.serviceId?.price ?? 0;
      const tip = Math.max(0, (op.amountReceived ?? 0) - price);
      statsByHairdresser[id].totalOperations += 1;
      statsByHairdresser[id].totalAmountReceived += op.amountReceived ?? 0;
      statsByHairdresser[id].totalTip += tip;
    }

    // Une ligne par coiffeur (même sans opération)
    const summary = hairdressers.map((h) => {
      const id = h._id.toString();
      const stats = statsByHairdresser[id] ?? {
        totalOperations: 0,
        totalAmountReceived: 0,
        totalTip: 0,
      };
      return {
        id,
        hairdresser: { firstName: h.firstName, lastName: h.lastName },
        totalOperations: stats.totalOperations,
        totalAmountReceived: stats.totalAmountReceived,
        totalTip: stats.totalTip,
      };
    });

    summary.sort(
      (a, b) =>
        b.totalTip - a.totalTip ||
        `${a.hairdresser.firstName} ${a.hairdresser.lastName}`.localeCompare(
          `${b.hairdresser.firstName} ${b.hairdresser.lastName}`
        )
    );
    return summary;
  }
}

export default new OperService();
