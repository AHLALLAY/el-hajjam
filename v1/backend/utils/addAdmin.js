import User from '../models/user.js'
import { hash } from 'bcryptjs';
import 'dotenv/config';

async function createDefaultAdmin() {
    const adminEmail = await User.findOne({
        email: process.env.ADMIN_EMAIL,
        role: 'admin',
    });

    if (!adminEmail) {
        const hashedpwd = await hash(process.env.ADMIN_PASSWORD, Number(process.env.BCRYPT_SALT_ROUNDS));
        const user = await User.create({
            firstName: "admin",
            lastName: "admin",
            email: process.env.ADMIN_EMAIL,
            password: hashedpwd,
            phone: "0600000000",
            role: "admin",
            cin: "xx0000",
            KYCStatus: "approved",
            nationalIdImage: "admin.jpg",
        });
        console.info('Admin created successfully');
        return true;
    }
    console.info('Admin already exists');
    return false;
}

export default createDefaultAdmin;