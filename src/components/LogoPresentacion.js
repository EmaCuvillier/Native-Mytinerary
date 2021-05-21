import React from 'react'
import { StyleSheet, Text, View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'

const LogoPresentacion = ()=>{
    return(
        <View style={styles.colorFondoLogo}>
            <Text style={styles.colorLogoNombre}>MYtinerary.</Text>
            <MaterialIcons style={styles.logoPortadaIcono} name="navigation" size={50} color="white" />
        </View>
    )
}
const styles = StyleSheet.create({
    colorFondoLogo:{
        flex: 1,
        backgroundColor: "#ff416c",
        justifyContent: 'center',
        alignItems:'center'
    },
    colorLogoNombre:{
        color: "white",
        fontSize: 50,
        fontWeight: "bold"
    },
  });
export default LogoPresentacion