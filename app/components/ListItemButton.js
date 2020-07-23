import React from 'react';
import { TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const ListItemButton = ({
  handleButtonClick,
  icon,
  backgroundColor,
  color,
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
  >
    <FontAwesomeIcon icon={icon} style={{ color }} />
  </TouchableHighlight>
);

export default ListItemButton;
