import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';

const UserProfile = ({ navigation }) => {
  const handleButtonClick = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>This is your Profile!</Text>
      <Button
        style={{ marginTop: 30 }}
        title="Back to Home Page"
        onPress={handleButtonClick}
      />
    </SafeAreaView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8B195',
  },
});
