import React, { useContext } from 'react';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import { ThemeContext } from '../../context/ThemeContext';

const DropdownMenu = ({ triggerContainerStyle, trigger, options }) => {
  const theme = useContext(ThemeContext);
  const optionsStyles = {
    optionsContainer: {
      backgroundColor: theme.wb_color3,
      padding: 5,
    },
    optionsWrapper: {
      backgroundColor: theme.wb_color3,
    },
    optionWrapper: {
      backgroundColor: theme.wb_color3,
      margin: 5,
    },
    optionTouchable: {
      underlayColor: theme.wb_color3,
      activeOpacity: 70,
    },
    optionText: {
      color: theme.inverted,
    },
  };

  return (
    <Menu>
      <MenuTrigger style={triggerContainerStyle}>{trigger}</MenuTrigger>
      <MenuOptions customStyles={optionsStyles}>
        {options.map((option, index) => (
          <MenuOption
            key={index}
            onSelect={option.onSelect}
            text={option.text}
          />
        ))}
      </MenuOptions>
    </Menu>
  );
};

export default DropdownMenu;
