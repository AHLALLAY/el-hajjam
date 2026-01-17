import User from '../models/user.js';
import { hash } from 'bcryptjs';

class UserService {
    async getHairdressers() {
        return await User.find({}, '-password -__v -refreshToken');
    }

    async getHairDresserById(hairdresserId) {
        const user = await User.findById(hairdresserId).select('-password -__v');
        if (!user) throw new Error('Hairdresser not found');
        return user;
    }
}

export default new UserService();