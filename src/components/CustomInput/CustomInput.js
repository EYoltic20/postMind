import React from "react";
import {View, Text, TextInput, StyleSheet, useWindowDimensions} from 'react-native'


// secureTextEntry={secureTextEntry}  Value = {Value} onChangeText = {setValue} 
const CustomInput = ({Value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput 
            placeholder= {placeholder}
            secureTextEntry={secureTextEntry}  Value = {Value} onChangeText = {setValue}  
            style={styles.input}
            />

        </View>

            
    );

};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#E8E8E8',
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {

    },
});

export default CustomInput