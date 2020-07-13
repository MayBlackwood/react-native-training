import React, { useState } from "react";
import { SafeAreaView, Alert, StyleSheet, TextInput, View } from "react-native";
import CustomButton from "./../components/CustomButton";
import Input from "./../components/Input";

const AuthScreen = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handlePasswordChange = (e) => {
    console.log(e.nativeEvent.text);
    setPasswordValue(e.nativeEvent.text);
  };

  const handleEmailChange = (e) => {
    console.log(e.nativeEvent.text);
    setEmailValue(e.nativeEvent.text);
  };

  const handleButtonClick = () => {
    Alert.alert("Title", "Message", [{ title: "OK" }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "70%" }}>
        <Input
          value={emailValue}
          onHandleChange={handleEmailChange}
          placeholder="E-mail"
          label="E-mail"
          icon="envelope"
          name="email"
          keyboardType="email-address"
        />
        <Input
          value={passwordValue}
          onHandleChange={handlePasswordChange}
          placeholder="Password"
          label="Password"
          icon="lock"
          name="password"
          secureTextEntry={true}
          autoCompleteType="password"
          password={true}
        />
      </View>
      <CustomButton title="Log In" onPress={handleButtonClick} />
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
