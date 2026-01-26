import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.get('/hairdressers', userController.getHairdressers);
router.get('/hairdresser/:id', userController.getHairdresserById());

export default router;