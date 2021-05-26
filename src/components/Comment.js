import React, { useEffect, useState }from 'react'
import { Text, View, StyleSheet, Alert, ImageBackground, TextInput} from "react-native"
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons'
import {connect} from 'react-redux'
const Comment = (props)=>{
    const [comentarioDelUsuario, setComentarioDelUsuario]=useState([])
    useEffect(()=>{
        props.comentariosDelUsuario.length > 0 && setComentarioDelUsuario(props.comentariosDelUsuario)
    })
    const [inputEditar, setInputEditar]=useState(props.comentario.comment)
    const checkComentario = comentarioDelUsuario.some(idComentario => idComentario === props.comentario._id)
    
    const eliminarComentarioPregunta = () => {
        Alert.alert(
            "Delete comment",
            `Are you sure you want to delete?`,
            [
                {text: 'YES', onPress: () => {
                    props.eliminarComentario(props.comentario._id, props.userLogged.token)
                }},
                {text: 'NO'}
            ]
        )
    }
    const [mostrarInputEditar, setMostrarInputEditar] =useState(false)
    const funcionEditarComentario = ()=>{
        props.editarComentario(props.comentario._id,props.userLogged.token, inputEditar)
        setMostrarInputEditar(!mostrarInputEditar)
    }
    return(
        <View style={styles.cadaComentario}>
            <View style={styles.viewFotoPerfilComentario}> 
                <ImageBackground style={styles.imagenBkUsuarioComentario} source={{uri: props.comentario.userId.picture}}>
                    </ImageBackground>                         
            </View>
            <View style={styles.cajaNombreComentario}>
                <Text style={styles.nombreUsuarioComentario}>{props.comentario.userId.firstName}</Text>
         
                {mostrarInputEditar 
                    ? <View style={styles.editCancel}>
                            <TextInput onChangeText={(e)=>setInputEditar(e)} style={styles.inputTextEditar}/>
                            <Entypo name="check" size={24} color="green" onPress={()=>funcionEditarComentario()}/> 
                            <MaterialIcons name="cancel" size={24} color="red" onPress={()=>setMostrarInputEditar(!mostrarInputEditar)}/>
                        </View> 
                    :<Text>{props.comentario.comment}</Text>}
                
                {checkComentario && <View style={styles.cajaEditDelete}><AntDesign name="edit" size={24} color="gray" onPress={()=>setMostrarInputEditar(!mostrarInputEditar)}/><MaterialIcons name="delete" size={24} color="gray" onPress={eliminarComentarioPregunta}/></View>}
            </View>
        </View>   
    )
}
const styles = StyleSheet.create({
    cadaComentario:{
        width: "90%",
        flexDirection: "row", 
        alignItems: "center",
        borderRadius: 50,
        paddingLeft: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        backgroundColor: "white",
        marginBottom: 5
    },
    viewFotoPerfilComentario:{
        borderRadius: 100,
        width: "12%",
        height: 40,
        marginRight: 10,
        overflow: "hidden",
        marginTop: 2,
        marginBottom: 2
    },
    cajaNombreComentario:{
        flexDirection: "column",
        maxWidth: "80%"
    },
    nombreUsuarioComentario:{
        fontWeight: "bold"
    },
    imagenBkUsuarioComentario:{
        height: "100%"
    },
    cajaEditDelete:{
        flexDirection: "row",
        position: "relative",
        right: -180,
        top: 0,
        width: 60,
        justifyContent: "space-between"
    },
    editCancel:{
        flexDirection: "row",
    },
    inputTextEditar:{
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "gray",
        width: "50%"
    }
})
const mapStateToProps = state => {
    return {
        userLogged: state.usersReducers.userLogged
    }
}
export default connect(mapStateToProps)(Comment)