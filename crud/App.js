import React from "react";
import { NativeBaseProvider } from "native-base";
import { FormScreen } from "./src/screens/register-screen";
import { HomeScreen } from "./src/screens/home-screen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FormScreen" component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}
