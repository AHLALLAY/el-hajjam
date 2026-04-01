import operService from "../services/operService.js";
import TextMsg from "../config/msg.js";
import rr from "../utils/returns.js";

class OperController {
  async getAllOperations(req, res, next) {
    try {
      const operations = await operService.getAllOperations();
      return rr(res, 200, true, TextMsg.getListe("operations"), operations);
    } catch (error) {
      return next(error);
    }
  }

  async getOperationsByHairdresser(req, res, next) {
    try {
      const operations = await operService.getOperationsByHairdresser(
        req.params.hairdresserId,
      );
      return rr(res, 200, true, TextMsg.getListe("Opérations"), operations);
    } catch (error) {
      return next(error);
    }
  }

  async createOperation(req, res, next) {
    try {
      const operation = await operService.createOperation({...req.body, hairdresserId: req.params.hairdresserId});
      return rr(res, 201, true, TextMsg.itemCreated("Opération"), operation);
    } catch (error) {
      return next(error);
    }
  }

  async getOperationsSummary(req, res, next) {
    try {
      const summary = await operService.getOperationsSummary();
      return rr(res, 200, true, TextMsg.resume(), summary);
    } catch (error) {
      return next(error);
    }
  }
}

export default new OperController();
