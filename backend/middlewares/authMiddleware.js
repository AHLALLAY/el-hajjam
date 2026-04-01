import AppError from "../utils/appError.js";
import userUtils from "../utils/userUtils.js";
import rateLimit from 'express-rate-limit';

export async function isAuthenticated(req, res, next) {
    try {
        const token = userUtils.extractToken(req.headers);
        const jwtDecoded = userUtils.verifyToken(token);
        await userUtils.findUserById(req, jwtDecoded.id);
        return next();
    } catch (error) {
        return next(AppError.unauthenticated());
    }
}

export const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 3,
    skipSuccessfulRequests: true, // les connexions réussies ne comptent pas
    message: { success: false, message: 'Trop de tentatives. Réessayez dans 15 minutes.' }
});