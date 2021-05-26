import { Text, View, StyleSheet, ScrollView, ImageBackground, StatusBar, TextInput } from "react-native"
import React, { useEffect } from "react"
import Header from '../components/Header'
import citiesActions from '../redux/actions/citiesActions'
import {connect} from 'react-redux'
import { FontAwesome5 } from '@expo/vector-icons'

const Cities = (props)=>{

    useEffect(()=>{
        props.pedirTodasCiudades()
    },[])
    const leerInputBuscador=(e)=>{
        props.filtrarCiudades(e)
    }
    return(
        <>
        <StatusBar/>
        <Header props={props}/> 
        <ScrollView>
            <View style={styles.containerCities}>
                <View style={styles.popularFilter}>
                    <Text style={[styles.textFilter, styles.allFilter]} onPress={()=>leerInputBuscador('')}>All</Text>
                    <Text style={styles.textFilter} onPress={()=>leerInputBuscador('hong')}>Hong Kong</Text>
                    <Text style={styles.textFilter} onPress={()=>leerInputBuscador('london')}>London</Text>
                    <Text style={styles.textFilter} onPress={()=>leerInputBuscador('paris')}>Paris</Text>
                </View>
                <View style={styles.cajaBuscadorInput}>
                    <TextInput style={styles.inputBuscador} placeholderTextColor = 'gray' placeholder='Search' onChangeText={(e)=>leerInputBuscador(e)}/>
                </View>
            </View>
            <View style={styles.contenedorMostrasCiudades}>
                {props.ciudadesAMostrar.length > 0 
                    ? props.ciudadesAMostrar.map(ciudad => {
                        return (
                            <View key={ciudad._id} style={styles.cadaCajitaCiudad}>
                                <ImageBackground style={styles.imgBackCajitaCiudad} source={{uri: ciudad.image}} >
                                    <View style={styles.cajitaTextoCiudad}>
                                        <Text style={styles.textCajitaText}>{ciudad.name}</Text>
                                        <Text style={styles.textCajitaText}>{ciudad.country}</Text>      
                                    </View>
                                    <Text style={styles.goCajitaText} onPress={() => props.navigation.navigate('itineraries', {ciudad: ciudad})}>GO <FontAwesome5 name="arrow-circle-right" size={15} color="white" /></Text>
                                </ImageBackground>
                            </View>
                        )
                    })
                    :<Text>Loading..</Text>} 
            </View>
              
        </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    containerCities:{
        alignItems:"center"
    },
    popularFilter:{
        marginTop: 80,
        width: "90%",
        borderColor: "black",
        borderWidth: 1,
        flexDirection: "row",
        borderRadius: 50,
        backgroundColor: "#252a34",
        justifyContent: "space-between",
        paddingRight: 13,
        paddingLeft: 13,
        height: 40,
        alignItems: "center"
    },
    textFilter:{
        color: "gray",
        fontSize: 20
    },
    allFilter:{
        textDecorationLine: "underline",
        textDecorationColor: "#ff2e63",
        color: "white"
    },
    contenedorMostrasCiudades:{
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20
    },
    cadaCajitaCiudad:{
        height: 200,
        width: "100%",
        marginBottom: 10,
    },
    imgBackCajitaCiudad:{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        borderColor: "gray",
        borderWidth: 1
    },
    cajitaTextoCiudad:{
        backgroundColor: "#15151586",
        width: "100%",
        textAlign: "center",
        textAlignVertical: "center",
        
    },
    textCajitaText:{
        color: "white",
        textAlign: "center"
    },
    inputBuscador:{
        color: "gray",
        textAlign: "center",
        borderRadius: 50,
        height: 30,
        width: 260
    },
    cajaBuscadorInput: {
        backgroundColor: "#252a34",
        borderRadius: 50,
        marginTop: 20,
        height: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    goCajitaText:{
        color: "white",
        backgroundColor: "#15151586",
        textAlign: "center",
        textAlignVertical: "center",
        position: "absolute",
        right: 0,
        bottom: 0,
        width: "20%",
        height: "20%"
    }
  });

const mapStateToProps = state => {
    return {
        ciudadesAMostrar:  state.citiesReducer.ciudadesAMostrar
    }
}
const mapDispatchToProps = {
    pedirTodasCiudades: citiesActions.pedirTodasCiudades,
    filtrarCiudades: citiesActions.filtrarCiudades
}
export default connect(mapStateToProps, mapDispatchToProps)(Cities)