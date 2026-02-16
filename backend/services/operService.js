import Operation from "../models/operation.js";
import AppError from "../utils/appError.js";
import cleanObject from "../utils/cleaner.js";

class OperService {
    async getOperations() {
        const operations = await Operation.find();
        if (operations.length === 0) throw AppError.notFound("Operations");
        return operations.map(op => cleanObject(op));
    }

    async getOperationById(operationId) {
        if (!operationId) throw AppError.validation("operationId");
        const operation = await Operation.findById(operationId);
        if (!operation) throw AppError.notFound("Operation");
        return cleanObject(operation);
    }

    async createOperation(operationData) {
        const operation = await Operation.create(operationData);
        return cleanObject(operation);
    }

    async getOperationByHairdresser(hairdresserId) {
        if(!hairdresserId) throw AppError.validation("hairdresserId");
        const operations = await Operation.find({ hairdresserId });
        if (operations.length === 0) throw AppError.notFound("Operations");
        return operations.map(op => cleanObject(op));
    }

}

export default new OperService();