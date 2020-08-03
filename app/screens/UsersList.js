import React from 'react';
import List from '../components/List';
import { getAllUsers, updateOrder } from '../store/actions/UsersActions';

const UsersList = ({ navigation }) => (
  <List
    initData={getAllUsers}
    listName="users"
    orderFunction={updateOrder}
    navigation={navigation}
  />
);

export default UsersList;
