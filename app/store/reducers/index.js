import { combineReducers } from 'redux';

import UserReducer from './UserReducer';
import UsersReducer from './UsersReducer';
import FriendsReducer from './FriendsReducer';

export default combineReducers({
  user: UserReducer,
  users: UsersReducer,
  friends: FriendsReducer,
});
