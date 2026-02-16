import express from 'express';
import { isAuthenticated } from '../middlewares/authMiddleware.js';
import { isAdmin, isAdminOrOwnHairdresser } from '../middlewares/userMiddleware.js';
import OperController from '../controllers/operController.js';


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

router.post(
    '/operation',
    isAuthenticated,
    isAdminOrOwnHairdresser,
    OperController.createOperation
);

// router.put(
//     '/operation/:id',
//     isAuthenticated,
//     isAdminOrOwnHairdresser,
//     OperController.updateOperation
// );

export default router;