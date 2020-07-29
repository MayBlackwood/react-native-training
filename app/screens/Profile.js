import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux';

import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';

import {
  faUser,
  faEnvelope,
  faUserLock,
  faList,
} from '@fortawesome/free-solid-svg-icons';

import { getUser } from '../services';
import ProfileLineSection from '../components/ProfileLineSection';
import ProfileHeader from '../components/ProfileHeader';

const Profile = ({
  navigation,
  route: {
    params: { userId },
  },
}) => {
  const users = useSelector(({ users }) => users);
  const currentUser = useSelector(({ user }) => user);
  const { role: currentUserRole, userId: currentUserId } = currentUser;
  const [userData, setUserData] = useState({});

  const handleButtonClick = () => {
    navigation.navigate('EditUserPage', {
      userData,
    });
  };

  useEffect(() => {
    getUserData();
  }, [users]);

  const getUserData = async () => {
    try {
      const { data } = await getUser(userId);
      setUserData(data);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const {
    username,
    firstname,
    lastname,
    email,
    description,
    id,
    role,
    userImage,
  } = userData;

  const profileIcon = userImage
    ? require(`../images/back.jpg`)
    : require(`../images/plant.png`);

  let navTitleView;

  return (
    <HeaderImageScrollView
      maxHeight={200}
      minHeight={60}
      headerImage={require('../images/back.jpg')}
      fadeOutForeground
      renderForeground={() => (
        <View
          style={{
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ProfileHeader image={profileIcon} headerText={`@${username}`} />
        </View>
      )}
      renderFixedForeground={() => (
        <Animatable.View
          style={{ opacity: 0 }}
          ref={(navTitle) => {
            navTitleView = navTitle;
          }}
        >
          <Text style={styles.animatableText}>{`@${username}`}</Text>
        </Animatable.View>
      )}
    >
      <TriggeringView
        onBeginHidden={() => navTitleView.fadeInUp(200)}
        onBeginDisplayed={() => navTitleView.fadeOut(100)}
      >
        <ProfileLineSection icon={faUser} text={`${firstname} ${lastname}`} />
      </TriggeringView>
      <ProfileLineSection icon={faEnvelope} text={email} />
      <ProfileLineSection icon={faUserLock} text={role} />
      <ProfileLineSection
        icon={faList}
        text={description || 'No description provided.'}
      />
      <View style={styles.section}>
        {(currentUserRole === 'admin' || currentUserId === id) && (
          <Button
            title="Edit profile"
            onPress={handleButtonClick}
            buttonStyle={styles.editProfileButton}
          />
        )}
      </View>
    </HeaderImageScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  section: {
    backgroundColor: '#F2F2F2',
    width: '100%',
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  editProfileButton: {
    width: '100%',
    backgroundColor: '#5B98A6',
    marginBottom: 15,
  },
  animatableText: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});
