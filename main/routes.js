import express from 'express'
import { userRoutesV1 } from '../users/v1/userRoutesV1.js'
import { cityRoutesV1 } from '../cities/v1/citiesRoutesV1.js';
import { userRoutesV2 } from '../users/v2/userRoutesV2.js';


export class Routes{

    constructor(app){
        this.app = app;
    }

    configureRoutes(){
        this.app.use("/api", userRoutesV1)
        this.app.use("/api", cityRoutesV1)
        this.app.use("/api", userRoutesV2)
    }
}


