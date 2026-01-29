import express from 'express';
import userController from '../controllers/userController.js';
import { isAuthenticated } from '../middlewares/authMiddleware.js';
import { isAdmin, isAdminOrHairdresser} from '../middlewares/userMiddleware.js';

const router = express.Router();

router.get('/hairdressers', isAuthenticated, isAdmin, userController.getHairdressers);
router.get('/hairdresser/:id', isAuthenticated, isAdminOrHairdresser, userController.getHairdresserById);
router.post('/hairdresser', isAuthenticated, isAdmin, userController.createHairdresser);

export default router;