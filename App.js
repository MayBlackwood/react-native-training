import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { persistStore } from "redux-persist";
import AuthScreen from "./app/screens/AuthScreen";
import Home from "./app/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "./app/screens/SignUpScreen";
import UserProfile from "./app/screens/UserProfile";
import store from "./app/store/index";

const Stack = createStackNavigator();

const persistedStore = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
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
      </PersistGate>
    </Provider>
  );
};

export default App;
