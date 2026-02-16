import operService from "../services/operService.js";
import TextMsg from "../config/msg.js";
import rr from "../utils/returns.js";
import AppError from "../utils/appError.js";

class OperController {
    async getOperations(req, res, next) {
        try {
            const operations = await operService.getOperations();
            return rr(res, 200, true, TextMsg.getListe("operations"), operations)
        } catch (error) {
            return next(error);
        }
    }

    async getOperationById(req, res, next) {
        try {
            const operation = await operService.getOperationById(req.params.id);
            if (!operation) throw new AppError.notFound("Operation");
            return rr(res, 200, true, TextMsg.getOne("Operation"), operation);
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

    async getOperationByHairdresser(req, res, next) {
        try {
            const operations = await operService.getOperationByHairdresser(req.params.id);
            if (!operations) throw new AppError.notFound("Operations");
            return rr(res, 200, true, TextMsg.getListe("Operations"), operations);
        } catch (error) {
            return next(error);
        }
    }
}

export default new OperController();