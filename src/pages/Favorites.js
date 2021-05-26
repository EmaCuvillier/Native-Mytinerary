import React, { useEffect, useState } from 'react'
import usuarioAction from '../redux/actions/usuarioAction'
import { ImageBackground, Text, View, StyleSheet, StatusBar, Image, ScrollView} from "react-native"
import {connect} from 'react-redux'
import { AntDesign, FontAwesome5, FontAwesome, Entypo  } from '@expo/vector-icons'
import Header from '../components/Header'

const Favorites = (props)=>{
    useEffect(()=>{
        infoUsuario()
    },[])
    const [itinerariosLikeados, setItinerariosLikeados]=useState([])
    const infoUsuario = async()=>{
        const respuesta = await props.pedirInformacionDelUsuario(props.userLogged.token)
        setItinerariosLikeados(respuesta.respuesta)
    }
    const priceAndDuration = (n)=>{
        let aux = []
        for(let i = 0; i < n; i++){
            aux.push('priceAndDuration')
        }
        return aux
    }
    return(
        <>
        <StatusBar />
        <Header props={props}/>
        <ScrollView style={styles.contTodoUsuario}>
            {itinerariosLikeados.length > 0
                ? itinerariosLikeados.map(itinerario =>{
                   return <View style={styles.cadaCardItinerary}>
                        <View style={styles.infoUsuarioItinerario}>
                            <View style={styles.nombreFotoUsuarioItinerario}>
                                <Image style={styles.fotoUsuarioItinerario} source={{uri: itinerario.authorPic}}></Image>
                                <Text style={styles.nombreUsuarioItinerario}>{itinerario.authorName}</Text>
                            </View>
                            <AntDesign name="adduser" size={30} color="red" />
                        </View>
                        <View ><Text style={styles.tituloItinerario}>{itinerario.title}</Text></View>
                        <View style={styles.infoItinerario}>
                            <View style={styles.precioItinerario}>
                                <Text style={styles.textInfoUsuario}>Price:</Text>
                                {priceAndDuration(itinerario.price).map((precio, i) => <FontAwesome5 key={i} style={styles.margenIconoItinerario} name="money-bill-alt" size={24} color="green" />)} 
                            </View>
                            <View style={styles.duracionItinerario}>
                                <Text style={styles.textInfoUsuario}>Duration:</Text>
                                {priceAndDuration(itinerario.duration).map((precio, i) => <FontAwesome5 key={i} style={styles.margenIconoItinerario} name="clock" size={24} color="black" />)} 
                            </View>
                        </View>
                        <View style={styles.likeComentsItinerario}>
                            <ImageBackground source={require('../images/pruebaCardIti.jpg')} style={styles.imagenCardIitinerario}>
                
                                <View style={styles.cajitaComentsLikes}>
                                    <View style={styles.likesNumero}>
                                        <FontAwesome name="heart" size={24} color="red"/>
                                        <Text style={styles.numMargin}>{itinerario.likes}</Text>
                                    </View>
                                    <FontAwesome name="commenting" size={24} color="gray" />
                                    <Entypo name="share" size={24} color="gray" />
                                </View>
                                
                            </ImageBackground>
                        </View>
                </View>
                })
                :<View style={styles.noItinerariosLikeados}>
                    <Text>Add itineraries to your favorites list</Text>
                </View>}
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    noItinerariosLikeados:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    contTodoUsuario:{
        flex: 1,
        paddingTop: 40,
    },
    cadaCardItinerary:{
        height: 420,
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
    },
    likesNumero:{
        flexDirection: "row"
    },
    numMargin: {
        marginLeft: 6
    },
    mostrarLosComentariosCaja:{
        backgroundColor: "white",
        zIndex: 2,
        height: "100%",
        width: "100%",
        paddingBottom: 35
    },
    cajaContenidoComentarios:{
        height: 130,
        alignItems: "center"
    },
    cajaDejarComentario:{
        position: "absolute",
        bottom: -20,
        height: 50,
        width: "100%",
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
        paddingRight: 20,
        paddingLeft: 10
    },
    inputDejarComentario: {
        width: "80%",
        borderColor: "gray",
        textAlignVertical: "center",
        borderWidth: 1,
        marginRight: "5%",
        height: 40,
        borderRadius: 50,
        marginLeft: 10,
        paddingLeft: 18
    },
})
const mapStateToProps = state => {
    return {
        userLogged: state.usersReducers.userLogged
    }
}
const mapDispatchToProps = {
    pedirInformacionDelUsuario: usuarioAction.pedirInformacionDelUsuario
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites)