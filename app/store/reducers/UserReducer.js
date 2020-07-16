import { USER_LOGGED, USER_LOGOUT } from "./../types";

const INITIAL_STATE = {
  isLogged: false,
  userData: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED:
      const { isLogged, userData } = action.payload;
      console.log(isLogged);
      console.log(userData);
      return {
        ...state,
        isLogged,
        userData,
      };

    case USER_LOGOUT:
      return {
        ...state,
        isLogged,
        userData,
      };

    default:
      return state;
  }
};
