import { USER_LOGGED, USER_LOGOUT } from "./../types";
import axios from "axios";

export const logInUser = ({ id }) => async (dispatch) => {
  console.log("login");
  console.log(id);

  const result = await axios({
    method: "GET",
    url: `http://10.0.2.2:5000/users/${id}`,
    header: {
      "Content-Type": "application/json",
    },
  });

  console.log(result.data[0]);

  dispatch({
    type: USER_LOGGED,
    payload: {
      isLogged: true,
      userData: result.data[0],
    },
  });
};

export const logOutUser = (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
    payload: {
      isLogged: false,
      userData: {},
    },
  });
};
