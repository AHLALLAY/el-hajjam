import mongoose from 'mongoose';

const chairSchema = mongoose.Schema({
    number: {
        type: Number,
        required: [true, "Le numéro est requis"],
        min: [1, "Le numéro doit être supérieur à 0"]
    },
    barberShopId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'barberShop',
        required: [true, "L'identifiant du salon est requis"]
    },
    hairdresserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    status: {
        type: String,
        required: [true, "Le statut est requis"],
        enum: ['occupé', 'libre'],
        default: 'libre'
    },
    rankType: {
        type: String,
        required: [true, "Le type de rémunération est requis"],
        enum: ['50%', 'Salaire']
    },
}, {
    timestamps: true,
});

export default mongoose.model('Chair', chairSchema);