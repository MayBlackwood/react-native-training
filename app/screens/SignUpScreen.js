import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Alert } from "react-native";
import Input from "./../components/Input";
import { Button } from "react-native-elements";

const SignUpScreen = () => {
  const [authInfo, setAuthInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    description: "",
  });

  const {
    firstName,
    lastName,
    email,
    password,
    repeatPassword,
    description,
  } = authInfo;

  const handleFormChange = (e, name) => {
    setAuthInfo({ ...authInfo, [name]: e.nativeEvent.text });
  };

  const handleButtonClick = () => {
    Alert.alert("Sign Up", "You are successfully signed up!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "80%" }}>
        <Input
          placeholder="First Name"
          value={firstName}
          onHandleChange={(e) => handleFormChange(e, "firstName")}
          label="First Name"
        />
        <Input
          placeholder="Last Name"
          value={lastName}
          onHandleChange={(e) => handleFormChange(e, "lastName")}
          label="Last Name"
        />
        <Input
          placeholder="Email"
          value={email}
          onHandleChange={(e) => handleFormChange(e, "email")}
          label="Email"
        />
        <Input
          placeholder="Password"
          value={password}
          onHandleChange={(e) => handleFormChange(e, "password")}
          label="Password"
          secureTextEntry={true}
        />
        <Input
          placeholder="Repeat Password"
          value={repeatPassword}
          onHandleChange={(e) => handleFormChange(e, "repeatPassword")}
          label="Password"
          secureTextEntry={true}
        />
        <Input
          placeholder="Description"
          value={description}
          onHandleChange={(e) => handleFormChange(e, "description")}
          label="Description"
        />
      </View>
      <Button
        title="Sign Up"
        onPress={handleButtonClick}
        buttonStyle={styles.signUpButton}
      />
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpButton: {
    paddingLeft: 30,
    paddingRight: 30,
  },
});
