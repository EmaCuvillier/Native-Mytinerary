import axios from 'axios'

const usuarioAction = {
    pedirInformacionDelUsuario: (token) =>{
        return async (dispatch, getState)=>{
            try{
                const respuesta = await axios.get('https://mytinerary-mern-cuvillier.herokuapp.com/api/infoUsuario', {
                    headers: {
                        'Authorization': 'Bearer '+token
                    }
                })
                return respuesta.data
            }catch(err){
                console.log(err)
            }
        }
    }
}
export default usuarioAction