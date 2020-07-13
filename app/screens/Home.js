import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";

const Home = ({ navigation }) => {
  const handleGoToButtonsClick = (pathName) => {
    navigation.navigate(pathName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Do you have profile? Log In or Sign Up!</Text>
      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={styles.button}
          title="Log In"
          onPress={() => handleGoToButtonsClick("Authorization")}
        />
        <Button
          title="Sign Up"
          onPress={() => handleGoToButtonsClick("SignUpPage")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

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
