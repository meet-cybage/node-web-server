class CityService{

    getCityName(cityName){
        const city = {"cityName": cityName}
        return city
    }

    getCities(){
        const cities = [
            "Ahmedabad",
            "Gandhinagar"
        ]
        return cities
    }
}

export let cityService = new CityService();