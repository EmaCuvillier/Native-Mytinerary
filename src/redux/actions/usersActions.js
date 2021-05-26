import axios from 'axios'


const usersActions = {
    crearUsuario: (nuevoUsuario)=>{
        return async (dispatch, getState)=>{
            const respuesta = await axios.post('https://mytinerary-mern-cuvillier.herokuapp.com/api/users/signup', nuevoUsuario)
            if (!respuesta.data.success) {
                return respuesta.data.errores
            }
            dispatch({
                type:'LOG_USER',
                payload: respuesta.data.success ? respuesta.data.respuesta : null
            })
        }
    },
    loguearUsuario: (usuarioALoguear)=>{
        return async (dispatch, getState)=>{
            const respuesta = await axios.post('https://mytinerary-mern-cuvillier.herokuapp.com/api/users/login', usuarioALoguear)
            if(!respuesta.data.success){
                console.log(respuesta.data.error)
            }
            dispatch({ 
                type:'LOG_USER',
                payload: respuesta.data.success ? respuesta.data.respuesta : null})
        }
    },
    desloguearUsuario: ()=>{
        return(dispatch, getState)=>{
            dispatch({type: 'LOGOUT_USER'})
        }
    },
    loginForzadoPorLS: (usuarioLS) =>{
        return async (dispatch, getState)=>{
            try{
                const respuesta = await axios.get('https://mytinerary-mern-cuvillier.herokuapp.com/api/users/loginLs', {
                    headers: {
                        'Authorization': 'Bearer '+usuarioLS.token
                    }
                })

                dispatch({type:'LOG_USER', payload: {
                    ...respuesta.data.respuesta,
                    token: usuarioLS.token
                }})
            }catch(err){
                console.log(err)
            }
        }
    }
}
export default usersActions