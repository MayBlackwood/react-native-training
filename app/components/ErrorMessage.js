import React from 'react';
import {
  View, Image, StyleSheet, Text,
} from 'react-native';

const ErrorMessage = ({ error }) => (
  <View style={styles.container}>
    <Image
      style={styles.errorImage}
      resizeMode="contain"
      source={require('../images/error.png')}
    />
    <Text style={styles.oops}>Ooops!</Text>
    <Text style={styles.text}>Something went wrong. Try again.</Text>
    <Text style={styles.errorMessage}>{error}</Text>
  </View>
);

export default ErrorMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorImage: {
    width: '90%',
    height: 350,
  },
  oops: {
    color: '#6c5B7B',
    fontSize: 40,
    fontWeight: 'bold',
  },
  text: {
    color: '#6c5B7B',
    fontSize: 25,
  },
  errorMessage: {
    color: '#6c5B7B',
    fontSize: 15,
  },
});
