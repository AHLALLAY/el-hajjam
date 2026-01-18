import mongoose from "mongoose";


const serviceSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Le nom du service est requis"],
        unique: true,
        trim: true,
    },
    price:{
        type: Number,
        required:[true, "Le prix est requis"],
        min: [0, "Le prix ne peut pas être négatif"],
    },
    active:{
        type: Boolean,
        default: true,
    }
},{
    timestamps: true,
});

export default mongoose.model('Service', serviceSchema)