import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../../../context/ThemeContext';
import ShambaInput from '../../ui/ShambaInput';
import ShambaButton from '../../ui/ShambaButton';

const PaySubscriptionForm = () => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    main: {
      paddingTop: 20,
    },
    inputWrap: {
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    detailWrap: {
      marginBottom: 20,
    },
    displayWrap: {
      paddingHorizontal: 10,
      marginBottom: 10,
      flexDirection: 'row',
      gap: 10,
      alignItems: 'flex-end',
    },
    displayLabel: {
      color: theme.gray1,
      fontSize: 14,
    },
    displayValue: {
      color: theme.gray1,
      fontSize: 17,
      fontWeight: 'bold',
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
      <View style={styles.detailWrap}>
        <View style={styles.displayWrap}>
          <Text style={styles.displayLabel}>Loan Amount: </Text>
          <Text style={[styles.displayValue, styles.primaryText]}>
            Ksh. 100,000
          </Text>
        </View>
        <View style={styles.displayWrap}>
          <Text style={styles.displayLabel}>Unpaid Amount: </Text>
          <Text style={[styles.displayValue, styles.warningText]}>
            Ksh. 50,000
          </Text>
        </View>
      </View>
      <View style={styles.inputWrap}>
        <ShambaInput label="Amount" placeholder="Enter amount to repay" />
      </View>
      <View style={styles.inputWrap}>
        <ShambaInput label="Phone" placeholder="2547..." />
      </View>
      <View style={styles.inputWrap}>
        <ShambaButton text="Repay Loan" />
      </View>
    </View>
  );
};

export default PaySubscriptionForm;
