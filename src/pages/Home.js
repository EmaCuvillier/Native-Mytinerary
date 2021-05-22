import React from 'react'
import { Text, View, StyleSheet, StatusBar, ScrollView } from "react-native"
import Header from '../components/Header'
import { Ionicons, Fontisto  } from '@expo/vector-icons'


const Home = (props)=>{
   
    return (
        <>
        <StatusBar/> 
        <Header  props={props} />
        <View style={styles.containerHome}>
            
            <View style={styles.containerInfoHome}>
                <ScrollView  horizontal style={styles.scrollView}>
                    <View style={styles.cajaSlide}>
                        <Ionicons name="add" size={50} color="black" />
                        <Text>Add itineraries</Text>
                    </View>
                    <View style={styles.cajaSlide}>
                        <Fontisto name="comments" size={40} color="black" />
                        <Text>Share experiences</Text>
                    </View>
                    <View style={styles.cajaSlide}>
                        <Ionicons name="ios-navigate" size={40} color="black" />
                        <Text>Live them yourself</Text>
                    </View>
                </ScrollView>
            </View>
            <Text style={styles.textoSecundarioHome}>
                “We travel for romance, we travel for architecture, and we travel to be lost.”
            </Text>
            <Text style={styles.botonGetStarted} onPress={() => props.navigation.navigate('cities')}>
                Get Started <Ionicons name="ios-navigate" size={24} color="white" />
            </Text>
        </View> 
        </>     
    ) 
}

const styles = StyleSheet.create({
    containerHome:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textoSecundarioHome:{
        fontSize: 16,
        marginTop: 40,
        textAlign: "center",
        color: "black",
        fontWeight: "bold"
    },
    botonGetStarted:{
        backgroundColor: "#252a34",
        color: "white",
        borderRadius: 50,
        width: 200,
        height:60,
        fontSize: 25,
        marginTop: 30,
        textAlign: "center",
        textAlignVertical: "center"
    },
    infoHomePage:{
        borderRadius: 100,
        width: 150,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ff2e63',
        marginRight: 5,
        marginLeft: 5
    },
    textoInfoHome:{
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "400"
    },
    containerInfoHome:{
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
    },
    cajaSlide:{
        backgroundColor: "red",
        height: 200, 
        width: 200,
        marginRight: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    scrollView:{
        flexDirection: "row",
        paddingLeft: 30,
    }
  });

export default Home