export class RoutesV2 {
    constructor(app){
        this.app = app
    }

    configureRoutes(){
        this.app.get("/name", function(req, res){
            res.send({"name": "mhpv2"})
        })

        this.app.get("/cities", function(req, res){
            const cities = [
                {
                    id: 1,
                    name: "New York",
                },
                {
                    id: 2,
                    name: "Berlin",
                },
                {
                id: 3,
                name: "London",
                },
            ];
        
            res.json(cities);
        })
    }
}

// module.exports = RoutesV2