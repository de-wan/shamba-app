import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ShambaInput from '../../ui/ShambaInput';
import ShambaButton from '../../ui/ShambaButton';
import { ThemeContext } from '../../../context/ThemeContext';

const YieldCalculator = ({ navigation }) => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    main: {
      paddingTop: 50,
    },
    inputWrap: {
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    displayWrap: {
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    displayLabel: {
      color: theme.gray1,
    },
    displayValue: {
      color: theme.gray1,
      fontSize: 20,
      fontWeight: 'bold',
    },
    displayValuePrimary: {
      color: theme.primary,
    },
    displayValueDanger: {
      color: theme.danger,
    },
  });

  return (
    <View style={styles.main}>
      <View style={styles.inputWrap}>
        <ShambaInput
          label="Expected yield per acre"
          placeholder="Enter yield/acre"
        />
      </View>
      <View style={styles.inputWrap}>
        <ShambaInput
          label="Number of acres"
          placeholder="Enter the number of acres"
        />
      </View>
      <View style={styles.inputWrap}>
        <ShambaInput
          label="Actual yield"
          placeholder="Enter the actual yield"
        />
      </View>
      <View style={styles.inputWrap}>
        <ShambaButton text="Calculate" />
      </View>
      <View style={styles.displayWrap}>
        <Text style={styles.displayLabel}>Total Expected Yield</Text>
        <Text style={styles.displayValue}>100</Text>
      </View>
      <View style={styles.displayWrap}>
        <Text style={styles.displayLabel}>Yield Deficit</Text>
        <Text style={[styles.displayValue, styles.displayValueDanger]}>100</Text>
      </View>
      <View style={styles.displayWrap}>
        <Text style={styles.displayLabel}>Yield Surplus</Text>
        <Text style={[styles.displayValue, styles.displayValuePrimary]}>100</Text>
      </View>
    </View>
  );
};

export default YieldCalculator;
