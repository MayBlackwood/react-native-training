import { Alert } from 'react-native';
import {
  USER_LOGGED,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  USER_LOGOUT,
  USER_SIGN_UP,
  SIGN_UP_REQUEST,
  SIGN_UP_FAILURE,
} from '../types';
import { logInUser, signUpUser } from '../../services';

export const logIn = (username, password, navigation) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const response = await logInUser(username, password);
    const {
      data: { token, id, message, role },
    } = response;
    dispatch({ type: USER_LOGGED, payload: { token, userId: id, role } });
    Alert.alert('Successful', message);
    navigation.navigate('Home');
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      error,
    });
    Alert.alert('Error', error.response.data.message || error.response.data);
  }
};

export const logOutUser = () => (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });
};

export const signUp = (values, navigation) => async (dispatch) => {
  try {
    dispatch({ type: SIGN_UP_REQUEST });
    const {
      data: { id, message, role, token },
    } = await signUpUser(values);

    dispatch({
      type: USER_SIGN_UP,
      payload: { token, userId: id, role },
    });

    Alert.alert('Success', message);
    navigation.navigate('Home');
  } catch (error) {
    dispatch({ type: SIGN_UP_FAILURE, error });
    Alert.alert('Error', error.response.data.message || error.response.data);
  }
};
