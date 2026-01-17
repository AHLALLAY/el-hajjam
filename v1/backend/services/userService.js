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

    async createHairdresser(hairdresserData) {
        const existingUser = await User.findOne({ email: hairdresserData.email });
        if (existingUser) {
            throw new Error('Email already exists');
        }

        const hashedPwd = await hash(hairdresserData.password, 10);
        const user = await User.create({
            ...hairdresserData,
            password: hashedPwd
        });

        const userObject = user.toObject();
        delete userObject.password;
        return userObject;
    }
}

export default new UserService();