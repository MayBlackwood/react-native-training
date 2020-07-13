import "react-native-gesture-handler";
import React from "react";
import AuthScreen from "./app/screens/AuthScreen";
import Home from "./app/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from './app/screens/SignUpScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home Page" }}
        />
        <Stack.Screen
          name="Authorization"
          component={AuthScreen}
          title={{ title: "Authorization" }}
        />
        <Stack.Screen
          name="SignUpPage"
          component={SignUpScreen}
          title={{ title: "Sign Up Page" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
