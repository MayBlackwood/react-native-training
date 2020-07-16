import React from "react";
import { connect } from "react-redux";
import AuthUserHome from "./AuthUserHome";
import NotAuthUserHome from "./NotAuthUserHome";

const mapStateToProps = ({ user }) => {
  return { data: user };
};

const Home = ({ data, navigation }) => {
  return !!data.token ? (
    <AuthUserHome />
  ) : (
    <NotAuthUserHome navigation={navigation} />
  );
};

export default connect(mapStateToProps)(Home);
