import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from 'react-navigation';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DropdownMenu from './DropdownMenu';

const ChipFilterDropdown = ({ options, selected }) => {
  const theme = useContext(ThemeContext);
  const styles = StyleSheet.create({
    filterMenuTrigger: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderWidth: 1,
      borderColor: theme.primary,
      borderStyle: 'solid',
      borderRadius: 5,
      flexDirection: 'row',
      backgroundColor: theme.wb_color1,
    },
    filterMenuTriggerIcon: {
      marginLeft: 5,
    },
    menuOptionsContainer: {
      backgroundColor: theme.wb_color1,
      opacity: 0,
    },
    menuOptionsWrapper: {
      backgroundColor: theme.wb_color1,
    },
    menuOptionsText: {
      backgroundColor: theme.wb_color1,
      color: theme.inverted,
    },
  });

  const optionsStyles = {
    optionsContainer: {
      backgroundColor: 'green',
      padding: 5,
    },
    optionsWrapper: {
      backgroundColor: 'white',
    },
    optionWrapper: {
      backgroundColor: 'white',
      margin: 5,
    },
    optionTouchable: {
      underlayColor: 'white',
      activeOpacity: 70,
    },
    optionText: {
      color: 'brown',
    },
  };

  return (
    <DropdownMenu
      trigger={
        <View style={styles.filterMenuTrigger}>
          <Text>{selected}</Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            style={styles.filterMenuTriggerIcon}
          />
        </View>
      }
      options={options}
    />
  );
};

export default ChipFilterDropdown;
