import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack  } from 'expo-router'
import { StackRouter } from "expo-router/build/layouts/StackClient";


const rootLayout = () => {
  return (
      <Stack>
        <Stack.Screen name="index" options={{title: 'Home'}} />
      </Stack>
  );
}

export default rootLayout; 

// stylesheet object 
const styles = StyleSheet.create({})    



// import { Stack } from "expo-router";



// export default function RootLayout() {
//   return <Stack />;
// }

// root layout - shows up on every page of the application- think of the bottom of the instagram page. 