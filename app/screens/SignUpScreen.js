import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
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

  const handleFirstNameChange = (e) => {
    setAuthInfo({ ...authInfo, firstName: e.nativeEvent.text });
  };

  const handleLastNameChange = (e) => {
    setAuthInfo({ ...authInfo, lastName: e.nativeEvent.text });
  };

  const handleEmailChange = (e) => {
    setAuthInfo({ ...authInfo, email: e.nativeEvent.text });
  };

  const handlePassChange = (e) => {
    setAuthInfo({ ...authInfo, password: e.nativeEvent.text });
  };

  const handleRepeatPassChange = (e) => {
    setAuthInfo({ ...authInfo, repeatPassword: e.nativeEvent.text });
  };

  const handleDescChange = (e) => {
    setAuthInfo({ ...authInfo, description: e.nativeEvent.text });
  };

  const handleButtonClick = () => {
    console.log(authInfo);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "80%" }}>
        <Input
          placeholder="First Name"
          value={firstName}
          onHandleChange={handleFirstNameChange}
          label="First Name"
        />
        <Input
          placeholder="Last Name"
          value={lastName}
          onHandleChange={handleLastNameChange}
          label="Last Name"
        />
        <Input
          placeholder="Email"
          value={email}
          onHandleChange={handleEmailChange}
          label="Email"
        />
        <Input
          placeholder="Password"
          value={password}
          onHandleChange={handlePassChange}
          label="Password"
          secureTextEntry={true}
        />
        <Input
          placeholder="Repeat Password"
          value={repeatPassword}
          onHandleChange={handleRepeatPassChange}
          label="Password"
          secureTextEntry={true}
        />
        <Input
          placeholder="Description"
          value={description}
          onHandleChange={handleDescChange}
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
    paddingRight: 30
  },
});
