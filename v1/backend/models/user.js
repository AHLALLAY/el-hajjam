import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required:[true, "first name is required"],
    },
    lastName:{
        type: String,
        required:[true, "last name is required"],
    },
    email:{
        type: String,
        required:[true, "email is required"],
        unique: true,
        lowercase: true,
        trim: true,
    },
    password:{
        type: String,
        required:[true, "password is required"],
        minlength: [8, "password must be at least 8 characters long"],
        select: false,
    },
    phone:{
        type: String,
        required:[true, "phone is required"],
        match: [/^(\+2126|\+2127|06|07)[0-9]{8}$/, "phone number format is invalid"],
    },
    role:{
        type: String,
        enum:['admin', 'coiffeur'],
        default: 'coiffeur',
    },
    cin:{
        type: String,
        required:[true, "CIN is required"],
        unique: true,
    },
    KYCStatus:{
        type: String,
        enum:['pending', 'approved', 'rejected'],
        default: 'pending',
    },
    nationalIdImage:{
        type: String,
        required:[true, "national id image is required"],
        match: [/^.+\.(jpg|jpeg|png|gif)$/i, "national id image format is invalid"],
    }
},{
    timestamps: true
});

export default mongoose.model('User', userSchema);