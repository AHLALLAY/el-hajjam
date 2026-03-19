import servService from "../services/servService.js";
import rr from "../utils/returns.js";
import TextMsg from "../config/msg.js";

class ServController {
    async createService(req, res, next) {
        try {
            const service = await servService.createService(req.body);
            return rr(res, 201, true, TextMsg.itemCreated("Service"), service);
        } catch (error) {
            return next(error);
        }
    }

    async getServices(req, res, next) {
        try {
            const services = await servService.getServices();
            return rr(res, 200, true, null, services);
        } catch (error) {
            return next(error);
        }
    }
}

export default new ServController();