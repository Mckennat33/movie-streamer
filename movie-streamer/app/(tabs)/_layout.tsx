import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack, Redirect  } from 'expo-router'
import { useState, useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons'

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: 'Home', tabBarIcon: () => (
        <Ionicons 
          size={24}
          name="home"
        />
      )}} 
      />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: () => (
        <Ionicons 
          size={24}
          name="person"
        />
      ) }} />
    </Tabs>
  );
};

export default TabLayout;
