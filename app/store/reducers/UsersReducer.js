import { USERS_LIST, SORT_USERS, USER_UPDATE } from '../types';

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

    case USER_UPDATE:
      return state.map((user) => {
        if (user.id === action.payload.user.id) {
          return {
            ...user,
            ...action.payload.user,
          };
        }

        return user;
      });

    default:
      return state;
  }
};
