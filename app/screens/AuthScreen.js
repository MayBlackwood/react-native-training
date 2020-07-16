import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logInUser } from "./../store/actions/UserActions";

import { SafeAreaView, Alert, StyleSheet, View } from "react-native";
import CustomButton from "./../components/CustomButton";
import Input from "./../components/Input";

const mapStateToProps = ({ user }) => {
  return { data: user };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logInUser }, dispatch);
};

const AuthScreen = ({ navigation, logInUser, data }) => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formState;

  const handleFormChange = (e, name) => {
    setFormState({ ...formState, [name]: e.nativeEvent.text });
  };

  const handleLogInButton = () => {
    logInUser(username, password, navigation);
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
      <CustomButton title="Log In" onPress={handleLogInButton} />
    </SafeAreaView>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
