import { StyleSheet, Text, View } from "react-native";
import useState from 'react'


const SignUp = () => {
    const [ email, setUserEmail ] = useState('')
    const [ password, setUserPassword ] = useState('')

    const userData = {
        email: email, 
        password: password
    }
// take username 
// take passowrd  
    const signUpUser = fetch({
        method: "Post", 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(userData)
    })


    return (
        <View>
            <Text>Sign up</Text>
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


