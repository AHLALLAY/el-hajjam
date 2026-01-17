import User from '../models/user.js';
import { hash } from 'bcryptjs';

class UserService {
    async getHairdressers() {
        return await User.find({}, '-password -__v -refreshToken');
    }
}

export default new UserService();