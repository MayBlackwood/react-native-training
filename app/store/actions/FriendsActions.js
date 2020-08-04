import { Alert } from 'react-native';

import {
  FRIENDS_LOADED,
  FRIENDS_REQUEST,
  FRIENDS_FAILURE,
  SORT_FRIENDS,
  FRIEND_REQUEST_PROCESS,
  FRIEND_REQUEST_SENT,
  FRIEND_REQUEST_FAIL,
  REQUESTS_LOAD,
  REQUESTS_SUCCESS,
  REQUESTS_FAIL,
  FRIEND_ACCEPT_PROCESS,
  FRIEND_ACCEPT_SUCCESS,
  FRIEND_ACCEPT_FAIL,
} from '../constants';
import {
  getFriends,
  sendFriendRequest as sendRequest,
  getOutgoingRequests,
  getIncomingRequests,
} from '../../services';

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

export const getFriendRequests = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: REQUESTS_LOAD,
    });
    const { data: outgoingRequests } = await getOutgoingRequests(userId);
    const { data: incomingRequests } = await getIncomingRequests(userId);
    dispatch({
      type: REQUESTS_SUCCESS,
      payload: {
        incoming: incomingRequests,
        outgoing: outgoingRequests,
      },
    });
  } catch (error) {
    dispatch({
      type: REQUESTS_FAIL,
      error,
    });
  }
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
    const request = { addressee_id: addresseeId };
    dispatch({
      type: FRIEND_REQUEST_SENT,
      payload: {
        request,
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
