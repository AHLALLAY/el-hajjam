import mongoose from "mongoose";

const holidaySchema = mongoose.Schema({
    hairdresserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "L'identifiant du coiffeur est requis"],
        ref: 'User',
    },
    startDate: {
        type: Date,
        required: [true, "La date de démarrage est requis"],
    },
    endDate: {
        type: Date,
        required: [true, "La date de fin est requis"],
    },
    status: {
        type: String,
        enum: ["en attente", "validee", "refusee"],
        default: "en attente",
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

export default mongoose.model('Holiday', holidaySchema);