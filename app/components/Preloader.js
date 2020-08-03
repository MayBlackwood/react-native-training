import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Preloader = () => (
  <View style={styles.container}>
    <Image
      style={styles.preloader}
      source={require('../images/Preloader.gif')}
    />
  </View>
);

export default Preloader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preloader: {
    width: 350,
    height: 350,
  },
});
