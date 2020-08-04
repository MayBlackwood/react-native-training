import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Alert, Text, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import { sendFriendRequest } from '../services';

const FriendsActionsButtonSection = ({ currentUserId, userId }) => {
  const { data: friends } = useSelector(({ friends }) => friends);
  const isFriend = !!friends.find(
    (friend) => friend.friend_id === userId.toString(),
  );

  return (
    <Fragment>
      {isFriend ? (
        <Button
          title="Remove from friends"
          // onPress={sendRequest}
          disabled
          buttonStyle={styles.editProfileButton}
        />
      ) : (
        <Button
          title="Add to friends"
          onPress={() => sendFriendRequest(currentUserId, userId)}
          buttonStyle={styles.editProfileButton}
        />
      )}
    </Fragment>
  );
};

export default FriendsActionsButtonSection;

const styles = StyleSheet.create({
  editProfileButton: {
    width: '100%',
    backgroundColor: '#a87fff',
    marginBottom: 15,
  },
});
