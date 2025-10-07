import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack, Redirect  } from 'expo-router'
import { useState, useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons'

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
    tabBarActiveTintColor: '#ffd33d',
    headerStyle: {
      backgroundColor: '#25292e',
    },
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
      backgroundColor: '#25292e',
    },
  }}>
      <Tabs.Screen  name="home" options={{ title: 'Home', 
      tabBarIcon: ({ color, size, focused }) => (
        <Ionicons 
          size={size}
          name="home"
          color={color}
        />
      )}} 
      />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: ({ color, size, focused }) => (
        <Ionicons 
          size={size}
          name="person"
          color={color}
        />
      ) }} />
    </Tabs>
  );
};

export default TabLayout;


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
  }
})