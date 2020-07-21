import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Alert,
  ScrollView,
  TextInput,
  Text,
} from 'react-native';
import { Button } from 'react-native-elements';
import { logInUser } from '../store/actions/UserActions';

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .required('* Required')
    .min(2, 'Too Short!')
    .max(40, 'Too Long!')
    .matches(/[a-zA-Z]/, 'Username can only contain Latin letters.'),
  firstName: Yup.string()
    .required('* Required')
    .min(2, 'Too Short!')
    .max(40, 'Too Long!')
    .matches(/[a-zA-Z]/, 'First name can only contain Latin letters.'),
  lastName: Yup.string()
    .required('* Required')
    .min(2, 'Too Short!')
    .max(40, 'Too Long!')
    .matches(/[a-zA-Z]/, 'Last name can only contain Latin letters.'),
  email: Yup.string()
    .required('* Required')
    .min(2, 'Too Short!')
    .max(40, 'Too Long!')
    .email('Invalid email'),
  password: Yup.string()
    .required('Password is required')
    .required('* Required')
    .min(2, 'Too Short!')
    .max(40, 'Too Long!'),
  passwordConfirmation: Yup.string()
    .required('* Required')
    .min(2, 'Too Short!')
    .max(40, 'Too Long!')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  description: Yup.string().min(2, 'Too Short!').max(40, 'Too Long!'),
});

const SignUpScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleButtonClick = (values) => {
    signUpUser(values);
  };

  const signUpUser = async ({
    username,
    firstName,
    lastName,
    email,
    password,
    description,
  }) => {
    await axios({
      method: 'POST',
      url: 'http://10.0.2.2:5000/sign_up',
      data: {
        username,
        firstName,
        lastName,
        email,
        password,
        description,
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(({ data: { message } }) => {
        Alert.alert('Sign Up', `${message}`);
        dispatch(logInUser(username, password, navigation));
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
        return error;
      });
  };

  return (
    <Formik
      initialValues={{
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        description: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values) => handleButtonClick(values)}
    >
      {({
        handleChange, handleSubmit, values, errors, touched,
      }) => (
        <SafeAreaView style={styles.container}>
          <ScrollView style={{ width: '100%' }}>
            <View
              style={{
                width: '80%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 30,
              }}
            >
              {signUpFormConfig.map(({ value, title }) => (
                <View
                  style={{
                    marginBottom: 20,
                  }}
                  key={value}
                >
                  <TextInput
                    value={values[value]}
                    onChangeText={handleChange(value)}
                    placeholder={title}
                    secureTextEntry={
                      !!(value === 'password' || 'passwordConfirmation')
                    }
                    style={styles.textInput}
                  />
                  {errors[value] && touched[value] ? (
                    <Text style={styles.errorText}>{errors[value]}</Text>
                  ) : null}
                </View>
              ))}
            </View>
            <Button
              title="Sign Up"
              onPress={handleSubmit}
              buttonStyle={styles.signUpButton}
            />
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpButton: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#355C7D',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: '#C06C84',
    fontWeight: 'bold',
    marginTop: 6,
  },
});

const signUpFormConfig = [
  { value: 'username', title: 'Username' },
  { value: 'firstName', title: 'First Name' },
  { value: 'lastName', title: 'Last Name' },
  { value: 'email', title: 'E-mail' },
  { value: 'password', title: 'Password' },
  { value: 'passwordConfirmation', title: 'Confirm Password' },
  { value: 'description', title: 'Description' },
];
