import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack, Redirect  } from 'expo-router'
import { useState, useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native";


// if the user is not signed in 
  // take them to the login page
// if they are take them to the home page 

const RootLayout = () => {
  const [ isSignedIn, setIsSignedIn ] = useState(false)

  return (
    <Stack>
      {isSignedIn ? (
        <Stack.Screen 
          name='login'
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen 
          name="(tabs)" 
          options={{headerShown: false}}
        />
      )}
    </Stack>
  );
};

export default RootLayout;