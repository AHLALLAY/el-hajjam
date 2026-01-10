import mongoose from 'mongoose';

const barberShopSchema = mongoose.Schema({
    location:{
        type: String,
        required:[true, "location is required"],
    },
    chaires:{
        type: Number,
        min: 1,
        enum: ['occuped', 'free'],
        default: 'free'
    },
},{
    timestamps: true,
});

export default mongoose.model('barberShop', barberShopSchema);