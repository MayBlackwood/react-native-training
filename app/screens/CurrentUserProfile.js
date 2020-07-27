import React, { useState, useEffect } from 'react';
import {
  Alert,
} from 'react-native';
import { useSelector } from 'react-redux';
import Profile from './Profile';
import { getUser } from '../services';

const CurrentUserProfile = () => {
  const currentUser = useSelector(({ user }) => user);
  const { userId: currentUserId } = currentUser;
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUser(currentUserId)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
        return error;
      });
  }, [currentUser]);

  return <Profile userData={userData} />;
};

export default CurrentUserProfile;
