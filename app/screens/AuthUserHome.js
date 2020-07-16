import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logOutUser } from "./../store/actions/UserActions";

import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";

const mapStateToProps = ({ user }) => {
  return { userInfo: user };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logOutUser }, dispatch);
};

const AuthUserHome = ({ logOutUser, userInfo }) => {
  const logOut = () => {
    console.log("Home logout");
    logOutUser();
  };

  const getStore = () => {
    console.log(userInfo);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text>Welcome Home!</Text>
        <Button buttonStyle={styles.button} title="Log Out" onPress={logOut} />
        <Button buttonStyle={styles.button} title="Get" onPress={getStore} />
      </View>
    </SafeAreaView>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthUserHome);

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
