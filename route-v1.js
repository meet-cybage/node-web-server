
export class RoutesV1 {
    constructor(app){
        this.app = app
    }

    configureRoutes(){
        this.app.get("/name", function(req, res){
            res.send({"name": "mhp"})
        })

        this.app.get('/hello', (req, res) => {
            // res.type("application/json")
            // res.send('Hello Express123')
            res.json({'status': 'Hello Express123'})
        });
    }
}

// module.exports = RoutesV1
