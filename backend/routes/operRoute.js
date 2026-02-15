import express from 'express';
import { isAuthenticated } from '../middlewares/authMiddleware';
import { isAdmin, isAdminOrOwnHairdresser } from '../middlewares/userMiddleware';


const router = express.Router();

router.get(
    '/operations',
    isAuthenticated,
    isAdmin,
    OperController.getOperations
);

router.get(
    '/operation/:id',
    isAuthenticated,
    isAdminOrOwnHairdresser,
    OperController.getOperationById
);