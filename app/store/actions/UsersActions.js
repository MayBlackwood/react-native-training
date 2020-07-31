import { Alert } from 'react-native';
import {
  USERS_LOADED,
  USERS_REQUEST,
  USERS_FAILURE,
  SORT_USERS,
  USER_UPDATE,
} from '../types';
import { getUsers, updateUser } from '../../services';

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: USERS_REQUEST,
    });
    const { data } = await getUsers();
    const orderedData = data.map((item, index) => ({
      ...item,
      orderNumber: index,
    }));

    dispatch({
      type: USERS_LOADED,
      payload: {
        data: orderedData,
      },
    });
  } catch (error) {
    dispatch({
      type: USERS_FAILURE,
      error,
    });
  }
};

export const updateOrder = (usersData) => (dispatch) => {
  dispatch({
    type: SORT_USERS,
    payload: {
      data: usersData,
    },
  });
};

export const updateUserData = (userData, navigation) => async (dispatch) => {
  try {
    const { data } = await updateUser(userData);
    Alert.alert('Success', data);
    dispatch({
      type: USER_UPDATE,
      payload: {
        user: userData,
      },
    });
    navigation.goBack();
  } catch (error) {
    Alert.alert('Error', error.message);
  }
};
