import { Alert } from 'react-native';

import {
  FRIENDS_LOADED,
  FRIENDS_REQUEST,
  FRIENDS_FAILURE,
  SORT_FRIENDS,
  FRIEND_REQUEST_PROCESS,
  FRIEND_REQUEST_SENT,
  FRIEND_REQUEST_FAIL,
} from '../constants';
import { getFriends, sendFriendRequest as sendRequest } from '../../services';

export const getUserFriends = (id) => async (dispatch) => {
  try {
    dispatch({
      type: FRIENDS_REQUEST,
    });
    const { data } = await getFriends(id);
    const orderedData = data.map((item, index) => ({
      ...item,
      orderNumber: index,
    }));

    dispatch({
      type: FRIENDS_LOADED,
      payload: {
        data: orderedData,
      },
    });
  } catch (error) {
    dispatch({
      type: FRIENDS_FAILURE,
      error,
    });
  }
};

export const updateOrder = (usersData) => (dispatch) => {
  dispatch({
    type: SORT_FRIENDS,
    payload: {
      data: usersData,
    },
  });
};

export const sendFriendRequest = (requesterId, addresseeId) => async (
  dispatch,
) => {
  try {
    dispatch({
      type: FRIEND_REQUEST_PROCESS,
    });

    const { data } = await sendRequest(requesterId, addresseeId);
    Alert.alert('Friend request', data);
    dispatch({
      type: FRIEND_REQUEST_SENT,
      payload: {
        userId: addresseeId,
      },
    });
  } catch (error) {
    dispatch({
      type: FRIEND_REQUEST_FAIL,
      payload: {
        error,
      },
    });
    Alert.alert('Friend request', error.message);
    throw error;
  }
};
