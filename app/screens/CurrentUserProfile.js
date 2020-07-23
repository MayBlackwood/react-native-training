import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

const CurrentUserProfile = () => (
  <SafeAreaView style={styles.container}>
    <Text>User Profile</Text>
  </SafeAreaView>
);

export default CurrentUserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8B195',
  },
});
