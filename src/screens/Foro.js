import React from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';

const Foro = () => {
    return (
    <ScrollView style={styles.background}>
        <View style={styles.root}>

        <Text style={styles.Title}> Foro </Text>
        <Text></Text>

        <Text style={styles.body}> ¿Qué es somics? {"\n"} Somos un grupo de estudiantes Tec sin miedo 
        al éxito   {"\n"}</Text>

        <Text style={styles.body}> Lugares para que adolescente y adultos se puedan diagnosticar espectros 
        del autismo:  {"\n"} https://www.asperger.org.mx/ {"\n"} </Text>
        <Image
          style={{width: '110%', height: '20%'}}
          source={{uri:'https://www.asperger.org.mx/wordpress/wp-content/uploads/2023/01/Diagnostico.png'}}
        />
        
        <Text style={styles.body2}> Teléfono: (55) 5203 9465 {"\n"} Whatsapp: (55) 3960 1430  {"\n"} </Text>

        <Text style={styles.body}> Información de contacto y procedimiento para diagnóstico en niños {"\n"} 
        https://www.cdc.gov/ncbddd/spanish/autism/screening.html  {"\n"}  {"\n"}  {"\n"} {"\n"} {"\n"} {"\n"} </Text>
        
        <Text></Text>

        </View>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 15,

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

    body2: {
        textAlign: "left",
        fontSize: 20,
        fontStyle: "normal",
        /*backgroundColor: "#FFFFE8",
        borderWidth: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flex: 0.5*/
    },
});

export default Foro;
