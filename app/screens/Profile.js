import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import { useSelector } from 'react-redux';
import {
  faUser,
  faEnvelope,
  faUserLock,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Profile = ({
  navigation,
  route: {
    params: { userId },
  },
}) => {
  const usersState = useSelector(({ users }) => users);
  const users = usersState.data;
  const currentUser = useSelector(({ user }) => user);
  const { role: currentUserRole, userId: currentUserId } = currentUser;
  const user = users.find((user) => user.id === userId);

  const handleButtonClick = () => {
    navigation.navigate('EditUserPage', {
      userData: user,
    });
  };

  const {
    username, firstname, lastname, email, description, id, role,
  } = user;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ width: '100%', height: '100%' }}
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../images/plant.png')}
            />
          </View>
          <View style={styles.usernameContainer}>
            <Text style={styles.username}>{`@${username}`}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faUser} style={styles.icon} size={32} />
          </View>
          <Text style={styles.text}>{`${firstname} ${lastname}`}</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faEnvelope} style={styles.icon} size={32} />
          </View>
          <Text style={styles.text}>{email}</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faUserLock} style={styles.icon} size={32} />
          </View>
          <Text style={styles.text}>{role}</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faList} style={styles.icon} size={32} />
          </View>
          <Text style={styles.text}>
            {description || 'No description provided.'}
          </Text>
        </View>
        <View style={styles.section}>
          {(currentUserRole === 'admin' || currentUserId === id) && (
            <Button
              title="Edit profile"
              onPress={handleButtonClick}
              buttonStyle={styles.editProfileButton}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#BF5471',
    justifyContent: 'space-around',
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderStyle: 'solid',
    borderWidth: 5,
    borderRadius: 120,
    borderColor: '#46454B',
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 110,
    backgroundColor: 'white',
  },
  usernameContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 30,
    color: 'white',
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
  iconContainer: {
    width: '15%',
  },
  icon: {
    width: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    width: '75%',
    height: '90%',
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  editProfileButton: {
    width: '100%',
    backgroundColor: '#5B98A6',
    marginBottom: 15,
  },
});
