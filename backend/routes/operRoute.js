import express from "express";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import { isAdmin, isAdminOrOwnHairdresser } from "../middlewares/userMiddleware.js";
import OperController from "../controllers/operController.js";


const router = express.Router();

router.get(
  "/",
  isAuthenticated,
  isAdmin,
  OperController.getOperations,
);

router.get(
  "/hairdresser/:hairdresserId",
  isAuthenticated,
  isAdminOrOwnHairdresser,
  OperController.listOperationsByHairdresser,
);

router.post(
  "/hairdresser/:hairdresserId",
  isAuthenticated,
  isAdminOrOwnHairdresser,
  OperController.createOperation,
);

router.get(
  "/summary",
  isAuthenticated,
  isAdmin,
  OperController.getOperationsSummary,
);

export default router;
