import Service from "../models/service.js";
import AppError from "../utils/appError.js";

class ServService {
    async getServices() {
        const services = await Service.find();
        if (services.length === 0) throw AppError.notFound("Services");
        return services;
    }

    async getServiceById(serviceId) {
        if (!serviceId) throw AppError.validation("serviceId");
        const service = await Service.findById(serviceId);
        return service;
    }

    async createService(serviceData) {
        const existingService = await Service.findOne({ name: serviceData.name });
        if (existingService) throw AppError.conflict("Ce Service");
        const service = await Service.create(serviceData);
        const serviveObj = service.toObject();
        delete serviveObj._id;
        delete serviveObj.__v;
        delete serviveObj.createdAt;
        delete serviveObj.updatedAt;
        return serviveObj;
    }

    async updateService(serviceId, newData) {
        const service = await Service.findByIdAndUpdate(serviceId, newData, { new: true, runValidators: true });
        if (!service) throw AppError.notFound("Service");
        const serviceObj = service.toObject();
        delete serviceObj._id;
        delete serviceObj.__v;
        delete serviceObj.createdAt;
        delete serviceObj.updatedAt;
        return serviceObj;
    }

}

export default new ServService();