import express from 'express';
import authController from '../controllers/authController.js';
import { loginLimiter } from '../middlewares/authMiddleware.js';
const router = express.Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Connexion utilisateur
 *     tags: [Auth]
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Connexion réussie
 *       429:
 *         description: Trop de tentatives de connexion
 *       401:
 *         description: Identifiants incorrects
 */
router.post(
    '/login',
    loginLimiter,
    authController.login
);


export default router;