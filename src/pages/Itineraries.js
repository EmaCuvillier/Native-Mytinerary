import React from 'react'
import { Text, View, StyleSheet, ScrollView, ImageBackground, Image} from "react-native"
import { AntDesign, FontAwesome5, FontAwesome, Entypo   } from '@expo/vector-icons'

const Itineraries = ()=>{
    return (
            <ScrollView>
                <View style={styles.portadaItinerarios}>
                    <ImageBackground style={styles.imagePortadaItinerarios} source={require('../images/pruebaIti.jpg')}>
                        <Text style={styles.colorPortadaItinerarios}>Tokyo</Text>
                    </ImageBackground>
                </View>
                <View style={styles.cadaCardItinerary}>
                        <View style={styles.infoUsuarioItinerario}>
                            <View style={styles.nombreFotoUsuarioItinerario}>
                                <Image style={styles.fotoUsuarioItinerario} source={require('../images/henry.png')}></Image>
                                <Text style={styles.nombreUsuarioItinerario}>Thierry Henry</Text>
                            </View>
                            <AntDesign name="adduser" size={30} color="red" />
                        </View>
                        <View style={styles.tituloItinerario}>Titulo del Itinerario</View>
                        <View style={styles.infoItinerario}>
                            <View style={styles.precioItinerario}>
                                <Text style={styles.textInfoUsuario}>Price:</Text>
                                <FontAwesome5 style={styles.margenIconoItinerario} name="money-bill-alt" size={24} color="green" />
                                <FontAwesome5 style={styles.margenIconoItinerario} name="money-bill-alt" size={24} color="green" />
                                <FontAwesome5 style={styles.margenIconoItinerario} name="money-bill-alt" size={24} color="green" />
                            </View>
                            <View style={styles.duracionItinerario}>
                                <Text style={styles.textInfoUsuario}>Duration:</Text>
                                <FontAwesome5 style={styles.margenIconoItinerario} name="clock" size={24} color="black" />
                                <FontAwesome5 style={styles.margenIconoItinerario} name="clock" size={24} color="black" />
                                <FontAwesome5 style={styles.margenIconoItinerario} name="clock" size={24} color="black" />
                            </View>
                        </View>
                        <View style={styles.likeComentsItinerario}>
                            <ImageBackground source={require('../images/pruebaCardIti.jpg')} style={styles.imagenCardIitinerario}>
                                <View style={styles.cajitaComentsLikes}>
                                    <FontAwesome name="heart" size={24} color="gray" />
                                    <FontAwesome name="commenting" size={24} color="gray" />
                                    <Entypo name="share" size={24} color="gray" />
                                </View>
                            </ImageBackground>
                        </View>
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
        height: 395,
        marginTop: 50,
        borderRadius: 50,
        overflow: "hidden",
        borderTopColor: "gray",
        borderTopWidth: 1
    },
    infoUsuarioItinerario:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 50        
    },
    infoItinerario:{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 15
    },
    likeComentsItinerario:{
        height: 200,
        borderRadius: 50,
        marginTop: 20,
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
        color: "gray",
        marginLeft: 15,
        fontSize: 17
    },
    tituloItinerario:{
        color: "black",
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 10
    },
    nombreFotoUsuarioItinerario:{
        flexDirection: "row",
        alignItems: "center"
    },
    precioItinerario:{
        flexDirection: "row",
    },
    duracionItinerario:{
        flexDirection: "row"
    },
    textInfoUsuario:{
        fontWeight: "bold",
        marginRight: 10
    },
    imagenCardIitinerario:{
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    cajitaComentsLikes:{
        overflow: "visible",
        position: "absolute",
        bottom: -20,
        height: 50,
        width: "70%",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    margenIconoItinerario:{
        marginRight: 5
    }  
});

export default Itineraries
