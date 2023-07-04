import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../context/ThemeContext';

const ViewSubscriptionInstallments = () => {
  const theme = useContext(ThemeContext);
  const styles = StyleSheet.create({
    main: {
      paddingTop: 20,
    },
    detailWrap: {
      marginBottom: 20,
    },
    displayWrap: {
      paddingHorizontal: 10,
      marginBottom: 10,
      gap: 10,
    },
    displayLabel: {
      color: theme.gray1,
      fontSize: 17,
    },
    displayValue: {
      color: theme.gray1,
      fontSize: 20,
      fontWeight: 'bold',
    },
    installmentRow: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      marginBottom: 5,
    },
    installmentDate: {
      flex: 1,
      color: theme.gray1,
      fontSize: 17,
    },
    installmentAmount: {
      fontSize: 17,
      marginRight: 10,
      color: theme.gray1,
    },
    installmentStatusPaid: {
      fontSize: 17,
      color: theme.primary,
      width: 55,
    },
    installmentStatusUnpaid: {
      fontSize: 17,
      color: theme.warning,
      width: 55,
    },
    primaryText: {
      color: theme.primary,
    },
  });

  const installments = [
    {
      id: 1,
      date: 'Jan 2023',
      amount: 10000,
      status: 'Paid',
    },
    {
      id: 2,
      date: 'Feb 2023',
      amount: 10000,
      status: 'Paid',
    },
    {
      id: 3,
      date: 'Mar 2023',
      amount: 10000,
      status: 'Paid',
    },
    {
      id: 4,
      date: 'Apr 2023',
      amount: 10000,
      status: 'Paid',
    },
    {
      id: 5,
      date: 'May 2023',
      amount: 10000,
      status: 'Paid',
    },
    {
      id: 6,
      date: 'Jun 2023',
      amount: 10000,
      status: 'Unpaid',
    },
    {
      id: 7,
      date: 'Jul 2023',
      amount: 10000,
      status: 'Unpaid',
    },
  ];

  return (
    <View style={styles.main}>
      <View style={styles.detailWrap}>
        <View style={styles.displayWrap}>
          <Text style={styles.displayLabel}>Subscription Payments: </Text>
          <Text style={[styles.displayValue, styles.primaryText]}>
            Ksh. 100,000 / month
          </Text>
        </View>
      </View>
      <View>
        {installments.map(installment => (
          <View key={installment.id} style={styles.installmentRow}>
            <Text style={styles.installmentDate}>{installment.date}</Text>
            <Text style={styles.installmentAmount}>{installment.amount}</Text>
            {installment.status === 'Paid' ? (
              <Text style={styles.installmentStatusPaid}>
                {installment.status}
              </Text>
            ) : (
              <Text style={styles.installmentStatusUnpaid}>
                {installment.status}
              </Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default ViewSubscriptionInstallments;
