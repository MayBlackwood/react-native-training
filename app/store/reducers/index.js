import { combineReducers } from 'redux';

import UserReducer from './UserReducer';
import UsersReducer from './UsersReducer';
import LoadingReducer from './LoadingReducer';

export default combineReducers({
  user: UserReducer,
  users: UsersReducer,
  loading: LoadingReducer,
});
