import AppError from '../utils/AppError.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import TextMsg from '../config/msg.js';
import User from '../models/user.js';
import validation from '../utils/validation.js';

class AuthService {
    async login(identifiant) {
        const { email, password } = identifiant;
        if (!email || !password) {
            throw AppError.validation(TextMsg.emptyFields());
        }
        if (!validation.isValidEmail(email)) {
            throw AppError.validation(TextMsg.invalid("email"));
        }
        if (!validation.isValidPassword(password)) {
            throw AppError.validation(TextMsg.invalid("password"));
        }
        const user = await User.findOne({ email });
        if (!user) {
            throw AppError.unauthorized(TextMsg.unAuthorized());
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            throw AppError.unauthorized(TextMsg.unAuthorized());
        }
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