import mongoose from "mongoose";

const operationSchema = mongoose.Schema({
    serviceId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required:[true,"service id is required"],
    },
    amountReceived:{
        type: Number,
        required:[true,"amount received is required"],
        min: 0,
    },
    hairdresserId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:[true,"hairdresser id is required"],
    },
},{
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