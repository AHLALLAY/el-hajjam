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
        const existingService = await Service.findOne({name: serviceData.name});
        if(existingService) throw AppError.conflict("Ce Service");
        const service = await Service.create(serviceData);
        return service;
    }

}

export default new ServService();