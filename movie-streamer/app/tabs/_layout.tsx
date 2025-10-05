import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack, Redirect  } from 'expo-router'
import { useState, useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{title: 'Home'}}  />
        <Tabs.Screen name="profile" options={{title: 'Profile'}} />
    </Tabs>
  );
};

export default TabLayout;
