import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import DraggableFlatList from 'react-native-draggable-flatlist';
import sortBy from 'lodash.sortby';
import ListItem from './ListItem';
import Preloader from './Preloader';
import ErrorMessage from './ErrorMessage';

const List = ({ initData, listName, orderFunction, navigation }) => {
  const { data: items, error, isLoading } = useSelector(
    (store) => store[listName],
  );

  const dispatch = useDispatch();

  const changeOrderFunction = ({ from, to }) => {
    items.forEach((item) => {
      if (item.orderNumber === from) {
        item.orderNumber = to;
      } else if (item.orderNumber <= to && item.orderNumber > from) {
        item.orderNumber -= 1;
      } else if (item.orderNumber >= to && item.orderNumber < from) {
        item.orderNumber += 1;
      }
    });

    const newOrderedItems = sortBy(items, (item) => item.orderNumber);
    dispatch(orderFunction(newOrderedItems));
  };

  useEffect(() => {
    if (!items.length) {
      dispatch(initData());
    }
  }, [items]);

  const renderItem = ({ item, index, move, moveEnd, isActive }) => (
    <ListItem
      item={item}
      index={index}
      move={move}
      moveEnd={moveEnd}
      isActive={isActive}
      navigation={navigation}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      {isLoading && <Preloader />}
      {!isLoading && error && <ErrorMessage error={error.message} />}
      {!isLoading && !error && items && (
        <DraggableFlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => `draggable-item-${item.id}`}
          onMoveEnd={(params) => changeOrderFunction(params)}
        />
      )}
    </View>
  );
};

export default List;
