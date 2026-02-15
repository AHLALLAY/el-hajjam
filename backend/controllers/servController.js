import servService from "../services/servService.js";
import rr from "../utils/returns.js";
import TextMsg from "../config/msg.js";

class ServController {
    async getServices(req, res, next) {
        try {
            const services = await servService.getServices();
            return rr(res, 200, true, TextMsg.getListe("services"), services);
        } catch (error) {
            return next(error);
        }
    }

    async getServiceById(req, res, next) {
        try {
            const service = await servService.getServiceById(req.params);
            if (!service) throw AppError.notFound("Service");
            return rr(res, 200, true, TextMsg.getItem("Service"), service);
        } catch (error) {
            return next(error);
        }
    }

    async createService(req, res, next) {
        try {
            const service = await servService.createService(req.body);
            return rr(res, 201, true, TextMsg.itemCreated("Service"), service);
        } catch (error) {
            return next(error);
        }
    }

    async updateService(req, res, next) {
        try {
            const service = await servService.updateService(req.params.id, req.body);
            if (!service) throw AppError.notFound("Service");
            return rr(res, 200, true, TextMsg.itemUpdated("Service"), service);
        } catch (error) {
            return next(error);
        }
    }
}

export default new ServController();