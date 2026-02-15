import cleanObject from "../utils/cleaner.js";
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
        return cleanObject(service);
    }

    async updateService(serviceId, newData) {
        const service = await Service.findByIdAndUpdate(serviceId, newData, { new: true, runValidators: true });
        if (!service) throw AppError.notFound("Service");
        return cleanObject(service);
    }

}

export default new ServService();