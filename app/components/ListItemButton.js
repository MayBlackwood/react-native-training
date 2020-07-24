import React from 'react';
import { TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const ListItemButton = ({
  handleButtonClick,
  icon,
  backgroundColor,
  color,
  disabled,
}) => (
  <TouchableHighlight
    onPress={handleButtonClick}
    style={{
      height: 100,
      width: 90,
      backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    disabled={disabled}
  >
    <FontAwesomeIcon icon={icon} style={{ color: disabled ? 'grey' : color }} />
  </TouchableHighlight>
);

export default ListItemButton;
