import express from 'express';
import { isAuthenticated } from '../middlewares/authMiddleware';
import { isAdmin } from '../middlewares/userMiddleware';


const router = express.Router();

router.get(
    '/operations',
    isAuthenticated,
    isAdmin,
    OperController.getOperations
);