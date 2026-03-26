import Holiday from "../models/holiday.js";
import cleanObject from "../utils/cleaner";

class HoliService {
    async createHoliday() {
        const holiday = await Holiday.create();
        return cleanObject(holiday);
    }
}

export default new HoliService();