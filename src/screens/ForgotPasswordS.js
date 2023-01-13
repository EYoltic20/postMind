import React, {useState} from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import CustomInput from "../components/CustomInput/CustomInput";
import CustomButton from "../components/CustomButton/CustomButton";


const ForgotPasswordS = () => {
    const [Code, setCode] = useState('');
    const [NPass, setNPass] = useState('');
    const {height} = useWindowDimensions();

    const onNPass = () => {
        console.warn("Cambiando password");
    };
    


    return (
        <View style={styles.root}>
            <CustomInput placeholder="Código recibido" Value={Code} setValue={setCode} />
            <CustomInput placeholder="Nuevo Password" Value={NPass} setValue={setNPass} secureTextEntry={false} />
            <CustomButton text="Change" onPress={onNPass} type="Google"/>
        </View>
    );
};
    
const styles = StyleSheet.create({
        root:{
            alignItems: 'center',
            padding: 20,
        },
        logo: {
            width: '70%',
            maxWidth: 300,
            maxHeight: 200,
        },
});



export default ForgotPasswordS