import React from 'react';
import { useSelector } from 'react-redux';
import List from '../components/List';
import { updateOrder } from '../store/actions/UsersActions';
import { getUserFriends } from '../store/actions/FriendsActions';

const FriendsList = ({ navigation }) => {
  const currentUserId = useSelector(({ user }) => user.userId);

  return (
    <List
      initData={() => getUserFriends(currentUserId)}
      listName="friends"
      orderFunction={updateOrder}
      navigation={navigation}
    />
  );
};

export default FriendsList;
