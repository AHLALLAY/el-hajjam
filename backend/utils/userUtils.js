import AppError from "./appError.js";
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

class UserUtils {

    extractToken(headers) {
        return headers.authorization?.startsWith('Bearer ') ? headers.authorization.split(' ')[1] : null;
    }

    verifyToken(token) {
        if (!token) throw AppError.unauthenticated();
        const jwtDecoded = jwt.verify(token, process.env.JWT_SECRET);
        return jwtDecoded;
    }

    async findUserById(req, userId) {
        const user = await User.findById(userId);
        if (!user || user.status === 'suspendu') throw AppError.unauthenticated();
        req.user = user;
    }

}

export default new UserUtils();