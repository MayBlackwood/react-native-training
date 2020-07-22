import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ListItem = ({
  item: { username, firstname, lastname },
  index,
  drag,
  isActive,
}) => {
  const getItemColor = (i) => (i % 2 === 0 ? '#7C05F2' : '#6204BF');

  return (
    <TouchableOpacity
      style={{
        height: 100,
        width: '100%',
        backgroundColor: isActive ? '#F67280' : `${getItemColor(index)}`,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onLongPress={drag}
    >
      <Text
        style={{
          fontWeight: 'bold',
          color: 'lightgrey',
          fontSize: 32,
        }}
      >
        {username}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          color: 'black',
          fontSize: 20,
        }}
      >
        {`${firstname} ${lastname}`}
      </Text>
    </TouchableOpacity>
  );
};

export default ListItem;
