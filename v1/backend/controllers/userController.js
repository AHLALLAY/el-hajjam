import userService from "../services/userService.js";
import rr from "../utils/returns.js";

class UserController {
    async getHairdressers(req, res) {
        try {
            const users = await userService.getHairdressers();
            return rr(res, 200, true, "Liste des coiffeurs récupérée", users);
        } catch (error) {
            return rr(res, 500, false, "Erreur lors de la récupération", null, error.message);
        }
    }
}

export default new UserController();