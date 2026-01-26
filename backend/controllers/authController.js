import authService from '../services/authService.js';
import TextMsg from '../config/msg.js';
import rr from '../utils/returns.js';

class AuthController {
    async login(req, res, next) {
        try {
            const user = await authService.login(req.body);
            return rr(res, 200, true, TextMsg.authSuccess(), user);
        } catch (error) {
            next(error);
        }
    }
}

export default new AuthController();