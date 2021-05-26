import { combineReducers } from "redux";
import citiesReducer from './citiesReducer'
import itinerarioReducer from './itinerarioReducer'
import usersReducers from './usersReducers'

const mainReducer = combineReducers({
    citiesReducer,
    itinerarioReducer,
    usersReducers
})

export default mainReducer