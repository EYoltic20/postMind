import React from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'

export default function HomeTrial () {
    return(
        <Text style = {styles.Title}> Bienvenidos </Text>
    );
};
const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,

    },
    background:{
        backgroundColor: '#E3F6FF',
    },
    Title: {
        textAlign: "center",
        fontSize: 50,
        fontStyle: "normal"
    },
    body: {
        textAlign: "left",
        fontSize: 25,
        fontStyle: "normal",
        /*backgroundColor: "#FFFFE8",
        borderWidth: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flex: 0.5*/
    },
});

