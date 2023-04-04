import { userService } from "../services/userService.js"

class UsersControllerV2{

    getUsers(req, res){
        res.send(userService.getUsers())
    }
}

export let userControllerV2 =  new UsersControllerV2();
