import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ListItem = ({ item, index, drag, isActive }) => (
  <TouchableOpacity
    style={{
      height: 100,
      width: '100%',
      backgroundColor: isActive
        ? 'blue'
        : `rgb(${Math.floor(Math.random() * 255)}, ${index * 5}, ${132})`,
      alignItems: 'center',
      justifyContent: 'center',
    }}
    onLongPress={drag}
  >
    <Text
      style={{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 32,
      }}
    >
      {item.username}
    </Text>
  </TouchableOpacity>
);

export default ListItem;
