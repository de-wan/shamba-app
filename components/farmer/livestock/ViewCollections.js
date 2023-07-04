import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchBar from '../../ui/SearchBar';
import { ThemeContext } from '../../../context/ThemeContext';

const ViewCollections = () => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({});

  const [search, setSearch] = React.useState('');

  return (
    <View>
      <SearchBar searchCallback={() => console.log('searching...')} />
      <Text>ViewCollections</Text>
    </View>
  );
};

export default ViewCollections;
