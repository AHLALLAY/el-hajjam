import Holiday from "../models/holiday.js";
import cleanObject from "../utils/cleaner";

class HoliService {
    async createHoliday(holidayData) {
        const holiday = await Holiday.create(holidayData);
        return cleanObject(holiday);
    }
}

export default new HoliService();