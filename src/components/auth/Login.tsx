import React from 'react';
import style from 'styled-components';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';


export interface Props {
    name?: string;
    enthusiasmLevel?: number;
  }

const Login: React.FC<Props> = () => {

    const handlerLogin = () => {
        console.log("Hola");
    }
    return(
        <View>
            <TextInput />
            <Button 
                title="-"
                onPress={handlerLogin}
                accessibilityLabel="decrement"
                color="red"
            />
        </View>
    )
}

export default Login;