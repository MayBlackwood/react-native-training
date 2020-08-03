import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistStore } from 'redux-persist';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './app/screens/AuthScreen';
import Home from './app/screens/Home';
import SignUpScreen from './app/screens/SignUpScreen';
import EditUserPage from './app/screens/EditUserPage';
import Profile from './app/screens/Profile';
import UsersList from './app/screens/UsersList';
import FriendsList from './app/screens/FriendsList';
import store from './app/store/index';

const Stack = createStackNavigator();

const persistedStore = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistedStore} loading={null}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home Page' }}
          />
          <Stack.Screen
            name="Authorization"
            component={AuthScreen}
            options={{ title: 'Authorization' }}
          />
          <Stack.Screen
            name="SignUpPage"
            component={SignUpScreen}
            options={{ title: 'Sign Up' }}
          />
          <Stack.Screen
            name="UsersList"
            component={UsersList}
            options={{ title: 'All Users' }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: 'User Profile' }}
          />
          <Stack.Screen
            name="EditUserPage"
            component={EditUserPage}
            options={{ title: 'Edit User' }}
          />
          <Stack.Screen
            name="FriendsList"
            component={FriendsList}
            options={{ title: 'My Friends' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
