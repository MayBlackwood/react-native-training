import React, { useState } from "react";
import { SafeAreaView, Alert, StyleSheet, TextInput, View } from "react-native";
import CustomButton from "./../components/CustomButton";
import Input from "./../components/Input";

const AuthScreen = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const { email, password } = formState;

  const handleFormChange = (e, name) => {
    setFormState({ ...formState, [name]: e.nativeEvent.text });
  };

  const handleButtonClick = () => {
    Alert.alert("Title", "Message", [{ title: "OK" }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "70%" }}>
        <Input
          value={email}
          onHandleChange={(e) => handleFormChange(e, "email")}
          placeholder="E-mail"
          label="E-mail"
          icon="envelope"
          name="email"
          keyboardType="email-address"
        />
        <Input
          value={password}
          onHandleChange={(e) => handleFormChange(e, "password")}
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
