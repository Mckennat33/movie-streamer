import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from 'react'
import { Redirect } from "expo-router";
import { Link } from "expo-router";

const Profile = () => {

  const [ isLoggedIn, setIsLoggedIn ] = useState(null)



  return (
    <View>
      <Text>Profile Page</Text>

    </View>
  );
}

export default Profile; 

// stylesheet object 
const styles = StyleSheet.create({})  