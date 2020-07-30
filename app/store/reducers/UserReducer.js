import { USER_LOGGED, USER_LOGOUT, USER_SIGN_UP } from '../types';

const INITIAL_STATE = {
  token: '',
  userId: null,
  role: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED:
      return {
        ...state,
        ...action.payload,
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
