import React from "react";
import { StyleSheet } from "react-native";
import { Input as TextInput, Icon } from "react-native-elements";

const Input = ({ onHandleChange, value, placeholder, icon, label }) => {
  return (
    <TextInput
      onChange={onHandleChange}
      value={value}
      placeholder={placeholder}
      label={label}
      leftIcon={{ type: "font-awesome", name: icon }}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
});
