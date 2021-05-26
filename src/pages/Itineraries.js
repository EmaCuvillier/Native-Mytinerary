import React from 'react'
import { Text, View, StyleSheet, ScrollView, ImageBackground, StatusBar} from "react-native"
import itineraryActions from '../redux/actions/itineraryActions'
import {connect} from 'react-redux'
import { useEffect } from 'react'
import Itinerary from '../components/Itinerary'
import Header from '../components/Header'

const Itineraries = (props)=>{
    useEffect(()=>{
        props.pedirItinerariosPorCiudad(props.route.params.ciudad._id)
    }, [])
    return (
        <>
            <StatusBar />
            <Header props={props}/> 
            <ScrollView>
                <View style={styles.portadaItinerarios}>
                    <ImageBackground style={styles.imagePortadaItinerarios} source={{uri: props.route.params.ciudad.image}}>
                        <Text style={styles.colorPortadaItinerarios}>{props.route.params.ciudad.name}</Text>
                    </ImageBackground>
                </View>
                {props.itinerarios.length > 0
                    ? props.itinerarios.map(itinerary => {
                    return <Itinerary key={itinerary._id} itinerary={itinerary}/>})
                    : <Text>No hay itinerarios para esta ciudad</Text>}          
            </ScrollView> 
        </>    
    ) 
}

const styles = StyleSheet.create({
    portadaItinerarios:{
        height: 350,
        borderBottomStartRadius: 150,
        borderBottomRightRadius: 150,
        overflow: "hidden",
        marginTop: 60
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

const mapStateToProps = state => {
    return {
        itinerarios:  state.itinerarioReducer.itinerarios,
        userLogged: state.usersReducers.userLogged
    }
}
const mapDispatchToProps = {
    pedirItinerariosPorCiudad: itineraryActions.pedirItinerariosPorCiudad
}
export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)
