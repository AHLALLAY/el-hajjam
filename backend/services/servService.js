import Service from "../models/service.js";
import AppError from "../utils/appError.js";

class ServService {
    async getServices() {
        const services = await Service.find();
        if (services.length === 0) throw new AppError.notFound("Services");
        return services;
    }

    async getServiceById(serviceId) {
        if (!serviceId) throw AppError.validation("serviceId");
        const service = await Service.findById(serviceId);
        return service;
    }

}

export default new ServService();