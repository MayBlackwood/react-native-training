import { Alert } from 'react-native';
import { USERS_LIST, SORT_USERS, USER_UPDATE } from '../types';
import { getUsers } from '../../services';
import { updateUser } from '../../services';

export const getAllUsers = () => async (dispatch) => {
  try {
    const { data } = await getUsers();
    data.map((item, index) => {
      item.orderNumber = index;
      return item;
    });

    dispatch({
      type: USERS_LIST,
      payload: {
        users: data,
      },
    });
  } catch (error) {
    Alert.alert('Error', error.message);
  }
};

export const updateOrder = (usersData) => (dispatch) => {
  dispatch({
    type: SORT_USERS,
    payload: {
      users: usersData,
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
