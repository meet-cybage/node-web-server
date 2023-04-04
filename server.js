import express from 'express'
import { Routes } from './main/routes.js';
import { expressLogger } from './main/logging.js';



var app = express();

app.use(express.json())
app.use(expressLogger)
let routes = new Routes(app);
routes.configureRoutes(app) 

app.listen(process.env.PORT || 3000, () => console.log(`express app running on 3000 port and env is ${process.env.PORT}`))


// import { RoutesV1 } from './route-v1.js';
// import { RoutesV2 }from './route-v2.js';
// app.use(express.static(__dirname + '/public'));
// const api = express()
// const apiV1 = express();
// const apiV2 = express();

// api.use("/v1", apiV1)
// api.use("/v2", apiV2)
// app.use("/api", api)

// const routeV1 = new RoutesV1(apiV1);
// routeV1.configureRoutes()
// const routeV2 = new RoutesV2(apiV2);
// routeV2.configureRoutes()