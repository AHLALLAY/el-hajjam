import express from 'express';
import servController from '../controllers/servController';
import { isAuthenticated } from '../middlewares/authMiddleware';
import { isAdmin, isAdminOrHairdresser } from '../middlewares/userMiddleware';

const router = express.Router();


router.get('/services',
    isAuthenticated,
    isAdminOrHairdresser,
    servController.getServices
);

router.post('/service',
    isAuthenticated,
    isAdmin,
    servController.createService
);