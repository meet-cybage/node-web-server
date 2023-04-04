import { userService } from "../services/userService.js"
import { logger } from "../../../main/logging.js";

class UsersController{

    getUsers(req, res){
        logger.info("First winston log")
        res.status(200)
        res.send(userService.getUsers())
    }
}

export let userControllerV1 =  new UsersController();
