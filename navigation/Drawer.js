import {createDrawerNavigator} from '@react-navigation/drawer'
import React from 'react'
import {HomeStack, CitiesStack, LoginStack} from './Stack'
import { Entypo, Ionicons  } from '@expo/vector-icons'

const drawer = createDrawerNavigator()


const Drawer = (props) => {
    return (
        <drawer.Navigator>
            <drawer.Screen name="home" component={HomeStack} options={{ drawerIcon: ()=> (<Entypo name="home" size={24} color="black" />)}} />
            <drawer.Screen name="cities" component={CitiesStack} options={{ drawerIcon: ()=> (<Ionicons name="ios-navigate" size={24} color="black" />)}}/>
            <drawer.Screen name="login" component={LoginStack} options={{ drawerIcon: ()=> (<Ionicons name="ios-navigate" size={24} color="black" />)}}/>
        </drawer.Navigator>
    )
}

export default Drawer