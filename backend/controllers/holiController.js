import holiService from "../services/holiService.js";
import TextMsg from "../config/msg.js";
import rr from "../utils/returns.js";

class HoliController {
    async createHoliday(req, res, next) {
        try {
            const holiday = await holiService.createHoliday({ ...req.body, hairdresserId: req.user._id });
            return rr(res, 201, true, TextMsg.itemCreated("Demande"), holiday);
        } catch (err) {
            return next(err);
        }
    }
}

export default new HoliController();