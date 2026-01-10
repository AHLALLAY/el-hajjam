import mongoose from "mongoose";


const serviceSchema = mongoose.Schema({
    service:{
        type:String,
        required:[true, "service is required"]
    },
    amount:{
        type: Number,
        required:[true, "amount is required"]
    },
},{
    timestamps: true,
});

export default mongoose.model('service', serviceSchema)