import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { SafeAreaView, StyleSheet, View } from 'react-native';

import { Button } from 'react-native-elements';
import { logIn } from '../store/actions/UserActions';
import FormInput from '../components/FormInput';
import Preloader from '../components/Preloader';

const LogInSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('* Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('* Required'),
});

const AuthScreen = ({ navigation }) => {
  const { isLoading } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const handleLogInButton = ({ username, password }) => {
    dispatch(logIn(username, password, navigation));
  };

  return (
    <Fragment>
      {isLoading && <Preloader />}
      {!isLoading && (
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={LogInSchema}
          onSubmit={(values) => handleLogInButton(values)}
        >
          {({
            handleChange, handleSubmit, values, errors, touched,
          }) => (
            <SafeAreaView style={styles.container}>
              <View style={{ width: '70%' }}>
                {logInFormConfig.map(({ value, title }) => (
                  <FormInput
                    title={title}
                    value={value}
                    handleChange={handleChange}
                    values={values}
                    errors={errors}
                    touched={touched}
                    key={value}
                  />
                ))}
              </View>
              <Button
                title="Log In"
                onPress={handleSubmit}
                buttonStyle={styles.logInButton}
              />
            </SafeAreaView>
          )}
        </Formik>
      )}
    </Fragment>
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

const logInFormConfig = [
  { value: 'username', title: 'Username' },
  { value: 'password', title: 'Password' },
];
