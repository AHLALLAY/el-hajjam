import express from "express";
import HoliController from "../controllers/holiController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import { isAdmin, isAdminOrOwnHairdresser, isHairdresser } from "../middlewares/userMiddleware.js";

const router = express.Router();

router.post(
    '/',
    isAuthenticated,
    isHairdresser,
    HoliController.createHoliday
);

router.get(
    '/',
    isAuthenticated,
    isAdmin,
    HoliController.getHolidays
);

router.get(
    '/:hairdresserId',
    isAuthenticated,
    isAdminOrOwnHairdresser,
    HoliController.listHolidaysByHairdresser
);

router.patch(
    '/:id',
    isAuthenticated,
    isAdmin,
    HoliController.updateStats
);

export default router;