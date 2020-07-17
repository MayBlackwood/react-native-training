import React from "react";
import { useDispatch } from "react-redux";
import { logInUser } from "./../store/actions/UserActions";
import { Formik } from "formik";
import * as Yup from "yup";

import { SafeAreaView, StyleSheet, View, TextInput, Text } from "react-native";

import { Button } from "react-native-elements";

const LogInSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const AuthScreen = ({ navigation, errors }) => {
  const dispatch = useDispatch();

  const handleLogInButton = ({ username, password }) => {
    dispatch(logInUser(username, password, navigation));
  };

  const showErrors = (errors) => {
    console.log(errors);
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={LogInSchema}
      onSubmit={(values) => handleLogInButton(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <SafeAreaView style={styles.container}>
          <View style={{ width: "70%" }}>
            <TextInput
              value={values.username}
              onChangeText={handleChange("username")}
              placeholder="Username"
              selectionColor="blue"
              style={styles.textInput}
            />
            <Text style={styles.errorText}>{errors.username}</Text>
            <TextInput
              value={values.password}
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry={true}
              selectionColor="blue"
              style={styles.textInput}
            />
            <Text style={styles.errorText}>{errors.password}</Text>
          </View>
          <Button
            title="Log In"
            onPress={handleSubmit}
            style={{ width: "100%" }}
            buttonStyle={styles.signUpButton}
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
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#355C7D",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  signUpButton: {
    textAlign: "center",
    width: "80%",
    paddingRight: "25%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 30,
  },
  errorText: {
    color: "#C06C84",
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 6,
  },
});
