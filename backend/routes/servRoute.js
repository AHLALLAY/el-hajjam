import express from 'express';
import servController from '../controllers/servController.js';
import { isAuthenticated } from '../middlewares/authMiddleware.js';
import { isAdmin, isAdminOrHairdresser } from '../middlewares/userMiddleware.js';

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

export default router;