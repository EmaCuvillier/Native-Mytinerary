import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, ScrollView, ImageBackground, Image, Alert, TextInput} from "react-native"
import { AntDesign, FontAwesome5, FontAwesome, Entypo   } from '@expo/vector-icons'
import {connect} from 'react-redux'
import likearActions from '../redux/actions/likearActions'
import Comment from './Comment'
import commentAction from '../redux/actions/commentActions'

const Itinerary = (props)=>{
    const priceAndDuration = (n)=>{
        let aux = []
        for(let i = 0; i < n; i++){
            aux.push('priceAndDuration')
        }
        return aux
    }
    const [numeroLikes, setNumeroLikes]=useState(props.itinerary.likes)
    const [pressCorazon, setPressCorazon]= useState(false)
    const [comentariosAMostrar, setComentariosAMostrar]= useState(props.itinerary.comments)
    const [comentariosDelUsuario, setComentariosDelUsuario] = useState([])
    const colorCorazon={
        backgroundColor: pressCorazon ? "red" : "gray"
    }
    const likearItinerarioFun = async()=>{
        if(!props.userLogged){
            Alert.alert(
                "Error",
                'You must be logged in',
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        }else{
            setPressCorazon(!pressCorazon)
            const respuesta = await props.likearItinerario(props.itinerary._id, props.userLogged.token)
            setNumeroLikes(respuesta.data.respuesta)
        }
    }
    const verificarLikeComentario = async()=>{
        const respuesta = await props.verificarLike(props.itinerary._id, props.userLogged.token)
        setPressCorazon(respuesta.data.liked)
        setComentariosDelUsuario(respuesta.data.comentarios)
    }
    useEffect(()=>{
        props.userLogged && verificarLikeComentario()
    }, [])
    const [mostrarCajaComentarios, setMostrarCajaComentarios] = useState(false)
    const [input, setInput] = useState('')
    const capturarInput = e =>{
        const comentario = e
        setInput(comentario)
    }
    const enviarComentario = async ()=>{
        if(props.userLogged){
            if(input === '' || input === ' '){
                Alert.alert(
                    "Error",
                    'Cannot send an empty comment',
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                      },
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                  );
            }else{
                const respuesta = await props.crearComentario(props.itinerary._id, input, props.userLogged.token)
                setComentariosAMostrar(respuesta.comments)
                setInput('')
                verificarLikeComentario()
            }
            
        }else{
            Alert.alert(
                "Error",
                'You must be logged in',
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        }
    }
    const eliminarComentario = async (idComentario,token) => {
        const respuesta = await props.eliminarUnComentario(idComentario, token)
        setComentariosAMostrar(respuesta.respuesta.comments)
    }
    const editarComentario = async (idComentario, tokenUsuario, comentarioEditado)=>{
        const respuesta = await props.editarUnComentario(idComentario, tokenUsuario, comentarioEditado)
        setComentariosAMostrar(respuesta.respuesta.comments)
    }
    return (<>
            
            <View style={styles.cadaCardItinerary}>
                        <View style={styles.infoUsuarioItinerario}>
                            <View style={styles.nombreFotoUsuarioItinerario}>
                                <Image style={styles.fotoUsuarioItinerario} source={{uri: props.itinerary.authorPic}}></Image>
                                <Text style={styles.nombreUsuarioItinerario}>{props.itinerary.authorName}</Text>
                            </View>
                            <AntDesign name="adduser" size={30} color="red" />
                        </View>
                        <View ><Text style={styles.tituloItinerario}>{props.itinerary.title}</Text></View>
                        <View style={styles.infoItinerario}>
                            <View style={styles.precioItinerario}>
                                <Text style={styles.textInfoUsuario}>Price:</Text>
                                {priceAndDuration(props.itinerary.price).map((precio, i) => <FontAwesome5 key={i} style={styles.margenIconoItinerario} name="money-bill-alt" size={24} color="green" />)} 
                            </View>
                            <View style={styles.duracionItinerario}>
                                <Text style={styles.textInfoUsuario}>Duration:</Text>
                                {priceAndDuration(props.itinerary.duration).map((precio, i) => <FontAwesome5 key={i} style={styles.margenIconoItinerario} name="clock" size={24} color="black" />)} 
                            </View>
                        </View>
                        <View style={styles.likeComentsItinerario}>
                            <ImageBackground source={require('../images/pruebaCardIti.jpg')} style={styles.imagenCardIitinerario}>
                                
                                    
                                    {mostrarCajaComentarios
                                        ?<View style={styles.mostrarLosComentariosCaja}>
                                            <ScrollView style={styles.scrollViewComentarios}>
                                                <View style={styles.cajaContenidoComentarios}>
                                                {comentariosAMostrar.length > 0 && comentariosAMostrar.map(comentario =>{
                                                    return <Comment key={comentario._id} eliminarComentario={eliminarComentario} editarComentario={editarComentario} comentariosDelUsuario={comentariosDelUsuario} comentario={comentario}/> 
                                                })}
                                                        
                                                </View>   
                                            </ScrollView> 
                                            <View style={styles.cajaDejarComentario}>
                                                <FontAwesome name="close" size={30} color="gray" onPress={()=>setMostrarCajaComentarios(!mostrarCajaComentarios)}/>
                                                <TextInput style={styles.inputDejarComentario} placeholder='Leave a message...' value={input} onChangeText={capturarInput}/>
                                                <FontAwesome name="send" size={24} color="gray" onPress={enviarComentario}/>
                                            </View>
                                        </View>
                                        : <View style={styles.cajitaComentsLikes}>
                                                <View style={styles.likesNumero}>
                                                    <FontAwesome name="heart" size={24} color={colorCorazon.backgroundColor} onPress={()=>likearItinerarioFun()}/>
                                                    <Text style={styles.numMargin}>{numeroLikes}</Text>
                                                </View>
                                                <FontAwesome name="commenting" size={24} color="gray" onPress={()=>setMostrarCajaComentarios(!mostrarCajaComentarios)}/>
                                                <Entypo name="share" size={24} color="gray" />
                                            </View>
                                    }
                                
                            </ImageBackground>
                        </View>
                </View>   
                </>
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
});
const mapStateToProps = state => {
    return {
        itinerarios:  state.itinerarioReducer.itinerarios,
        userLogged: state.usersReducers.userLogged
    }
}
const mapDispatchToProps = {
    likearItinerario: likearActions.likearItinerario,
    verificarLike: likearActions.verificarLike,
    crearComentario: commentAction.crearComentario,
    eliminarUnComentario: commentAction.eliminarUnComentario,
    editarUnComentario: commentAction.editarUnComentario
}
export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)
