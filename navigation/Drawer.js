import {createDrawerNavigator} from '@react-navigation/drawer'
import React from 'react'
import {HomeStack, CitiesStack, LoginStack} from './Stack'
import { Entypo, Ionicons  } from '@expo/vector-icons'
import SignupScreen from '../src/pages/Signup'

const drawer = createDrawerNavigator()


const Drawer = (props) => {
    return (
        <drawer.Navigator>
            <drawer.Screen name="home" component={HomeStack} options={{ drawerIcon: ()=> (<Entypo name="home" size={24} color="black" />)}} />
            <drawer.Screen name="cities" component={CitiesStack} options={{ drawerIcon: ()=> (<Ionicons name="ios-navigate" size={24} color="black" />)}}/>
            <drawer.Screen name="login" component={LoginStack} options={{ drawerIcon: ()=> (<Entypo name="login" size={24} color="black" />)}}/>
            <drawer.Screen name="signUp" component={SignupScreen} options={{ drawerIcon: ()=> (<Ionicons name="person-add-sharp" size={24} color="black" />)}}/>
        </drawer.Navigator>
    )
}

export default Drawer