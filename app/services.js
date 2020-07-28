import axios from 'axios';
import { Alert } from 'react-native';
import { api } from './constants';

export const logInUser = (username, password) =>
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

export const getUsers = () =>
  axios({
    method: 'GET',
    url: `http://${api}/users`,
    header: { 'Content-Type': 'application/json' },
  });

export const deleteUser = (userId) => {
  const result = axios({
    method: 'DELETE',
    url: `http://${api}/users/${userId}`,
    data: {
      id: userId,
    },
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return result;
};

export const signUpUser = ({
  username,
  firstName,
  lastName,
  email,
  password,
  description,
}) => {
  const result = axios({
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
  });

  return result;
};

export const getUser = (userId) => {
  const result = axios({
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
) => {
  const result = await axios({
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
  });

  return result;
};
