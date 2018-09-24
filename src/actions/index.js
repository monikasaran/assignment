import axios from 'axios';

export function loadWeather(location="Jodhpur"){
    return dispatch => {
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=98c8924b93826356d4a4ede01ee2489f`)
        .then( res => {
            dispatch({
                type : "CHANGE_LOC",
                weatherData : res.data
            })
        })
    }
    
    
}
