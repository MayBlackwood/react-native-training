import axios from 'axios';
import { Alert } from 'react-native';
import { api } from './constants';
// import { logIn } from './store/actions/UserActions'

export const logInUser = async (username, password) =>
  axios({
    method: 'POST',
    url: `http://${api}/login`,
    data: {
      username,
      password,
    },
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

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
  { username, firstName, lastName, email, password, description },
  dispatch,
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
      dispatch(logInUser(username, password));
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

export const updateUser = async (
  { firstname, lastname, email, username, description },
  id,
  navigation,
) => {
  await axios({
    method: 'PUT',
    url: `http://${api}/users/${id}`,
    data: {
      id,
      firstname,
      lastname,
      email,
      username,
      description,
    },
  })
    .then((res) => {
      Alert.alert('Success', res.data);
      navigation.goBack();
    })
    .catch((error) => {
      Alert.alert('Error', error.message);
      return error;
    });
};
