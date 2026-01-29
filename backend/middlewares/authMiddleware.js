import AppError from "../utils/appError.js";
import userUtils from "../utils/userUtils.js";

export async function isAuthenticated(req, res, next) {
    try {
        const token = userUtils.extractToken(req.headers);
        const jwtDecoded = userUtils.verifyToken(token);
        await userUtils.findUserById(req, jwtDecoded.id);
        next();
    } catch (error) {
        return next(AppError.unauthenticated());
    }
}