import mongoose from 'mongoose';

const barberShopSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "barberShop name is required"]
    },
    location: {
        type: String,
        required: [true, "location is required"],
    },
    manager: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, "manager is required"],
    },
    status:{
        type: String,
        required: [true, "status is required"],
        enum: ['active', 'inactive', 'closed'],
        default : 'active',
    }
}, {
    timestamps: true,
});

export default mongoose.model('barberShop', barberShopSchema);