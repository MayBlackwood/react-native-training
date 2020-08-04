import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Alert, Text, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import { sendFriendRequest } from '../store/actions/FriendsActions';

const FriendsActionsButtonSection = ({ currentUserId, userId }) => {
  const { data: friends, requests } = useSelector(({ friends }) => friends);
  const isFriend = !!friends.find(
    (friend) => parseInt(friend.friend_id) === userId,
  );

  const isRequested = !!requests.outgoing.find(
    (item) => parseInt(item.addressee_id) === userId,
  );

  const dispatch = useDispatch();

  const sendRequest = () => {
    dispatch(sendFriendRequest(currentUserId, userId));
  };

  return (
    <Fragment>
      {!isFriend && !isRequested && (
        <Button
          title="Add to Friends"
          onPress={sendRequest}
          buttonStyle={styles.editProfileButton}
        />
      )}
      {isRequested && (
        <Button
          title="Request was Sent"
          disabled
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
