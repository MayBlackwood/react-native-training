import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const ProfileLineSection = ({ icon, text }) => (
  <View style={styles.section}>
    <View style={styles.iconContainer}>
      <FontAwesomeIcon icon={icon} style={styles.icon} size={32} />
    </View>
    <Text style={styles.text}>{text}</Text>
  </View>
);

export default ProfileLineSection;

const styles = StyleSheet.create({
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
});
