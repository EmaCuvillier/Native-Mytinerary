import React from 'react'
import { ImageBackground, Text, View, StyleSheet, StatusBar} from "react-native"
import {connect} from 'react-redux'
import { AntDesign, Entypo } from '@expo/vector-icons'
import Header from '../components/Header'
import usersActions from '../redux/actions/usersActions'

const Usuario = (props)=>{
   console.log(props.userLogged)
    return(
        <>
        <StatusBar/>
        <Header props={props}/>
        <View style={styles.viewContenedorUsuario}>
            <View style={styles.viewImgBkUsuario}>
                <ImageBackground source={{uri: props.userLogged.picture}} style={styles.imgBkUsuario}></ImageBackground>
            </View>
            <View>
                <Text style={styles.nombreUsuario}>{props.userLogged.firstName}</Text>
            </View>
            <Text style={styles.botonFavorites} onPress={() => props.navigation.navigate('favorites')}><AntDesign name="heart" size={24} color="white" style={styles.marginDerecho}/>Favorites Itineraries</Text>
            <Text style={styles.botonLogOut} onPress={()=>props.desloguearUsuario()}><Entypo name="log-out" size={24} color="white" />Log Out</Text>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    viewImgBkUsuario:{
        height: 150,
        width: 150,
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 100,
        overflow: "hidden"
    },
    imgBkUsuario:{
        height: "100%"
    },
    viewContenedorUsuario:{
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    },
    nombreUsuario:{
        fontWeight: "bold",
        fontSize: 30,
        marginTop: 4
    },
    botonFavorites:{
        backgroundColor: "red",
        color: "white",
        borderRadius: 50,
        paddingLeft: 20,
        paddingRight: 20,
        height: 40,
        textAlignVertical: "center",
        justifyContent: "space-between",
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20
    },
    botonLogOut:{
        backgroundColor: "#151515",
        color: "white",
        borderRadius: 50,
        paddingLeft: 20,
        paddingRight: 20,
        height: 40,
        textAlignVertical: "center",
        justifyContent: "space-between",
        fontSize: 20,
    }
})
const mapStateToProps = state => {
    return {
        userLogged: state.usersReducers.userLogged
    }
}
const mapDispatchToProps ={
    desloguearUsuario: usersActions.desloguearUsuario
}
export default connect(mapStateToProps, mapDispatchToProps)(Usuario)