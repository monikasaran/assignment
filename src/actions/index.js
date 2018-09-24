import axios from 'axios';

// Fetching weather details according to city
export function loadWeather(location){
    return dispatch => {
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=98c8924b93826356d4a4ede01ee2489f`)
        .then( res => {                       
            dispatch({
                type : "CHANGE_LOC",
                weatherData : res.data
            })
        }).catch((error)=>{          
            dispatch({
                type : "ERROR_LOC",
                weatherData : error.response.data
            })
        })
    }    
}
