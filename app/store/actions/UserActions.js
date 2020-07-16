import { USER_LOGGED, USER_LOGOUT } from "./../types";
import axios from "axios";

import { Alert } from "react-native";

export const logInUser = (username, password, navigation) => async (
  dispatch
) => {
  await axios({
    method: "POST",
    url: "http://10.0.2.2:5000/login",
    data: {
      username,
      password,
    },
    header: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      const { token, id } = res.data;

      dispatch({
        type: USER_LOGGED,
        payload: {
          token: token,
          userId: id,
        },
      });
    })
    .then(
      () => {
        Alert.alert("Success", "You are successfully logged in!");
        navigation.navigate("UserProfile");
      },
      () => {
        Alert.alert("Error", "Check the data.");
      }
    )
    .catch((error) => {
      throw error;
    });
};

export const logOutUser = () => (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });
};
