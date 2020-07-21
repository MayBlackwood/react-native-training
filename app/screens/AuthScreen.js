import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  SafeAreaView, StyleSheet, View, TextInput, Text,
} from 'react-native';

import { Button } from 'react-native-elements';
import { logInUser } from '../store/actions/UserActions';

const LogInSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const AuthScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogInButton = ({ username, password }) => {
    dispatch(logInUser(username, password, navigation));
  };

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={LogInSchema}
      onSubmit={(values) => handleLogInButton(values)}
    >
      {({
        handleChange,
        handleSubmit,
        values: { username, password },
        errors,
        touched,
      }) => (
        <SafeAreaView style={styles.container}>
          <View style={{ width: '70%' }}>
            <TextInput
              value={username}
              onChangeText={handleChange('username')}
              placeholder="Username"
              style={styles.textInput}
            />
            {errors.username && touched.username ? (
              <Text style={styles.errorText}>{errors.username}</Text>
            ) : null}
            <TextInput
              value={password}
              onChangeText={handleChange('password')}
              placeholder="Password"
              secureTextEntry
              style={styles.textInput}
            />
            {errors.password && touched.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
          </View>
          <Button
            title="Log In"
            onPress={handleSubmit}
            buttonStyle={styles.logInButton}
          />
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#355C7D',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 15,
  },
  logInButton: {
    textAlign: 'center',
    width: '100%',
    paddingRight: '30%',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
    marginTop: 30,
  },
  errorText: {
    color: '#C06C84',
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 6,
  },
});
