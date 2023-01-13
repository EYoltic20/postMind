import React, {useState} from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import Logo from '../../assets/images/SOMIS.png';
import CustomInput from "../components/CustomInput/CustomInput";
import CustomButton from "../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const SignInScreen = () => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn("Sign in");
    };

    const onForgotPasswordPressed = () => {
        console.warn("Password olvidado");
        navigation.navigate('ForgotPasswordS');
    };

    const onSignInGoogle = () => {
        console.warn("Log in Google");
    };



    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, Username, Password)
        .then((re) => {
            const user = userCredentials.user;
            //console.log(L);
        })
        .catch((re) => {
            console.log(re)
        })

    }
    return (
        <View style={styles.root}>
            <Image source={Logo} style = {[styles.logo, {height: height * 0.3}] } resizeMode="contain" />
            <CustomInput placeholder="Username" Value={Username} setValue={setUsername} />
            <CustomInput placeholder="Password" Value={Password} setValue={setPassword} secureTextEntry={true} />
            <CustomButton text="Sign In" onPress={handleSignUp} />
            <CustomButton text="¿Olvidaste tu password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>
            <CustomButton text="Sign in Google" onPress={onSignInGoogle} type="Google"/>
            
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



export default SignInScreen