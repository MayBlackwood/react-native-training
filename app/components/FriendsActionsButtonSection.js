import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import {
  getFriendRequests,
  sendFriendRequest,
  acceptFriendRequest,
  removeUserFromFriends,
} from '../store/actions/FriendsActions';

const FriendsActionsButtonSection = ({ currentUserId, userId }) => {
  const { data: friends, requests } = useSelector(({ friends }) => friends);
  const isFriend = !!friends.find((friend) => friend.id === userId);

  const isIncomingRequest = !!requests.incoming.find(
    (item) => parseInt(item.requester_id) === userId,
  );

  const isOutgoingRequest = !!requests.outgoing.find(
    (item) => parseInt(item.addressee_id) === userId,
  );

  useEffect(() => {
    dispatch(getFriendRequests(currentUserId));
  }, [friends]);

  const dispatch = useDispatch();

  const sendRequest = () => {
    dispatch(sendFriendRequest(currentUserId, userId));
  };

  const acceptRequest = () => {
    dispatch(acceptFriendRequest(userId, currentUserId));
  };

  const removeFriend = () => {
    dispatch(removeUserFromFriends(userId, currentUserId));
  };

  return (
    <Fragment>
      {!isFriend && !isOutgoingRequest && !isIncomingRequest && (
        <Button
          title="Add to Friends"
          onPress={sendRequest}
          buttonStyle={styles.editProfileButton}
        />
      )}
      {isFriend && !isOutgoingRequest && !isIncomingRequest && (
        <Button
          title="Remove From Friends"
          onPress={removeFriend}
          buttonStyle={styles.editProfileButton}
        />
      )}
      {isOutgoingRequest && (
        <View style={{ flex: 1 }}>
          <Button
            title="Request was Sent"
            disabled
            buttonStyle={styles.editProfileButton}
          />
          <Button
            title="Decline request"
            onPress={removeFriend}
            buttonStyle={styles.editProfileButton}
          />
        </View>
      )}
      {isIncomingRequest && (
        <View style={{ flex: 1 }}>
          <Button
            title="Accept Friend"
            onPress={acceptRequest}
            buttonStyle={styles.editProfileButton}
          />
          <Button
            title="Decline Request"
            onPress={removeFriend}
            buttonStyle={styles.editProfileButton}
          />
        </View>
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
