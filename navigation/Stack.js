import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Home from '../src/pages/Home'
import Itineraries from '../src/pages/Itineraries'
import Cities from '../src/pages/Cities'
import Login from '../src/pages/Login'
import SignUp from '../src/pages/Signup'
import Usuario from '../src/pages/Usuario'
import Favorites from '../src/pages/Favorites'


const stack = createStackNavigator()

export const HomeStack = () => {
    return (
        <stack.Navigator screenOptions={{headerShown: false}} >
            <stack.Screen name="home" component={Home}/>
        </stack.Navigator>
    )
}

export const CitiesStack = () => {
    return (
        <stack.Navigator screenOptions={{headerShown: false}}>
            <stack.Screen name="cities" component={Cities} />
            <stack.Screen name="itineraries" component={Itineraries} />        
        </stack.Navigator>
    )
}

export const LoginStack = () => {
    return (
        <stack.Navigator screenOptions={{headerShown: false}}>
            <stack.Screen name="login" component={Login} />        
        </stack.Navigator>
    )
}

export const SignUpStack = () => {
    return (
        <stack.Navigator screenOptions={{headerShown: false}}>
            <stack.Screen name="signup" component={SignUp} />        
        </stack.Navigator>
    )
}


export const UsuarioStack = () => {
    return (
        <stack.Navigator screenOptions={{headerShown: false}}>
            <stack.Screen name="usuario" component={Usuario} />        
        </stack.Navigator>
    )
}
export const FavoritesStack = () => {
    return (
        <stack.Navigator screenOptions={{headerShown: false}}>
            <stack.Screen name="favorites" component={Favorites} />        
        </stack.Navigator>
    )
}