import axios from 'axios'

const itineraryActions = {
    pedirItinerariosPorCiudad: (id)=>{
        return (dispatch, getState)=> {
            axios.get('https://mytinerary-mern-cuvillier.herokuapp.com/api/itinerarios/'+id)
            .then(response => dispatch({type: 'PEDIR_ITINERARIO', payload: response.data.respuesta}))
            .catch(error => this.props.history.push('/errorServer'))
        }
    }
}

export default itineraryActions