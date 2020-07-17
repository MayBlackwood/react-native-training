import React from "react";
import { useSelector } from "react-redux";
import WelcomeScreen from "./WelcomeScreen";
import EntryAppScreen from "./EntryAppScreen";

const Home = ({ navigation }) => {
  const data = useSelector(({ user }) => user);
  return !!data.token ? (
    <WelcomeScreen navigation={navigation} />
  ) : (
    <EntryAppScreen navigation={navigation} />
  );
};

export default Home;
