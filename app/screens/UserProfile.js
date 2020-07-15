import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const UserProfile = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is your Profile!</Text>
    </SafeAreaView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8B195",
  },
});
