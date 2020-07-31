import {
  USER_LOGGED,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  USER_LOGOUT,
  USER_SIGN_UP,
  SIGN_UP_REQUEST,
  SIGN_UP_FAILURE,
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
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case USER_LOGOUT:
      return INITIAL_STATE;

    case SIGN_UP_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case USER_SIGN_UP:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };

    case SIGN_UP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
