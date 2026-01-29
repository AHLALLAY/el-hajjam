import userService from "../services/userService.js";
import TextMsg from "../config/msg.js";
import rr from "../utils/returns.js";

class UserController {
    async getHairdressers(req, res, next) {
        try {
            const users = await userService.getHairdressers();
            return rr(res, 200, true, TextMsg.hairdresserList(), users);
        } catch (error) {
            next(error);
        }
    }

    async getHairdresserById(req, res, next) {
        try {
            const user = await userService.getHairdresserById(req.params.id);
            return rr(res, 200, true, TextMsg.hairdresserRetrieved(), user);
        } catch (error) {
            next(error);
        }
    }

    async createHairdresser(req, res, next) {
        try {
            const user = await userService.createHairdresser(req.body);
            return rr(res, 201, true, TextMsg.hairdresserCreated(), user);
        } catch (error) {
            next(error);
        }
    }
}

export default new UserController();