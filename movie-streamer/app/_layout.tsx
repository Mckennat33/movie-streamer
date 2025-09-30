import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack, Redirect  } from 'expo-router'
import { useState, useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native";

const RootLayout = () => {

  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />

  
    </Stack>
  );
};

export default RootLayout;

