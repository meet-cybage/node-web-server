import express from 'express';
// import { citiesControllerV1 } from './CitiesController.js';
import { citiesControllerV1 } from './controllers/citiesControllerV1.js';
import { cityPostControllerV1 } from './controllers/cityPostControllerV1.js';

export let cityRoutesV1 = express.Router()

cityRoutesV1.get("/v1/city/:cityName", citiesControllerV1.getCityName.bind(citiesControllerV1))
cityRoutesV1.get("/v1/cities", citiesControllerV1.getCities.bind(citiesControllerV1))
cityRoutesV1.post("/v1/city", cityPostControllerV1.addCity.bind(cityPostControllerV1))