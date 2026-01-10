import mongoose from "mongoose";


const serviceSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "service is required"],
        unique: true,
        trim: true,
    },
    price:{
        type: Number,
        required:[true, "price is required"],
        min: 0,
    },
    active:{
        type: Boolean,
        default: true,
    }
},{
    timestamps: true,
});

export default mongoose.model('Service', serviceSchema)