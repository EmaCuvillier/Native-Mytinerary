import { Entypo, Ionicons  } from '@expo/vector-icons'
import React from "react"
import { Text, View, StyleSheet, Image} from "react-native"

const Header = (props)=>{
    return(
        <View style={styles.navLogin}>
            <Entypo name="menu"  size={40} color="black" onPress={() => props.props.navigation.openDrawer()}/>
            <Image source={require('../images/logo.png')} style={styles.logoHeader}></Image>
            <Ionicons name="md-search" size={30} color="black" />
        </View>
    )
}
const styles = StyleSheet.create({
    navLogin: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        borderColor: "gray",
        borderWidth: 1,
        zIndex: 100,
        backgroundColor: "#fff",
        height: 70,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    logoHeader: {
        width: 200,
        height: 60,
    }
  });
export default Header