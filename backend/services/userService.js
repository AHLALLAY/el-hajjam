import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import AppError from '../utils/appError.js';
import cleanObject from '../utils/cleaner.js';

class UserService {
    async getHairdressers() {
        const users = await User.find({ role: 'coiffeur' }, '-password -__v');
        if (users.length === 0) throw AppError.notFound("Coiffeurs");
        return users;
    }

    async getHairdresserById(hairdresserId) {
        if (!hairdresserId) throw AppError.validation("hairdresserId");
        const user = await User.findById(hairdresserId).select('-password -__v');
        if (!user) throw AppError.notFound("Coiffeur");
        if (user.role !== 'coiffeur') throw AppError.forbidden();
        return user;
    }

    async createHairdresser(hairdresserData) {
        const existingEmail = await User.findOne({ email: hairdresserData.email });
        if (existingEmail) {
            throw AppError.conflict("Cet email");
        }

        const existingCin = await User.findOne({ cin: hairdresserData.cin });
        if (existingCin) {
            throw AppError.conflict("Ce CIN");
        }

        const hashedPassword = await bcrypt.hash(hairdresserData.password, 10);
        const user = await User.create({
            ...hairdresserData,
            password: hashedPassword
        });

        return cleanObject(user);
    }
}

export default new UserService();