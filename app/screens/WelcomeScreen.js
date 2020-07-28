import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  StyleSheet, Text, View, SafeAreaView,
} from 'react-native';

import { Button } from 'react-native-elements';
import { logOutUser } from '../store/actions/UserActions';

const WelcomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const userId = useSelector(({ user: { userId } }) => userId);
  const logOut = () => {
    dispatch(logOutUser());
  };

  const goToButton = (path) => {
    navigation.navigate(path, { userId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={{ textAlign: 'center' }}>Welcome Home!</Text>
        <Button buttonStyle={styles.button} title="Log Out" onPress={logOut} />
        <Button
          buttonStyle={styles.button}
          title="User Profile"
          onPress={() => goToButton('Profile')}
        />
        <Button
          buttonStyle={styles.button}
          title="Users List"
          onPress={() => goToButton('UsersList')}
        />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '50%',
    height: 'auto',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#9198e5',
    marginBottom: 10,
  },
});
