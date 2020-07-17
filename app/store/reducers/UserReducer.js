import { USER_LOGGED, USER_LOGOUT } from "./../types";

const INITIAL_STATE = {
  token: '',
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED:
      const { token, userId } = action.payload;
      return {
        ...state,
        token,
        userId,
      };

    case USER_LOGOUT:
      return INITIAL_STATE;

    default:
      return state;
  }
};