import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logInUser } from "./../store/actions/UserActions";

const mapStateToProps = ({ user }) => {
  return { userInfo: user };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logInUser }, dispatch);
};

const Home = ({ logInUser, userInfo, navigation }) => {
  const { userData, isLogged } = userInfo;
  const handleGoToButtonsClick = (pathName) => {
    navigation.navigate(pathName);
  };

  const handleLoginUser = () => {
    logInUser({ id: 2 });
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLogged && (
        <View>
          <Text>Welcome Home!</Text>
          <Text>{isLogged.toString()}</Text>
          <Text>{userData.email}</Text>
        </View>
      )}
      {!isLogged && (
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
            <Button title="Get Users Info" onPress={handleLoginUser} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
