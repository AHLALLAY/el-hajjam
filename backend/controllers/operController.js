import operService from "../services/operService";
import TextMsg from "../config/msg.js";
import rr from "../utils/returns";
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
            const operation = await operService.getOperationById(req.params);
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
}

export default new OperController();