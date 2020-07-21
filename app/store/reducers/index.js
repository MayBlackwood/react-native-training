import { combineReducers } from 'redux';

import UserReducer from './UserReducer';
import UsersReducer from './UsersReducer';

export default combineReducers({
  user: UserReducer,
  users: UsersReducer,
});
