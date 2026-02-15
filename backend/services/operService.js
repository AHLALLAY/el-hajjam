import Operation from "../models/operation.js";
import AppError from "../utils/appError.js";

class OperService {
    async getOperations(){
        const operations = await Operation.find();
        if(operations.length === 0) throw AppError.notFound("Operations");
        return operations;
    }
}

export default new OperService();