import React from "react";
import { useDispatch } from "react-redux";
import { logOutUser } from "../store/actions/UserActions";

import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";

const WelcomeScreen = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logOutUser());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text>Welcome Home!</Text>
        <Button buttonStyle={styles.button} title="Log Out" onPress={logOut} />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "50%",
    height: "auto",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#9198e5",
    marginBottom: 10,
  },
});
