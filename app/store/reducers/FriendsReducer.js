import {
  FRIENDS_LOADED,
  FRIENDS_REQUEST,
  FRIENDS_FAILURE,
  SORT_FRIENDS,
} from '../constants';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FRIENDS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case FRIENDS_LOADED:
      const { data } = action.payload;
      return {
        ...state,
        data,
        isLoading: false,
      };

    case FRIENDS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case SORT_FRIENDS:
      const sortedUsers = action.payload.data;
      return {
        ...state,
        data: sortedUsers,
        isLoading: false,
      };

    default:
      return state;
  }
};
