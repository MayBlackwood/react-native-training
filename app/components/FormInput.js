import React from 'react';
import {
  View, TextInput, Text, StyleSheet,
} from 'react-native';

const FormInput = ({
  value, title, handleChange, values, errors, touched,
}) => (
  <View
    style={{
      marginBottom: 20,
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  >
    <Text style={styles.label}>{title}</Text>
    <TextInput
      value={values[value]}
      onChangeText={handleChange(value)}
      placeholder={title}
      secureTextEntry={
        !!(value === 'password' || value === 'passwordConfirmation')
      }
      style={styles.textInput}
    />
    {errors[value] && touched[value] ? (
      <Text style={styles.errorText}>{errors[value]}</Text>
    ) : null}
  </View>
);

export default FormInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#355C7D',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: '#C06C84',
    fontWeight: 'bold',
    marginTop: 6,
  },
  label: {
    marginBottom: 5,
    fontSize: 15,
  },
});
