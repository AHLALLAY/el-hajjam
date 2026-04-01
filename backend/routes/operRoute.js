import express from "express";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import { isAdmin, isAdminOrOwnHairdresser } from "../middlewares/userMiddleware.js";
import OperController from "../controllers/operController.js";


const router = express.Router();

router.get(
  "/",
  isAuthenticated,
  isAdmin,
  OperController.getAllOperations,
);

router.get(
  "/summary",
  isAuthenticated,
  isAdmin,
  OperController.getOperationsSummary,
);

router.get(
  "/:hairdresserId",
  isAuthenticated,
  isAdminOrOwnHairdresser,
  OperController.getOperationsByHairdresser,
);

router.post(
  "/:hairdresserId",
  isAuthenticated,
  isAdminOrOwnHairdresser,
  OperController.createOperation,
);

export default router;
