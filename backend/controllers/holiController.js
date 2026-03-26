import holiService from "../services/holiService";
import TextMsg from "../config/msg.js";
import rr from "../utils/returns";

class HoliController {
    async createHoliday(req, res, next) {
        try {
            const holiday = await holiService.createHoliday(req.body);
            return rr(res, 201, true, TextMsg.itemCreated("Demande"));
        } catch (err) {
            return next(err);
        }
    }
}

export default new HoliController();