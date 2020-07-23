import { USERS_LIST } from '../types';

const INITIAL_STATE = {
  users: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_LIST:
      const { users } = action.payload;
      return users;

    default:
      return state;
  }
};
