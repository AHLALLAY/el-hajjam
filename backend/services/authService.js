import AppError from '../utils/appError.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import validation from '../utils/validation.js';

class AuthService {
    async login(credentials) {
        const { email, password } = credentials;
        if (!email || !password) throw AppError.validation();
        if (!validation.isValidEmail(email)) throw AppError.validation("l'email");
        if (!validation.isValidPassword(password)) throw AppError.validation("le mot de passe");

        const user = await User.findOne({ email }).select('+password');
        if (!user) throw AppError.authFailed();

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) throw AppError.authFailed();
        
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            cin: user.cin,
            role: user.role,
            token
        };
    }
}

export default new AuthService();