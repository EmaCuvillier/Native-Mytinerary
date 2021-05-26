const initialState = {
    itinerarios : []
}

const itinerarioReducer = (state = initialState, action)=>{
    switch(action.type){
        case'PEDIR_ITINERARIO':
            return {
                ...state,
                itinerarios: action.payload
            }
            break
        default:
            return state
    }
}

export default itinerarioReducer