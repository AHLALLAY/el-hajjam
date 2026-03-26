import express from "express";
import { isAuthenticated } from "../middlewares/authMiddleware";
import { isHairdresser } from "../middlewares/userMiddleware";
import HoliController from "../controllers/holiController";

const router = express.Router();

router.post(
    "/",
    isAuthenticated,
    isHairdresser,
    HoliController.createHoliday
);