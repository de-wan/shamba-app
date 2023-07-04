import React, { useState, useContext } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import ShambaButton from './ShambaButton';
import { ThemeContext } from '../../context/ThemeContext';

const SearchBar = ({ children, searchCallback }) => {
  const theme = useContext(ThemeContext);
  const styles = StyleSheet.create({
    topBar: {
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
    },
    searchWrap: {
      flex: 1,
      paddingHorizontal: 10,
      flexDirection: 'row',
    },
    inputField: {
      flex: 1,
      height: 40,
      backgroundColor: theme.wb_color,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 5,
      borderWidth: 1,
      borderColor: theme.inverted,
      borderStyle: 'solid',
    },
  });

  const { search, setSearch } = useState('');

  return (
    <View style={styles.topBar}>
      <View style={styles.searchWrap}>
        <TextInput
          style={styles.inputField}
          placeholder="search"
          keyboardType="email-address"
          value={search}
          onChangeText={value => setSearch(value)}
        />
        <ShambaButton
          materialCommunityIcon="magnify"
          onPress={searchCallback}
        />
        {children}
      </View>
    </View>
  );
};

export default SearchBar;
