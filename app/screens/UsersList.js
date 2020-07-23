import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { getAllUsers } from '../store/actions/UsersActions';
import ListItem from '../components/ListItem';

const UsersList = () => {
  const users = useSelector(({ users: { users } }) => users);
  const dispatch = useDispatch();
  const [data, setData] = useState(users);

  useEffect(() => {
    dispatch(getAllUsers());
    setData(users);
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
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.id}`}
        onMoveEnd={({ data }) => setData(data)}
      />
    </View>
  );
};

export default UsersList;
