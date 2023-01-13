import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from '../screens/SignInScreen';
import ForgotPasswordS from '../screens/ForgotPasswordS';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="ForgotPasswordS" component={ForgotPasswordS} />

            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default Navigation;