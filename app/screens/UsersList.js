import React, { useEffect } from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../store/actions/UsersActions';

const UsersList = () => {
  const users = useSelector(({ users }) => users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const getState = () => {
    console.log('State');
    console.log(users);
  };

  return (
    <SafeAreaView>
      <Text>Users List</Text>
      <Button
        buttonStyle={styles.button}
        title="Get State"
        onPress={getState}
      />
    </SafeAreaView>
  );
};

export default UsersList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '50%',
    height: 'auto',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#9198e5',
    marginBottom: 10,
  },
});
