import { StyleSheet, Text, View } from "react-native";

const SignUp = () => {
    const [ email, setUserEmail ] = useState('')
    const [ password, setUserPassword ] = useState('')

// take username 
// take passowrd  



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


