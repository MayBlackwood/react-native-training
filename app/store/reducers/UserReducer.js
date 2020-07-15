import { USER_LOGGED, USER_LOGOUT } from "./../types";

const INITIAL_STATE = {
  isLogged: false,
  userInfo: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED:
      const { isLogged, userInfo } = action.payload;
      console.log(isLogged);
      console.log(userInfo);
      return {
        ...state,
        isLogged,
        userInfo,
      };

    case USER_LOGOUT:
      return {
        ...state,
        isLogged,
        userInfo,
      };

    default:
      return state;
  }
};
