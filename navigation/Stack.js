import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Home from '../src/pages/Home'
import Itineraries from '../src/pages/Itineraries'
import Cities from '../src/pages/Cities'
import Login from '../src/pages/Login'

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