import React from 'react'
import { Text, View, StyleSheet, StatusBar, ScrollView, ImageBackground } from "react-native"
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
                    <View style={styles.cajaContainSlide}>
                        <View style={styles.cajaSlide}>
                            <ImageBackground source={require('../images/add.png')} style={styles.imgHomeInfo}>
                                <View style={styles.infoImagenHomeCaja}>
                                    <Ionicons name="add" size={50} color="black" style={styles.iconoHomeImg}/>
                                    <Text>Add itineraries</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.cajaSlide} >
                            <ImageBackground source={require('../images/share.png')} style={styles.imgHomeInfo}>
                                <View style={styles.infoImagenHomeCaja}>
                                    <Fontisto name="comments" size={40} color="black" style={styles.iconoHomeImg}/>
                                    <Text>Share experiences</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.cajaSlide} >
                            <ImageBackground source={require('../images/vivelo.png')} style={styles.imgHomeInfo}>
                                <View style={styles.infoImagenHomeCaja}>
                                    <Ionicons name="ios-navigate" size={40} color="black" style={styles.iconoHomeImg}/>
                                    <Text>Live them yourself</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <Text style={styles.textoSecundarioHome}>
                “We travel for romance, we travel for architecture, and we travel to be lost.”
            </Text>
            <Text style={styles.botonGetStarted} onPress={() => props.navigation.navigate('cities')}>
                Get Started <Ionicons name="ios-navigate" size={24} color="#EB4D4B" />
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
        color: "#EB4D4B",
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
        height: "90%", 
        width: 300,
        marginRight: 40,
        marginBottom: 20,
        marginTop: 10,
        borderRadius: 50,
        overflow: "hidden"
    },
    scrollView:{
        flexDirection: "row",
        paddingLeft: 30,
        height: 300
    },
    imgHomeInfo:{
        flex: 1,
        justifyContent: "flex-end",     
    },
    cajaContainSlide:{
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    infoImagenHomeCaja:{
        backgroundColor: "#F6F4E7",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
    },
    iconoHomeImg:{
        marginRight: 20
    }
  });

export default Home