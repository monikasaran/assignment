import axios from 'axios';

export function loadWeather(location="Jodhpur"){
    return {
        type : "CHANGE_LOC",
        weatherData : axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=98c8924b93826356d4a4ede01ee2489f`)
    }
}