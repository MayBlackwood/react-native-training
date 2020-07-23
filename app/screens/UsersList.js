import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import sortBy from 'lodash.sortby';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { getAllUsers, updateOrder } from '../store/actions/UsersActions';
import ListItem from '../components/ListItem';

const UsersList = () => {
  const users = useSelector(({ users }) => users);
  const dispatch = useDispatch();

  const changeOrderFunction = ({ from, to }) => {
    users.forEach((item) => {
      if (item.orderNumber === from) {
        item.orderNumber = to;
      } else if (item.orderNumber <= to && item.orderNumber > from) {
        item.orderNumber -= 1;
      } else if (item.orderNumber >= to && item.orderNumber < from) {
        item.orderNumber += 1;
      }
    });

    const newOrderedUsers = sortBy(users, (item) => item.orderNumber);
    dispatch(updateOrder(newOrderedUsers));
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const renderItem = ({ item, index, move, moveEnd, isActive }) => (
    <ListItem
      item={item}
      index={index}
      move={move}
      moveEnd={moveEnd}
      isActive={isActive}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <DraggableFlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.id}`}
        onMoveEnd={(params) => changeOrderFunction(params)}
      />
    </View>
  );
};

export default UsersList;
