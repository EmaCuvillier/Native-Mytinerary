const initialState = {
    cities: [],
    ciudadesAMostrar: []
}

const citiesReducer = (state = initialState, action)=>{
    switch(action.type){
        case'CARGAR_CIUDADES':
            return {
                ...state,
                cities: action.payload,
                ciudadesAMostrar: action.payload,
            }
            break
        case'FILTRAR_CIUDADES':
            const capturarValor = action.payload.toLowerCase().replace(/ /g, "")
            const ciudadesFiltradas = state.cities.filter(city => city.name.toLowerCase().replace(/ /g, "").startsWith(capturarValor))
            return{    
                ...state,
                ciudadesAMostrar: ciudadesFiltradas
            } 
            break
        default:
            return state
    }
}

export default citiesReducer