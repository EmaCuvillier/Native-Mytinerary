import React from 'react'
import { Text, View, StyleSheet, ScrollView, StatusBar, Image, ImageBackground} from "react-native"
import Header from '../components/Header'

const Home = (props)=>{
    return (
        <>
        <Header props={props}/>        
        <ImageBackground source={require("../images/fondoHome.png")} style={styles.imagenPortada}>
            <View style={styles.contenedorTextosHome}>
                <Text style={styles.textoHome}>Find your perfect trip, designed by insiders who know and love their cities!</Text>
                <Text style={styles.getStartedHome} >Get Started</Text>
            </View>
        </ImageBackground>     
        </>     
    ) 
}

const styles = StyleSheet.create({
    hero:{
        height: 600
    },
    imagenPortada:{
        height: 650,
        resizeMode: "cover",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 200
    },
    heroText:{
        color: "black",
        fontSize: 50,
        fontWeight:"bold",
    },
    logoImagenNav:{
        height: 30,
        width: 90
    },
    getStartedHome:{
        backgroundColor: "#222831",
        color: "white",
        borderRadius: 10,
        fontSize: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5
    },
    contenedorTextosHome:{
        alignItems: "flex-start",
        justifyContent:"space-around",
        height: 300,
        paddingTop: 70,
        paddingLeft: 20,
        paddingRight: 20
    },
    textoHome: {
        fontSize: 23,
        fontWeight: "bold"
    }
  });

export default Home