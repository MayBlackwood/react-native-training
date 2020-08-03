import {
  FRIENDS_LOADED,
  FRIENDS_REQUEST,
  FRIENDS_FAILURE,
  SORT_FRIENDS,
} from '../constants';
import { getFriends } from '../../services';

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
