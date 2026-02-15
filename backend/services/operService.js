import Operation from "../models/operation.js";
import AppError from "../utils/appError.js";

class OperService {
    async getOperations(){
        const operations = await Operation.find();
        if(operations.length === 0) throw AppError.notFound("Operations");
        return operations;
    }

    async getOperationById(operationId){
        if(!operationId) throw AppError.validation("operationId")
        const operation = await Operation.findById(operationId);
        return operation;
    }
}

export default new OperService();