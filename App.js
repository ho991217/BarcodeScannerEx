import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BarcodeScanner from "./screens/BarcodeScanner";
import Home from "./screens/Home";

const Stack = createStackNavigator();

const navHeaderShownFalse = () => ({ headerShown: false });

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={navHeaderShownFalse}
        />
        <Stack.Screen
          name="BarcodeScanner"
          component={BarcodeScanner}
          options={navHeaderShownFalse}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
