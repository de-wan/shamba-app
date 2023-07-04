import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ShambaButton = ({
  onPress,
  btnType,
  outline,
  icon,
  text,
  materialCommunityIcon,
  buttonStyle,
  size,
  children,
}) => {
  // btnType: primary, secondary, tertiary
  // outline: true, false

  const theme = useContext(ThemeContext);

  const getBtnSize = () => {
    switch (size) {
      case 'sm':
        return 30;
      case 'md':
        return 40;
      case 'lg':
        return 50;
      default:
        return 40;
    }
  };

  const getBtnIconSize = () => {
    switch (size) {
      case 'sm':
        return 20;
      case 'md':
        return 25;
      case 'lg':
        return 30;
      default:
        return 25;
    }
  };

  const styles = StyleSheet.create({
    btn: {
      height: getBtnSize(),
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 5,
      marginHorizontal: 2,
      flexDirection: 'row',
      borderRadius: 10,
    },
    primaryBtn: {
      backgroundColor: theme.primary,
      borderWidth: 2,
      borderColor: theme.inverted,
    },
    primaryBtnText: {
      color: theme.wb_color,
    },
    secondaryBtn: {
      backgroundColor: theme.secondary,
      borderWidth: 2,
      borderColor: theme.inverted,
    },
    secondaryBtnText: {
      color: theme.wb_color,
    },
    primaryOutlineBtn: {
      backgroundColor: theme.wb_color,
      borderWidth: 2,
      borderColor: theme.primary,
    },
    primaryOutlineBtnText: {
      color: theme.primary,
    },
    secondaryOutlineBtn: {
      backgroundColor: theme.wb_color,
      borderWidth: 2,
      borderColor: theme.secondary,
    },
    secondaryOutlineBtnText: {
      color: theme.secondary,
    },
  });

  const getBtnStyle = () => {
    if (btnType === 'primary' && outline) {
      return styles.primaryOutlineBtn;
    } else if (btnType === 'primary') {
      return styles.primaryBtn;
    } else if (btnType === 'secondary' && outline) {
      return styles.secondaryOutlineBtn;
    } else if (btnType === 'secondary') {
      return styles.secondaryBtn;
    } else {
      return styles.primaryBtn;
    }
  };

  const getBtnTextColor = () => {
    if (btnType === 'primary' && outline) {
      return theme.primary;
    } else if (btnType === 'primary') {
      return theme.wb_color;
    } else if (btnType === 'secondary' && outline) {
      return theme.secondary;
    } else if (btnType === 'secondary') {
      return theme.wb_color;
    } else {
      return theme.wb_color;
    }
  };

  const getBtnTextStyle = () => {
    return { color: getBtnTextColor() };
  };

  return (
    <TouchableOpacity
      style={[styles.btn, getBtnStyle(), buttonStyle]}
      onPress={onPress}>
      {materialCommunityIcon && (
        <MaterialCommunityIcons
          name={materialCommunityIcon}
          size={getBtnIconSize()}
          color={getBtnTextColor()}
        />
      )}
      {!materialCommunityIcon && icon && icon}
      {text && (
        <Text style={[styles.buttonText, getBtnTextStyle()]}>{text}</Text>
      )}
      {children}
    </TouchableOpacity>
  );
};

export default ShambaButton;
