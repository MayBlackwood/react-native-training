import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableHighlight, Text, View } from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';
import { faTrash, faPen, faEye } from '@fortawesome/free-solid-svg-icons';
import ListItemButton from './ListItemButton';
import { deleteUser } from '../services';

const ListItem = ({ item, index, move, moveEnd, isActive, navigation }) => {
  const { username, firstname, lastname, role, id } = item;
  const currentUser = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const currentUserRole = currentUser.role;
  const getItemColor = (i) => (i % 2 === 0 ? '#7C05F2' : '#6204BF');

  const goToButton = (path, lastScreen) => {
    if (path === 'EditUserPage') {
      navigation.navigate(path, { userData: item, lastScreen });
    } else {
      navigation.navigate(path, { userId: id, lastScreen });
    }
  };

  const handleDeleteClick = (userId) => {
    deleteUser(userId, dispatch, navigation);
  };

  return (
    <SwipeRow rightOpenValue={currentUserRole === 'admin' ? -270 : -90}>
      <View
        style={{
          flexDirection: 'row-reverse',
          height: 100,
          backgroundColor: '#d6eadf',
        }}
      >
        <ListItemButton
          handleButtonClick={() => goToButton('Profile', 'Profile')}
          color="white"
          backgroundColor="#050259"
          icon={faEye}
          disabled={false}
        />
        {currentUserRole === 'admin' && (
          <Fragment>
            <ListItemButton
              handleButtonClick={() => handleDeleteClick(id)}
              color="white"
              backgroundColor="#F23827"
              icon={faTrash}
              disabled={role === 'admin'}
            />
            <ListItemButton
              handleButtonClick={() => goToButton('EditUserPage', 'UsersList')}
              color="white"
              backgroundColor="#050259"
              icon={faPen}
              disabled={role === 'admin'}
            />
          </Fragment>
        )}
      </View>

      <TouchableHighlight
        underlayColor="#C5A8E2"
        style={[
          {
            height: 100,
            width: '100%',
            backgroundColor: isActive ? '#F67280' : `${getItemColor(index)}`,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}
        onLongPress={move}
        onPressOut={moveEnd}
      >
        <Fragment>
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
        </Fragment>
      </TouchableHighlight>
    </SwipeRow>
  );
};

export default ListItem;
