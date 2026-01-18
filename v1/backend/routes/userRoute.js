import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.use('/hairdressers', userController.getHairdressers);

export default router;