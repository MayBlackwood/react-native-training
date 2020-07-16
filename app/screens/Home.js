import React from "react";
import { connect } from "react-redux";
import AuthUserHome from "./AuthUserHome";
import NotAuthUserHome from "./NotAuthUserHome";

const mapStateToProps = ({ user }) => {
  return { userInfo: user };
};

const Home = ({ userInfo, navigation }) => {
  return userInfo.isLogged ? (
    <AuthUserHome />
  ) : (
    <NotAuthUserHome navigation={navigation} />
  );
};

export default connect(mapStateToProps)(Home);
