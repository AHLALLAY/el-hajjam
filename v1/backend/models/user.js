import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Le prénom est requis"],
    },
    lastName: {
        type: String,
        required: [true, "Le nom est requis"],
    },
    email: {
        type: String,
        required: [true, "L'email est requis"],
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Le mot de passe est requis"],
        minlength: [8, "Le mot de passe doit contenir au moins 8 caractères"],
        select: false,
    },
    phone: {
        type: String,
        required: [true, "Le numéro de téléphone est requis"],
        match: [/^(\+2126|\+2127|06|07)[0-9]{8}$/, "Le format du numéro de téléphone est invalide"],
    },
    role: {
        type: String,
        enum: ['admin', 'coiffeur'],
        default: 'coiffeur',
    },
    cin: {
        type: String,
        required: [true, "Le CIN est requis"],
        unique: true,
    },
    status: {
        type: String,
        enum: ['actif', 'inactif', 'suspendu'],
        default: 'actif',
    },
    address: {
        type: String,
    }
}, {
    timestamps: true
});

export default mongoose.model('User', userSchema);