import { StyleSheet, Text, TextInput, View } from "react-native";
import useState from 'react'


const SignUp = () => {
    const [ username, setUsername ] = useState('')
    const [ email, setUserEmail ] = useState('')
    const [ password, setUserPassword ] = useState('')

    const userData = {
        username: username,
        email: email, 
        password: password
    }
// take username 
// take passowrd  
    const signUpUser = fetch({
        method: "Post", 
        // Post to the backend server 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(userData)
    })


    return (
        <View>
            <Text>Sign up</Text>
            <TextInput
                onChangeText={setUsername}
            > Username </TextInput>
            <TextInput
                onChangeText={setUserEmail}
            > Email </TextInput>
            <TextInput
                onChangeText={setUserPassword}
            > Password </TextInput>
        </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({})


