import express from "express";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import { isAdminOrOwnHairdresser, isHairdresser } from "../middlewares/userMiddleware.js";
import HoliController from "../controllers/holiController.js";

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
    isAdminOrOwnHairdresser,
    HoliController.getHolidays
);

export default router;