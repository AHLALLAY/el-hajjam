import servService from "../services/servService.js";
import rr from "../utils/returns.js";
import TextMsg from "../config/msg.js";


class ServController{
    async getServices(req, req, next){
        try{
            const services = await servService.getServices();
            return rr(req, 200, true, TextMsg.getListe("services"), services);
        }catch(error){
            return next(error);
        }
    }
}

export default new ServController();