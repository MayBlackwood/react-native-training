import { USERS_LIST, SORT_USERS } from '../types';

const INITIAL_STATE = {
  users: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_LIST:
      const { users } = action.payload;
      return users;

    case SORT_USERS:
      const sortedUsers = action.payload.users;
      return sortedUsers;

    default:
      return state;
  }
};
