import axios from 'axios';
import { Alert } from 'react-native';
import { api } from './constants';
import { getAllUsers } from './store/actions/UsersActions';
import { logInUser } from './store/actions/UserActions';

export const deleteUser = async (userId, dispatch) => {
  await axios({
    method: 'DELETE',
    url: `http://${api}/users/${userId}`,
    data: {
      id: userId,
    },
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((res) => {
      dispatch(getAllUsers());
      Alert.alert('Delete', res.data);
    })
    .catch((error) => {
      Alert.alert('Error', error.response.data.message);
      return error.response;
    });
};

export const signUpUser = async (
  {
    username, firstName, lastName, email, password, description,
  },
  dispatch,
  navigation,
) => {
  await axios({
    method: 'POST',
    url: `http://${api}/sign_up`,
    data: {
      username,
      firstName,
      lastName,
      email,
      password,
      description,
    },
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(({ data: { message } }) => {
      Alert.alert('Sign Up', `${message}`);
      dispatch(logInUser(username, password, navigation));
    })
    .catch((error) => {
      Alert.alert('Error', error.message);
      return error;
    });
};

export const getUser = async (userId) => {
  const result = await axios({
    method: 'GET',
    url: `http://${api}/users/${userId}`,
    data: {
      id: userId,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return result;
};
