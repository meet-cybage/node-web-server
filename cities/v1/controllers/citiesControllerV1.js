// import { cityService } from "./services/CityService.js"
import { cityService } from "../services/citiesService.js";

class CitiesController{

    getCityName(req, res){
        res.send(cityService.getCityName(req.params.cityName))
    }

    getCities(req, res){
        res.send(cityService.getCities())
    }
}

export let citiesControllerV1 =  new CitiesController();