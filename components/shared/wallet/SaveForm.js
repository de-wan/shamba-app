import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../../../context/ThemeContext';
import ShambaInput from '../../ui/ShambaInput';
import ShambaButton from '../../ui/ShambaButton';

const SaveForm = () => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    main: {
      paddingTop: 50,
    },
    inputWrap: {
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    primaryText: {
      color: theme.primary,
    },
    warningText: {
      color: theme.warning,
    },
  });

  return (
    <View style={styles.main}>
      <View style={styles.inputWrap}>
        <ShambaInput
          label="Saving Type"
          placeholder="--Select--"
          inputType="select"
        />
      </View>
      <View style={styles.inputWrap}>
        <ShambaInput label="Amount" placeholder="Enter amount to repay" />
      </View>
      <View style={styles.inputWrap}>
        <ShambaInput label="Maturity Date" placeholder="dd/mm/yyyy" />
      </View>
      <View style={styles.inputWrap}>
        <ShambaButton text="Open Savings Account" />
      </View>
    </View>
  );
};

export default SaveForm;
