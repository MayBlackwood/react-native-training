import axios from 'axios';
import { Alert } from 'react-native';
import { USERS_LIST, SORT_USERS } from '../types';
import { api } from '../../constants';

export const getAllUsers = () => async (dispatch) => {
  await axios({
    method: 'GET',
    url: `http://${api}/users`,
    header: { 'Content-Type': 'application/json' },
  })
    .then(({ data }) => {
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
    })
    .catch((error) => {
      Alert.alert('Error', error.message);
      return error;
    });
};

export const updateOrder = (usersData) => (dispatch) => {
  dispatch({
    type: SORT_USERS,
    payload: {
      users: usersData,
    },
  });
};
