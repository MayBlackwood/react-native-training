import { USER_LOGGED, USER_LOGOUT } from '../types';

const INITIAL_STATE = {
  token: '',
  userId: null,
  role: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED:
      const { token, userId, role } = action.payload;
      return {
        ...state,
        token,
        userId,
        role,
      };

    case USER_LOGOUT:
      return INITIAL_STATE;

    default:
      return state;
  }
};
