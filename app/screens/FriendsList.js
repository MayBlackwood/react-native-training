import React from 'react';
import { useSelector } from 'react-redux';
import List from '../components/List';
import { getUserFriends, updateOrder } from '../store/actions/FriendsActions';

const FriendsList = ({ navigation }) => {
  const currentUserId = useSelector(({ user }) => user.userId);

  return (
    <List
      initData={() => getUserFriends(currentUserId)}
      listName="friends"
      orderFunction={updateOrder}
      emptyMessage="There is no friends yet."
      navigation={navigation}
    />
  );
};

export default FriendsList;
