import Holiday from "../models/holiday.js";
import AppError from "../utils/appError.js";
import cleanObject from "../utils/cleaner.js";

class HoliService {
    async createHoliday(holidayData) {
        const holiday = await Holiday.create(holidayData);
        return cleanObject(holiday);
    }

    async getHolidays() {
        const holidays = await Holiday.find()
            .populate("hairdresserId", "firstName lastName");
        return holidays.map((h) => cleanObject(h));
    }

    async listHolidaysByHairdresser(hairdresserId) {
        const holidays = await Holiday.find({ hairdresserId })
            .populate("hairdresserId", "firstName lastName");
        return holidays.map((h) => cleanObject(h));
    }

    async updateStats(holidayId, body) {
        const { status } = body;
        const holiday = await Holiday.findByIdAndUpdate(
            holidayId,
            { status },
            { new: true, runValidators: true }
        );
        if (!holiday) throw AppError.notFound("Congé");
        return cleanObject(holiday);
    }
}

export default new HoliService();