import {
  USER_LOGGED,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  USER_LOGOUT,
  USER_SIGN_UP,
} from '../types';

const INITIAL_STATE = {
  token: '',
  userId: null,
  role: '',
  isLoading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case USER_LOGGED:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        error: null,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        // error: null
      };

    case USER_LOGOUT:
      return INITIAL_STATE;

    case USER_SIGN_UP:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
