import mongoose from "mongoose";

const operationSchema = mongoose.Schema({
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: [true, "L'identifiant du service est requis"],
    },
    amountReceived: {
        type: Number,
        required: [true, "Le montant reçu est requis"],
        min: [0, "Le montant reçu ne peut pas être inférieur à 0"],
    },
    hairdresserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "L'identifiant du coiffeur est requis"],
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});


operationSchema.virtual('price').get(function() {
    if (this.populated('serviceId') && this.serviceId?.price) {
        return this.serviceId.price;
    }
    return null;
});

operationSchema.virtual('tip').get(function() {
    const servicePrice = this.price;
    if (servicePrice && this.amountReceived > servicePrice) {
        return this.amountReceived - servicePrice;
    }
    return 0;
});

export default mongoose.model('Operation', operationSchema);