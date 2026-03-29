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

    async getHolidays(req, res, next) {
        try {
            const holidays = await holiService.getHolidays();
            return rr(res, 200, true, TextMsg.getListe("congés"), holidays);
        } catch (err) {
            return next(err);
        }
    }

    async listHolidaysByHairdresser(req, res, next) {
        try {
            const holiday = await holiService.listHolidaysByHairdresser(req.params.hairdresserId);
            return rr(res, 200, true, TextMsg.getListe("congés"), holiday);

        } catch (err) {
            return next(err);
        }
    }

    async updateStats(req, res, next) {
        try {
            const holiday = await holiService.updateStats(req.params.id, req.body);
            return rr(res, 200, true, TextMsg.itemUpdated("Statut de congé"), holiday);
        } catch (err) {
            return next(err);
        }
    }
}

export default new HoliController();