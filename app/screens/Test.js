import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { getAllUsers } from '../store/actions/UsersActions';
import ListItem from '../components/ListItem';
import { SwipeRow } from 'react-native-swipe-list-view';

const Test = () => {
  console.log('ha');

  const getItemColor = (i) => (i % 2 === 0 ? '#7C05F2' : '#6204BF');
  return (
    <SwipeRow rightOpenValue={-180}>
      <View
        style={{
          height: 80,
          backgroundColor: '#d6eadf',
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingRight: 80,
        }}
      />
      <TouchableOpacity
        style={{
          height: 100,
          width: '100%',
          backgroundColor: '#7C05F2',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </SwipeRow>
  );
};

export default Test;
