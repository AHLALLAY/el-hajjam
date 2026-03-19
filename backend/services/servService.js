import cleanObject from "../utils/cleaner.js";
import Service from "../models/service.js";
import AppError from "../utils/appError.js";

class ServService {
    async createService(serviceData) {
        const existingService = await Service.findOne({ name: serviceData.name });
        if (existingService) throw AppError.conflict("Ce Service");
        const service = await Service.create(serviceData);
        return cleanObject(service);
    }
    
    async getServices() {
        const services = await Service.find();
        if (services.length === 0) throw AppError.notFound("Services");
        return services;
    }


}

export default new ServService();