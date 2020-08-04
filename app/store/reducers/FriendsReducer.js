import {
  FRIENDS_LOADED,
  FRIENDS_REQUEST,
  FRIENDS_FAILURE,
  SORT_FRIENDS,
  FRIEND_REQUEST_PROCESS,
  FRIEND_REQUEST_SENT,
  FRIEND_REQUEST_FAIL,
} from '../constants';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  error: null,
  requests: {
    incoming: [],
    outgoing: [],
  },
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

    case FRIEND_REQUEST_PROCESS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case FRIEND_REQUEST_SENT:
      return {
        ...state,
        isLoading: false,
        requests: {
          outgoing: [...state.requests.outgoing, action.payload.userId],
        },
      };

    case FRIEND_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
