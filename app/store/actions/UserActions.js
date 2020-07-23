import axios from 'axios';

import { Alert } from 'react-native';
import { USER_LOGGED, USER_LOGOUT } from '../types';

export const logInUser = (username, password, navigation) => async (
  dispatch,
) => {
  await axios({
    method: 'POST',
    url: 'http://10.0.2.2:5000/login',
    data: {
      username,
      password,
    },
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(({ data: { token, id, message, role } }) => {
      dispatch({
        type: USER_LOGGED,
        payload: {
          token,
          userId: id,
          role,
        },
      });
      Alert.alert('Successful', message);
      navigation.navigate('UserProfile');
    })
    .catch((error) => {
      Alert.alert('Error', error.response.data.message);
      return error.response;
    });
};

export const logOutUser = () => (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });
};
