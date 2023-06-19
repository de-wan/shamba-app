import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';

const Wallet = () => {
  return (
    <View>
      <View style={styles.WalletCardWrap}>
        <View style={styles.walletCard}>
          <View style={styles.balanceTitleWrap}>
            <Text style={styles.balanceTitle}>Balance</Text>
          </View>
          <View style={styles.balanceWrap}>
            <Text style={styles.balance}>KES. 10,000</Text>
          </View>
          <View style={styles.walletBottomRow}>
            <View style={styles.walletBottomRowCard}>
              <Text style={styles.walletBottomRowCardTitle}>Pending</Text>
              <Text style={styles.walletBottomRowCardValue}>KES. 3,000</Text>
            </View>
            <Divider style={styles.verticalDivider} />
            <View style={styles.walletBottomRowCard}>
              <Text style={styles.walletBottomRowCardTitle}>Income</Text>
              <Text style={styles.walletBottomRowCardValue}>KES. 3,000</Text>
            </View>
            <Divider style={styles.verticalDivider} />
            <View style={styles.walletBottomRowCard}>
              <Text style={styles.walletBottomRowCardTitle}>Expense</Text>
              <Text style={styles.walletBottomRowCardValue}>KES. 3,000</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  verticalDivider: {
    width: 1,
    height: '100%',
  },
  WalletCardWrap: {
    marginTop: 10,
    elevation: 5,
    width: '100%',
    alignItems: 'center',
  },
  walletCard: {
    width: '90%',
    borderWidth: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#aaa',
  },
  balanceTitleWrap: {
    marginTop: 10,
  },
  balanceWrap: {
    marginTop: 10,
  },
  balance: {
    fontSize: 20,
    font: 'bold',
  },
  walletBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 10,
    marginBottom: 2,
  },
});
