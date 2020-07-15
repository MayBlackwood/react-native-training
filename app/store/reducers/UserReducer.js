import { combineReducers } from "redux";

const INITIAL_STATE = {
  isLogged: false,
  userInfo: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case USER_LOGGED:
    //   return
    // case
    default:
      return state;
  }
};
