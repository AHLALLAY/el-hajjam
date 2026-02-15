import Operation from "../models/operation.js";
import AppError from "../utils/appError.js";
import cleanObject from "../utils/cleaner.js";

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

    async createOperation(operationData){
        const operation = await Operation.create(operationData);
        return cleanObject(operation);
    }
}

export default new OperService();