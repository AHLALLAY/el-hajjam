import mongoose from 'mongoose';

const chaireSchema = mongoose.Schema({
    number:{
        type: Number,
        required:[true, "number is required"],
        min: 1
    },
    barberShopId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'barberShop',
        required: [true, "barberShop Id is required"]
    },
    hairdresserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    status: {
        type: String,
        required: [true, "status is required"],
        enum: ['occupied', 'free'],
        default: 'free'
    },
    rankType: {
        type: String,
        required: [true, "rankType is required"],
        enum: ['50%', 'Salaire']
    },
}, {
    timestamps: true,
});

export default mongoose.model('Chaire', chaireSchema)