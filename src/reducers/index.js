import { combineReducers } from 'redux';

// The default state of the app
const initialState ={
    weatherData : null
}

// Reducer function for the redux state changes
const weatherReducer = (state = initialState, action) => {
    switch(action.type){
        case "CHANGE_LOC" :          
            return {
                ...state,
                weatherData : action.weatherData
            }
        case "ERROR_LOC" :            
            return {
                ...state,
                weatherData : action.weatherData
            }
        default :
            return {
                ...state,
            }

    }
}

// Combine all the reducers in one
const rootReducer = combineReducers({
    weatherReducer
})

export default rootReducer;