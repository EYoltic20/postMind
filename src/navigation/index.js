import React from "react";
import Logo from '../../assets/images/SOMIS.png';
import { View, Text } from 'react-native';
import { NavigationContainer, StackActions, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

import SignInScreen from '../screens/SignInScreen';
import ForgotPasswordS from '../screens/ForgotPasswordS';
import Foro from '../screens/Foro';
import Emocion from '../screens/Emocion';
import HomeScreen from '../screens/HomeTrial';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const homeName = 'Inicio';
const detailsName = 'Tu Chat bot';
const settingsName = 'Foro';

const StackNav = () => {
    return (
    <Stack.Navigator>
        

        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Password olvidado" component={ForgotPasswordS} />
        <Stack.Screen name="Foro" component={TabNav} options = {{headerShown: false}}/>
     

    </Stack.Navigator>
    );
};

const TabNav = () => {
    return (
         <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (rn === detailsName){
                            iconName = focused ? 'settings' : 'settings-outline'
                        } else if (rn === settingsName){
                            iconName = focused ? 'id-card' : 'id-card-outline'
                        }
                    return <Ionicons name = {iconName} size = {30} color = {color} />
                    },

                })}
              
                > 
                
                <Tab.Screen name = {homeName} component={HomeScreen} options = {{headerShown: false}}/>
                <Tab.Screen name = {detailsName} component={Emocion} options = {{headerShown: false}}/>
                <Tab.Screen name = {settingsName} component={Foro} options = {{headerShown: false}}/>

                </Tab.Navigator>
    );
};

export default function Navigation() {
    const [isLoading, setIsLoading] = React.useState(true)
    const [user, setUser] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
        
    }, 500)
  }, [])
    return (
        
        <NavigationContainer>
            <StackNav/>
        </NavigationContainer>
       

        

    );
};

