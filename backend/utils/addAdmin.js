import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import 'dotenv/config';

async function createDefaultAdmin() {
    const existingAdmin = await User.findOne({
        email: process.env.ADMIN_EMAIL,
        role: 'admin',
    });

    if (!existingAdmin) {
        const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS) || 10;
        const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, saltRounds);
        
        await User.create({
            firstName: "admin",
            lastName: "admin",
            email: process.env.ADMIN_EMAIL,
            password: hashedPassword,
            phone: "0600000000",
            role: "admin",
            cin: "xx0000",
        });
        console.info('Admin created successfully');
        return true;
    }
    console.info('Admin already exists');
    return false;
}

export default createDefaultAdmin;