import operService from "../services/operService";
import TextMsg from "../config/msg.js";
import rr from "../utils/returns";

class OperController {
    async getOperations(req, res, next) {
        try{
            const operations = await operService.getOperations();
            return rr(res, 200, true, TextMsg.getListe("operations"), operations)
        }catch(error){
            return next(error);
        }
    }
}

export default new OperController();