import { Alert } from 'react-native';
import { USER_LOGGED, USER_LOGOUT, USER_DATA } from '../types';
import { logInUser } from '../../services';

export const logIn = (username, password, navigation) => async (
  dispatch,
) => {
  try {
    const response = await logInUser(username, password);
    const {
      data: { token, id, message, role },
    } = response;
    dispatch({ type: USER_LOGGED, payload: { token, userId: id, role } });
    Alert.alert('Successful', message);
    navigation.navigate('Home');
  } catch (error) {
    Alert.alert('Error', error.response.data.message);
  }
};

export const logOutUser = () => (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });
};
