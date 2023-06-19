import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Loans from './Loans';
import CompletedPayments from './CompletedPayments';
import PendingPayments from './PendingPayments';

const Tab = createMaterialTopTabNavigator();

const Wallet2 = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.walletTop}>
        <View style={styles.topCard}>
          <Text style={styles.topCardLabel}>Pending Payments</Text>
          <Text style={[styles.topCardValue, styles.pendingText]}>50,000</Text>
        </View>
        <Divider style={styles.verticalDivider} />
        <View style={styles.topCard}>
          <Text style={styles.topCardLabel}>Completed Payments</Text>
          <Text style={[styles.topCardValue, styles.completedText]}>50,000</Text>
        </View>
      </View>
      <View style={styles.tabWrap}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#3CB371',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: '#fff' },
          tabBarIndicatorStyle: { backgroundColor: '#3CB371', height: 5 },
        }}>
        <Tab.Screen name="Pending Payments" component={PendingPayments} />
        <Tab.Screen name="Completed Payments" component={CompletedPayments} />
        <Tab.Screen name="Loans" component={Loans} />
      </Tab.Navigator>
      </View>
    </View>
  );
};

export default Wallet2;
const height = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    height: height,
  },
  tabWrap: {
    flex: 1,
  },
  verticalDivider: {
    width: 1,
    height: '100%',
  },
  walletTop: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  topCard: {
    padding: 10,
    flex: 1,
  },
  pendingText: {
    color: 'red',
  },
  completedText: {
    color: 'green',
  },
  topCardLabel: {
    fontSize: 12,
    color: '#aaa',
  },
  topCardValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
