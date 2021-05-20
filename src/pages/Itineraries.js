import React from 'react'
import { Text, View, StyleSheet, ScrollView, ImageBackground, Image} from "react-native"

const Itineraries = ()=>{
    return (
            <ScrollView>
                <View style={styles.portadaItinerarios}>
                    <ImageBackground style={styles.imagePortadaItinerarios} source={require('../images/pruebaIti.jpg')}>
                        <Text style={styles.colorPortadaItinerarios}>Tokyo</Text>
                    </ImageBackground>
                </View>
                <View style={styles.cadaCardItinerary}>
                    <ImageBackground style={styles.imageCardItinerarios}>
                        <View style={styles.infoUsuarioItinerario}>
                            <Image style={styles.fotoUsuarioItinerario} source={require('../images/henry.png')}></Image>
                            <Text style={styles.nombreUsuarioItinerario}>Thierry Henry</Text>
                        </View>
                        <View style={styles.infoItinerario}></View>
                        <View style={styles.likeComentsItinerario}></View>
                    </ImageBackground>
                </View>
               
            </ScrollView>     
    ) 
}

const styles = StyleSheet.create({
    portadaItinerarios:{
        height: 350,
        borderBottomStartRadius: 150,
        borderBottomRightRadius: 150,
        overflow: "hidden",
    },
    imagePortadaItinerarios:{
        resizeMode: "cover",
        height: "100%",
        alignItems: "center",
        
    },
    colorPortadaItinerarios:{
        color: "white",
        fontSize: 30,
        marginTop: 50,
        fontWeight: "bold",
        backgroundColor: "#1515157c",
        width: "100%",
        textAlign: "center"
    },
    cadaCardItinerary:{
        height: 250,
        marginTop: 50,
        borderRadius: 50,
        overflow: "hidden",
        backgroundColor: "gray"
    },
    imageCardItinerarios:{
        height: "100%"
    },
    infoUsuarioItinerario:{
        flexDirection: "row",
        alignItems: "center"
    },
    infoItinerario:{
        
    },
    likeComentsItinerario:{

    },
    fotoUsuarioItinerario:{
        resizeMode: "cover",
        height: 50,
        width: 50,
        borderRadius: 50,
        marginLeft: 50,
        marginTop: 10
    },
    nombreUsuarioItinerario:{
        color: "white",
        marginLeft: 10,
        fontSize: 17
    }
});

export default Itineraries
