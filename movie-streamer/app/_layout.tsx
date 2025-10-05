import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack, Redirect  } from 'expo-router'
import { useState, useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native";

const RootLayout = () => {

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>
  );
};

export default RootLayout;