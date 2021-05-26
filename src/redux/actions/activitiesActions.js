import axios from 'axios'

const activitiesActions = {
    pedirActividadesPorItinerario : (idItinerario)=>{
        return async (dispatch, getState)=> {
            const respuesta = await axios.get('https://mytinerary-mern-cuvillier.herokuapp.com/api/itinerario/actividad/'+idItinerario)
            if(respuesta.data.success){
                return respuesta.data.respuesta
            }
        }
    }
}
export default activitiesActions