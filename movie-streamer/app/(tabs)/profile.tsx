import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from 'react'
import { Redirect } from "expo-router";
import { Link } from "expo-router";

const Profile = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(null)
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Profile Page</Text>

    </View>
  );
}

export default Profile; 
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});