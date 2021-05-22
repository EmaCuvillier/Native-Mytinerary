import { Text, View, StyleSheet, ScrollView } from "react-native"
import React from "react"
import Header from '../components/Header'

const Cities = (props)=>{
    return(
        <>
        <Header props={props}/> 
        <ScrollView>
            <View style={styles.containerCities}>
                <View style={styles.popularFilter}>
                    <Text style={[styles.textFilter, styles.allFilter]}>All</Text>
                    <Text style={styles.textFilter}>Hong Kong</Text>
                    <Text style={styles.textFilter}>London</Text>
                    <Text style={styles.textFilter}>Paris</Text>
                </View>
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
    
  });
export default Cities