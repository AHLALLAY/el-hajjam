import operService from "../services/operService.js";
import TextMsg from "../config/msg.js";
import AppError from "../utils/appError.js";
import rr from "../utils/returns.js";

class OperController {
  async getOperations(req, res, next) {
    try {
      const operations = await operService.getOperations();
      return rr(res, 200, true, TextMsg.getListe("operations"), operations);
    } catch (error) {
      return next(error);
    }
  }

  async listOperationsByHairdresser(req, res, next) {
    try {
      const operations = await operService.listOperationsByHairdresser(
        req.params.hairdresserId,
      );
      if (!operations) throw new AppError.notFound("Operations");
      return rr(res, 200, true, TextMsg.getListe("Operations"), operations);
    } catch (error) {
      return next(error);
    }
  }

  async createOperation(req, res, next) {
    try {
      const operation = await operService.createOperation(req.body);
      return rr(res, 201, true, TextMsg.itemCreated("Operation"), operation);
    } catch (error) {
      return next(error);
    }
  }

  async getOperationsSummary(req, res, next) {
    try {
      const resume = await operService.getOperationsSummary();
      return rr(res, 200, true, TextMsg.resume(), resume);
    } catch (error) {
      return next(error);
    }
  }
}

export default new OperController();
