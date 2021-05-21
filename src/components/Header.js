import { Entypo } from '@expo/vector-icons'
import React from "react"
import { Text, View, StyleSheet} from "react-native"

const Header = (props)=>{
    return(
        <View>
            <Entypo name="menu" size={40} color="black" onPress={() => props.props.navigation.openDrawer()}/>
        </View>
    )
}
export default Header