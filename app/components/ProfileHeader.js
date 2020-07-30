import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ProfileHeader = ({ image, headerText }) => (
  <View style={styles.header}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={image} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.text}>{headerText}</Text>
    </View>
  </View>
);

export default ProfileHeader;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: '#BF5471',
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
  textContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
});
