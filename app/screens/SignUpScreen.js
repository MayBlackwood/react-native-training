import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Alert,
  ScrollView,
} from "react-native";
import { logInUser } from "./../store/actions/UserActions";
import Input from "./../components/Input";
import { Button } from "react-native-elements";
import Axios from "axios";

const SignUpScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [authInfo, setAuthInfo] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    description: "",
  });

  const {
    username,
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
    signUpUser();
    dispatch(logInUser(username, password, navigation));
  };

  const signUpUser = async () => {
    await Axios({
      method: "POST",
      url: "http://10.0.2.2:5000/sign_up",
      data: {
        username,
        firstName,
        lastName,
        email,
        password,
        description,
      },
      header: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <View
          style={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
          }}
        >
          <Input
            placeholder="Username"
            value={username}
            onHandleChange={(e) => handleFormChange(e, "username")}
            label="Username"
          />
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
      </ScrollView>
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
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 30,
  },
});
