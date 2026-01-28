import mongoose from 'mongoose';

const barberShopSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Le nom du salon est requis"]
    },
    location: {
        type: String,
        required: [true, "L'adresse est requise"],
    },
    manager: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, "Le responsable est requis"],
    },
    status: {
        type: String,
        required: [true, "Le statut est requis"],
        enum: ['actif', 'inactif', 'fermé'],
        default: 'actif',
    }
}, {
    timestamps: true,
});

export default mongoose.model('barberShop', barberShopSchema);