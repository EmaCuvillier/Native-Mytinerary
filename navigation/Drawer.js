import {createDrawerNavigator} from '@react-navigation/drawer'
import React from 'react'
import {HomeStack, CitiesStack, LoginStack, SignUpStack, UsuarioStack, FavoritesStack} from './Stack'
import { Entypo, Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons'
import {connect} from 'react-redux'
import usersActions from '../src/redux/actions/usersActions'

const drawer = createDrawerNavigator()


const Drawer = (props) => {
   
    return (
        <drawer.Navigator>
            <drawer.Screen name="home" component={HomeStack} options={{ drawerIcon: ()=> (<Entypo name="home" size={24} color="gray" />)}} />
            <drawer.Screen name="cities" component={CitiesStack} options={{ drawerIcon: ()=> (<Ionicons name="ios-navigate" size={24} color="blue" />)}}/>           
            {!props.userLogged && <drawer.Screen name="signUp" component={SignUpStack} options={{ drawerIcon: ()=> (<Ionicons name="person-add-sharp" size={24} color="black" />)}}/>}
            {!props.userLogged && <drawer.Screen name="login" component={LoginStack} options={{ drawerIcon: ()=> (<Entypo name="login" size={24} color="black" />)}}/>}
            {props.userLogged && <drawer.Screen name="usuario" component={UsuarioStack} options={{ drawerIcon: ()=> (<FontAwesome name="user" size={24} color="green" />)}}/>}
            {props.userLogged && <drawer.Screen name="favorites" component={FavoritesStack} options={{ drawerIcon: ()=> (<AntDesign name="heart" size={24} color="red"/>)}}/>}
        </drawer.Navigator>
    )
}

const mapStateToProps = state => {
    return {
       userLogged: state.usersReducers.userLogged
    }
}
const mapDispatchToProps = {
    loginForzadoPorLS: usersActions.loginForzadoPorLS
}
export default connect(mapStateToProps, mapDispatchToProps)(Drawer)