const INITIAL_STATE = {
  isLogged: false,
  userInfo: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED:
      const { isLogged, userInfo } = state;
      return {
        ...state,
        isLogged,
        userInfo,
      };

    case USER_LOGOUT:
      const { isLogged, userInfo } = state;
      return {
        ...state,
        isLogged,
        userInfo,
      };

    default:
      return state;
  }
};
