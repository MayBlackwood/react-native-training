import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logInUser } from "./../store/actions/UserActions";

import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";

const mapStateToProps = ({ user }) => {
  return { userInfo: user };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logInUser }, dispatch);
};

const NotAuthUserHome = ({ navigation, logInUser, userInfo }) => {
  const handleGoToButtonsClick = (pathName) => {
    navigation.navigate(pathName);
  };

  const handleLoginUser = () => {
    logInUser({ id: 2 });
  };

  const getStore = () => {
    console.log(userInfo);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={{ textAlign: "center", marginBottom: 10 }}>
          Do you have profile? Log In or Sign Up!
        </Text>
        <View>
          <Button
            buttonStyle={styles.button}
            title="Log In"
            onPress={() => handleGoToButtonsClick("Authorization")}
          />
          <Button
            buttonStyle={styles.button}
            title="Sign Up"
            onPress={() => handleGoToButtonsClick("SignUpPage")}
          />
          <Button
            buttonStyle={styles.button}
            title="Get Users Info"
            onPress={handleLoginUser}
          />
          <Button title="Get Store" onPress={getStore} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NotAuthUserHome);

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
