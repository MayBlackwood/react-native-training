import {
  USERS_LOADED,
  USERS_REQUEST,
  USERS_FAILURE,
  SORT_USERS,
  USER_UPDATE,
  USER_UPDATE_REQUEST,
  USER_UPDATE_FAILURE,
} from '../constants';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case USERS_LOADED:
      const { data } = action.payload;
      return {
        ...state,
        data,
        isLoading: false,
      };

    case USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case SORT_USERS:
      const sortedUsers = action.payload.data;
      return {
        ...state,
        data: sortedUsers,
        isLoading: false,
      };

    case USER_UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case USER_UPDATE:
      return {
        ...state,
        isLoading: false,
        data: state.data.map((user) => {
          if (user.id === action.payload.user.id) {
            return {
              ...user,
              ...action.payload.user,
            };
          }

          return user;
        }),
      };

    case USER_UPDATE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
