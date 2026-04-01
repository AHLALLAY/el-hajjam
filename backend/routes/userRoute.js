import express from 'express';
import userController from '../controllers/userController.js';
import { isAuthenticated } from '../middlewares/authMiddleware.js';
import { isAdmin, isAdminOrOwnHairdresser } from '../middlewares/userMiddleware.js';

const router = express.Router();

router.get(
    '/hairdressers',
    isAuthenticated,
    isAdmin,
    userController.getAllHairdressers
);

router.get(
    '/hairdressers/:hairdresserId',
    isAuthenticated,
    isAdminOrOwnHairdresser,
    userController.getHairdresserById
);

router.post(
    '/hairdressers',
    isAuthenticated,
    isAdmin,
    userController.createHairdresser
);

router.patch(
    '/hairdressers/:hairdresserId',
    isAuthenticated,
    isAdmin,
    userController.updateHairdresserStatus
);

export default router;