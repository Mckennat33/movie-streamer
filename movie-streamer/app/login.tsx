import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState, useEffect } from "react";



const Login = () => {

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ]= useState('')

    return (
        <View>
            <Text>Login</Text>
            <TextInput 
                onChangeText={setUsername}
            >
                Username
            </TextInput>
            <TextInput
                onChangeText={setPassword}
            >
                Password
            </TextInput>

        </View>
    )
}

export default Login;

const styles = StyleSheet.create({})

