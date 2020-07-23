import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

const EditUserPage = () => (
  <SafeAreaView style={styles.container}>
    <Text>Edit User Page</Text>
  </SafeAreaView>
);

export default EditUserPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8B195',
  },
});
