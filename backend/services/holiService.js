import Holiday from "../models/holiday.js";
import cleanObject from "../utils/cleaner.js";

class HoliService {
    async createHoliday(holidayData) {
        const holiday = await Holiday.create(holidayData);
        return cleanObject(holiday);
    }

    async getHolidays(){
        const holidays = await Holiday.find()
        .populate("hairdresserId", "firstName lastName");
        return holidays.map((h) => cleanObject(h));
    }
}

export default new HoliService();