import AsyncStorage from '@react-native-async-storage/async-storage'

const initialState = {
    userLogged: null
}

const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('userLogged', jsonValue)
    } catch (e) {
        console.log(e)
        console.log('error al guardar el usuario')
      // saving error
    }
}
const storeDataToken = async (value) => {
    try {
      await AsyncStorage.setItem('token', value)
    } catch (e) {
        console.log(e)
        console.log('error guardar token')
      // saving error
    }
}

const usersReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'LOG_USER':
            if(action.payload){
                storeData({firstName: action.payload.firstName, picture: action.payload.picture})
                storeDataToken(action.payload.token)
                //localStorage.setItem('userLogged', JSON.stringify({firstName: action.payload.firstName, picture: action.payload.picture}))
                //localStorage.setItem('token', action.payload.token)
            }
            return{
                ...state,
                userLogged: action.payload,
            }
        case 'LOGOUT_USER':
            return{
                ...state,
                userLogged: null
            }
        default:
            return state
    }
}
export default usersReducer