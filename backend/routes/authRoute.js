import express from 'express';
import authController from '../controllers/authController.js';
import { loginLimiter } from '../middlewares/authMiddleware.js';
const router = express.Router();


router.post(
    '/login',
    loginLimiter,
    authController.login
);


export default router;