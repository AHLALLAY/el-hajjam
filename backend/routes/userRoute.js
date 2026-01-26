import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.get('/hairdressers', userController.getHairdressers);
router.get('/hairdresser/:id', userController.getHairDresserById);
router.post('/hairdresser', userController.createHairdresser);

export default router;