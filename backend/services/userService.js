import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import AppError from '../utils/appError.js';

class UserService {
    async getHairdressers() {
        return await User.find({ role: 'coiffeur' }, '-password -__v');
    }

    async getHairDresserById(hairdresserId) {
        const user = await User.findById(hairdresserId).select('-password -__v');
        if (!user) throw AppError.notFound("L'utilisateur");
        return user;
    }

    async createHairdresser(hairdresserData) {
        const existingUser = await User.findOne({ email: hairdresserData.email });
        if (existingUser) {
            throw AppError.conflict("Cet email");
        }

        const hashedPassword = await bcrypt.hash(hairdresserData.password, 10);
        const user = await User.create({
            ...hairdresserData,
            password: hashedPassword
        });

        const userObject = user.toObject();
        delete userObject.password;
        return userObject;
    }
}

export default new UserService();