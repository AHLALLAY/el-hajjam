import express from 'express';
import servController from '../controllers/servController.js';
import { isAuthenticated } from '../middlewares/authMiddleware.js';
import { isAdmin, isAdminOrHairdresser } from '../middlewares/userMiddleware.js';

const router = express.Router();

router.post('/',
    isAuthenticated,
    isAdmin,
    servController.createService
);

router.get('/',
    isAuthenticated,
    isAdminOrHairdresser,
    servController.getAllServices
);


export default router;