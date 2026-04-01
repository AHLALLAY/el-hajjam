import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import AppError from '../utils/appError.js';
import cleanObject from '../utils/cleaner.js';
import validation from '../utils/validation.js';

class UserService {
    async getAllHairdressers() {
        const users = await User.find({ role: 'coiffeur' }, '-password -__v');
        if (users.length === 0) return []; // UX: une liste vide n'est pas une erreur
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
        const { firstName, lastName, email, password, phone, cin, address } = hairdresserData;
        if (!email || !password) throw AppError.validation(["email", "password"]);
        if (!validation.isValidEmail(email)) throw AppError.validation("l'email");
        if (!validation.isValidPassword(password)) throw AppError.validation("le mot de passe");

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            throw AppError.conflict("Cet email");
        }

        const existingCin = await User.findOne({ cin });
        if (existingCin) {
            throw AppError.conflict("Ce CIN");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phone,
            cin,
            address,
            role: 'coiffeur',
        });

        return cleanObject(user);
    }

    async updateHairdresserStatus(hairdresserId, status){
      const user = await User.findByIdAndUpdate(hairdresserId, { status }, { new: true })
      if (!user) throw AppError.notFound("Coiffeur");
      if (user.role !== 'coiffeur') throw AppError.forbidden();
      return cleanObject(user);
    }
}

export default new UserService();
