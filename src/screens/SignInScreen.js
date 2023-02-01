import React, {useState} from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions, Stack} from 'react-native'
import Logo from '../../assets/images/SOMIS.png';
import CustomInput from "../components/CustomInput/CustomInput";
import CustomButton from "../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { NavigationContainer, StackActions, TabActions } from '@react-navigation/native';

const SignInScreen = () => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false)
    
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn("Sign in");
        navigation.navigate('Foro');
    };

    const onForgotPasswordPressed = () => {
        console.warn("Password olvidado");
        navigation.navigate('Password olvidado');
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

    const handleSignIn = () => {
        //signInWithEmailAndPassword
        signInWithEmailAndPassword(auth, Username, Password)
        .then((re) => {
            //const user = userCredentials.user;
            setIsSignedIn(true)
            navigation.navigate('Foro');
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
            <CustomButton text="¿Olvidaste tu password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>
            
            <CustomButton text="Sign In" onPress={handleSignIn} type="Google"/> 
            
            <CustomButton text="Sign Up" onPress={handleSignUp} />
            
        
            
        
        
        </View>

    );
};
    
const styles = StyleSheet.create({
        root:{
            alignItems: 'center',
            padding: 20,
            
        },
        root2:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,

        },
        logo: {
            width: '70%',
            maxWidth: 300,
            maxHeight: 200,
        },
        submitButton: {
            position: 'absolute',
            height: 50,
            width: 20,
            bottom:0,
            left:0,
        },
});



export default SignInScreen
