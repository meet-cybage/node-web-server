import { cityPostService } from "../services/cityPostService.js";
import { logger } from "../../../main/logging.js";


class CityPostControllerV1{

    addCity(req, res){
        logger.info("Second winston log")
        res.status(201)
        res.send(cityPostService.addCityName(req.body.city))
    }
}

export let cityPostControllerV1 =  new CityPostControllerV1();