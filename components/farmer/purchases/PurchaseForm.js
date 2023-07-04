import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ShambaInput from '../../ui/ShambaInput';
import ShambaButton from '../../ui/ShambaButton';
import { ThemeContext } from '../../../context/ThemeContext';

const PurchaseForm = ({ navigation }) => {
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
        <ShambaInput label="Item Name" placeholder="Maize Seeds" />
      </View>
      <View style={styles.inputWrap}>
        <ShambaInput label="Quantity" placeholder="10" />
      </View>
      <View style={styles.inputWrap}>
        <ShambaInput label="Unit" placeholder="Kgs" />
      </View>
      <View style={styles.inputWrap}>
        <ShambaInput label="To Pay" placeholder="1000" />
      </View>
      <View style={styles.inputWrap}>
        <ShambaInput label="Paid" placeholder="1000" />
      </View>
      <View style={styles.inputWrap}>
        <ShambaButton text="Purchase" />
      </View>
    </View>
  );
};

export default PurchaseForm;
