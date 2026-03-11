import userService from "../services/userService.js";
import TextMsg from "../config/msg.js";
import rr from "../utils/returns.js";
import AppError from "../utils/appError.js";

class UserController {
    async getHairdressers(req, res, next) {
        try {
            const users = await userService.getHairdressers();
            return rr(res, 200, true, TextMsg.getListe("coiffeurs"), users);
        } catch (error) {
            return next(error);
        }
    }

    async getHairdresserById(req, res, next) {
        try {
            const user = await userService.getHairdresserById(req.params.id);
            return rr(res, 200, true, TextMsg.getOne("Coiffeur"), user);
        } catch (error) {
            return next(error);
        }
    }

    async createHairdresser(req, res, next) {
        try {
            const user = await userService.createHairdresser(req.body);
            return rr(res, 201, true, TextMsg.itemCreated("Coiffeur"), user);
        } catch (error) {
            return next(error);
        }
    }

    async updateHairdresserStatus(req, res, next) {
        try {
            const allowedStatus = ['actif', 'inactif', 'suspendu'];
            if (!req.body.status || !allowedStatus.includes(req.body.status)) throw AppError.validation("Status");
            const user = await userService.updateHairdresserStatus(req.params.id, req.body.status);
            return rr(res, 200, true, TextMsg.itemUpdated("Coiffeur"), user);
        } catch (error) {
            return next(error);
        }
    }
}

export default new UserController();
