import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import AuthScreen from "./app/screens/AuthScreen";
import Home from "./app/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "./app/screens/SignUpScreen";
import UserProfile from "./app/screens/UserProfile";
import store from "./app/store/index";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
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
          <Stack.Screen
            name="UserProfile"
            component={UserProfile}
            title={{ title: "User Profile" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
