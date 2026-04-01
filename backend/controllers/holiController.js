import holiService from "../services/holiService.js";
import TextMsg from "../config/msg.js";
import rr from "../utils/returns.js";
import AppError from "../utils/appError.js";

const HOLIDAY_STATUSES = ["en attente", "validée", "refusée"];

class HoliController {
    async createHoliday(req, res, next) {
        try {
            const holiday = await holiService.createHoliday({ ...req.body, hairdresserId: req.user._id });
            return rr(res, 201, true, TextMsg.itemCreated("Demande"), holiday);
        } catch (err) {
            return next(err);
        }
    }

    async getAllHolidays(req, res, next) {
        try {
            const holidays = await holiService.getAllHolidays();
            return rr(res, 200, true, TextMsg.getListe("congés"), holidays);
        } catch (err) {
            return next(err);
        }
    }

    async getHolidaysByHairdresser(req, res, next) {
        try {
            const holidays = await holiService.getHolidaysByHairdresser(req.params.hairdresserId);
            return rr(res, 200, true, TextMsg.getListe("congés"), holidays);

        } catch (err) {
            return next(err);
        }
    }

    async updateHolidayStatus(req, res, next) {
        try {
            if (!req.body.status || !HOLIDAY_STATUSES.includes(req.body.status)) {
                throw AppError.validation("Status");
            }
            const holiday = await holiService.updateHolidayStatus(req.params.id, req.body);
            return rr(res, 200, true, TextMsg.itemUpdated("Statut de congé"), holiday);
        } catch (err) {
            return next(err);
        }
    }
}

export default new HoliController();