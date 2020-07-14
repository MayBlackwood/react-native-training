import React, { useState } from "react";
import axios from "axios";
import {
  SafeAreaView,
  Alert,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
} from "react-native";
import CustomButton from "./../components/CustomButton";
import Input from "./../components/Input";

const AuthScreen = ({ navigation }) => {
  const [formState, setFormState] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { email, username, password } = formState;

  const handleFormChange = (e, name) => {
    setFormState({ ...formState, [name]: e.nativeEvent.text });
  };

  const logInUser = () => {
    axios({
      method: "POST",
      url: "http://10.0.2.2:5000/login",
      data: {
        username: username,
        password: password,
      },
      header: {
        "Content-Type": "application/json",
      },
    })
      .then(({ status, data }) => {
        if (status === 200) {
          AsyncStorage.setItem("token", data.token);
          Alert.alert("Success", "You are successfully logged in!");
          setFormState({ email: "", username: "", password: "" });
          navigation.navigate("UserProfile");
        } else {
          Alert.alert("Error", "Check the data.");
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "70%" }}>
        <Input
          value={username}
          onHandleChange={(e) => handleFormChange(e, "username")}
          placeholder="Username"
          label="Username"
          icon="user"
        />
        <Input
          value={password}
          onHandleChange={(e) => handleFormChange(e, "password")}
          placeholder="Password"
          label="Password"
          icon="lock"
          secureTextEntry={true}
          password={true}
        />
      </View>
      <CustomButton title="Log In" onPress={logInUser} />
    </SafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
