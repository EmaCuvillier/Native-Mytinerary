import axios from 'axios'

const likearActions = {
    likearItinerario : (idItinerario, tokenUsuario)=>{
        return async (dispatch, getState)=>{
            const respuesta = await axios.get('https://mytinerary-mern-cuvillier.herokuapp.com/api/itinerario/like/'+idItinerario, {
                headers: {'Authorization': 'Bearer '+tokenUsuario} 
            })
            return respuesta
        }
    },
    verificarLike: (idItinerario, tokenUsuario)=>{
        return async (dispatch, getState)=>{
            const respuesta = await axios.get('https://mytinerary-mern-cuvillier.herokuapp.com/api/itinerario/likecomentario/'+idItinerario, {
                headers: {'Authorization': 'Bearer '+tokenUsuario} 
            })
            return respuesta
        }
    },
}
export default likearActions