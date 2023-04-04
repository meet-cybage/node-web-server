class CityPostService{

    addCityName(cityName){
        const city = {"cityName": cityName}
        return city
    }

}

export let cityPostService = new CityPostService();