import axios from 'axios'

const commentActions = {
    crearComentario: (idItinerario, comentario, tokenUsuario)=>{
        return async (dispatch, getState)=>{
            const respuesta = await axios.post('https://mytinerary-mern-cuvillier.herokuapp.com/api/itinerario/comentario/'+idItinerario, {'comment': comentario}, {
                headers: {'Authorization': 'Bearer '+tokenUsuario} 
            })
            if(respuesta){
                return respuesta.data.respuesta
            }
        }
    },
    editarUnComentario: (idComentario, tokenUsuario, comentarioEditado)=>{
        return async (dispatch, getState)=>{
            const respuesta = await axios.put('https://mytinerary-mern-cuvillier.herokuapp.com/api/itinerario/comentario/'+idComentario, {'comment': comentarioEditado}, {
                headers: {'Authorization': 'Bearer '+tokenUsuario} 
            })
            if(respuesta){
                return respuesta.data
            }
        }
    },
    eliminarUnComentario: (idComentario, tokenUsuario)=>{
        return async (dispatch, getState)=>{
            const respuesta = await axios.delete('https://mytinerary-mern-cuvillier.herokuapp.com/api/itinerario/comentario/'+idComentario, {
                headers: {'Authorization': 'Bearer '+tokenUsuario} 
            })
            if(respuesta){
                return respuesta.data
            }
        }
    }
}

export default commentActions