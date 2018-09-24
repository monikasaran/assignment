
const rootReducer = (state = {}, action) => {
    switch(action.type){
        case "CHANGE_LOC" : 
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


export default rootReducer;