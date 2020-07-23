import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity, Text, View, Alert } from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';
import { faTrash, faPen, faEye } from '@fortawesome/free-solid-svg-icons';
import ListItemButton from './ListItemButton';
import axios from 'axios';
import { getAllUsers } from './../store/actions/UsersActions';

const ListItem = ({
  item: { username, firstname, lastname, role, id },
  index,
  move,
  moveEnd,
  isActive,
}) => {
  const currentUser = useSelector(({ user }) => user);
  const users = useSelector(({ users: { users } }) => users);
  const dispatch = useDispatch();
  const currentUserRole = currentUser.role;
  const getItemColor = (i) => (i % 2 === 0 ? '#7C05F2' : '#6204BF');
  console.log(users);

  const handleDeleteClick = async (userId) => {
    Alert.alert('Deleting', `Delete user with id ${userId}?`);

    await axios({
      method: 'DELETE',
      url: `http://10.0.2.2:5000/users/${userId}`,
      data: {
        id: userId,
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch(getAllUsers());
        console.log(users);
      })
      .catch((error) => {
        Alert.alert('Error', error.response.data.message);
        return error.response;
      });
  };

  const handleEditClick = () => {
    Alert.alert('Edit', `Edit user with id ${id}?`);
  };

  const handleViewClick = () => {
    Alert.alert('View', `View profile of user with id ${id}?`);
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
          handleButtonClick={handleViewClick}
          color="white"
          backgroundColor="#050259"
          icon={faEye}
        />
        {currentUserRole === 'admin' && (
          <Fragment>
            <ListItemButton
              handleButtonClick={() => handleDeleteClick(id)}
              color="white"
              backgroundColor="#F23827"
              icon={faTrash}
            />
            <ListItemButton
              handleButtonClick={handleEditClick}
              color="white"
              backgroundColor="#050259"
              icon={faPen}
            />
          </Fragment>
        )}
      </View>

      <TouchableOpacity
        style={{
          height: 100,
          width: '100%',
          backgroundColor: isActive ? '#F67280' : `${getItemColor(index)}`,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onLongPress={move}
        onPressOut={moveEnd}
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
    </SwipeRow>
  );
};

export default ListItem;
