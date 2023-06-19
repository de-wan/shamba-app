import React from 'react';
import { useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Divider } from 'react-native-paper';
import OutlinePrimaryBtn from '../../ui/OutlinePrimaryBtn';
import Carousel from 'react-native-reanimated-carousel';
import VetSchedule from '../../ui/VetSchedule';
const { width, height } = Dimensions.get('window');

const Dashboard = () => {
  const navigation = useNavigation();
  const [farmersCount, setFarmersCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [totalPendingPayments, setTotalPendingPayments] = useState(0);
  const [pendingPayments, setPendingPayments] = useState(0);
  const [totalPendingSales, setTotalPendingSales] = useState(0);
  const [pendingSales, setPendingSales] = useState(0);
  const [token, setToken] = useState('');
  const [actionPageIdx, setActionPageIdx] = useState(0);

  const dashActions = [
    [
      {
        text: 'Add Product',
        mcIcon: 'grass',
        route: 'Collections',
      },
      {
        text: 'Add Collection',
        mIcon: 'collections',
        route: 'Collections',
      },
      {
        text: 'Add Sale',
        foundationIcon: 'graph-trend',
        route: 'Collections',
      },
    ],
    [
      {
        text: 'Add Customer',
        mIcon: 'person-add',
        route: 'Collections',
      },
      {
        text: 'Pending farmer payments',
        mIcon: 'person-add',
        route: 'Collections',
      },
      {
        text: 'Pending sales payments',
        mIcon: 'person-add',
        route: 'Collections',
      },
    ],
  ];

  const fetchToken = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      let user = JSON.parse(jsonValue);
      setToken(user.token);
    } catch (e) {
      console.log(e);
    }
  };
  const fetchFarmers = async () => {
    await fetch('https://erp.shambarecords.com/api/v1/get-farmers', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        let farmers = data.data;
        setFarmersCount(farmers.length);
      })
      .catch(err => console.log(`err: ${err}`));
  };
  const fetchCustomers = async () => {
    await fetch('https://erp.shambarecords.com/api/v1/customers', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        let customers = data.data;
        setCustomersCount(customers.length);
      })
      .catch(err => console.log(`err: ${err}`));
  };
  const fetchPendingPayments = async () => {
    await fetch('https://erp.shambarecords.com/api/v1/pending_payments', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        let pending = data.data;
        setPendingPayments(pending.length);

        let currentBalance = 0;
        pending.map(data => (currentBalance += data.current_balance));
        setTotalPendingPayments(currentBalance);
      })
      .catch(err => console.log(`err: ${err}`));
  };
  const fetchPendingSales = async () => {
    await fetch('https://erp.shambarecords.com/api/v1/pending_sales', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        let pending = data.data;
        setPendingSales(pending.length);

        let currentBalance = 0;
        pending.map(data => (currentBalance += data.amount));
        setTotalPendingSales(currentBalance);
      })
      .catch(err => console.log(`err: ${err}`));
  };

  const renderActionPage = pageItems => {
    return (
      <View style={styles.actionsPage}>
        {pageItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.actionCard}
            onPress={() => navigation.navigate(item.route)}>
            <View style={styles.actionCardIconWrap}>
              {item.mIcon && (
                <MaterialIcons name={item.mIcon} size={35} color="#3cb371" />
              )}
              {item.mcIcon && (
                <MaterialCommunityIcons
                  name={item.mcIcon}
                  size={35}
                  color="#3cb371"
                />
              )}
              {item.foundationIcon && (
                <Foundation
                  name={item.foundationIcon}
                  size={35}
                  color="#3cb371"
                />
              )}
            </View>
            <Text style={styles.actionCardTitle}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  useEffect(() => {
    fetchToken();
  }, []);
  useEffect(() => {
    fetchFarmers();
    fetchCustomers();
    fetchPendingPayments();
    fetchPendingSales();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.subContainer}>
          <View style={styles.topBar}>
            <View style={styles.topBarGreetingWrap}>
              <Text style={styles.topBarGreeting}>Hello, Admin</Text>
            </View>
            <View style={styles.flexRow}>
              <TouchableOpacity
                // style={{ marginHorizontal: 5 }}
                style={styles.topBarBtn}
                onPress={() => navigation.navigate('Analytics')}>
                <MaterialIcons name="pie-chart" size={24} color="#3cb371" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.topBarBtn}>
                <MaterialIcons
                  name="notifications-on"
                  size={24}
                  color="#3cb371"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.sectionTitleWrap}>
            <Text style={styles.sectionTitle}>Summary</Text>
          </View>
          <View style={styles.summaryView}>
            <View style={styles.summaryCard}>
              <Text style={styles.summaryCardTitle}>Total Farmers</Text>
              <Text style={styles.summaryCardValue}>{farmersCount}</Text>
              <OutlinePrimaryBtn text="view" />
            </View>
            <Divider style={styles.verticalDivider} />
            <View style={styles.summaryCard}>
              <Text style={styles.summaryCardTitle}>Total Customers</Text>
              <Text style={styles.summaryCardValue}>{customersCount}</Text>
              <OutlinePrimaryBtn text="view" />
            </View>
            <Divider style={styles.verticalDivider} />
            <View style={styles.summaryCard}>
              <Text style={styles.summaryCardTitle}>Total Sales</Text>
              <Text style={styles.summaryCardValue}>{totalPendingSales}</Text>
              <OutlinePrimaryBtn text="view" />
            </View>
          </View>
        </View>

        <View style={styles.sectionTitleWrap}>
          <Text style={styles.sectionTitle}>Wallet</Text>
        </View>
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
                <Text style={styles.walletBottomRowCardTitle}>Pending</Text>
                <Text style={styles.walletBottomRowCardValue}>KES. 3,000</Text>
              </View>
              <Divider style={styles.verticalDivider} />
              <View style={styles.walletBottomRowCard}>
                <Text style={styles.walletBottomRowCardTitle}>Pending</Text>
                <Text style={styles.walletBottomRowCardValue}>KES. 3,000</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.sectionTitleWrap}>
          <Text style={styles.sectionTitle}>
            What would you like to do today?
          </Text>
        </View>
        <Carousel
          width={width}
          height={160}
          data={dashActions}
          scrollAnimationDuration={1000}
          onSnapToItem={index => setActionPageIdx(index)}
          renderItem={({ item, index }) => renderActionPage(item)}
        />
        <View style={styles.actionPageIndicatorWrap}>
          <View
            style={[
              styles.actionPageIndicator,
              actionPageIdx === 0
                ? styles.actionPageIndicatorActive
                : styles.actionPageIndicator,
            ]}
          />
          <View
            style={[
              styles.actionPageIndicator,
              actionPageIdx === 1
                ? styles.actionPageIndicatorActive
                : styles.actionPageIndicator,
            ]}
          />
        </View>

        <View style={[styles.sectionTitleWrap, styles.vetSectionTitle]}>
          <Text style={styles.sectionTitle}>Vet Schedules</Text>
          <OutlinePrimaryBtn text="View All" />
        </View>

        <View>
          <VetSchedule />
        </View>
      </ScrollView>
    </View>
  );
};
export default Dashboard;
const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  mainContainer: {
    width: width,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  subContainer: {
    width: width,
  },
  verticalDivider: {
    width: 1,
    height: '100%',
  },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  topBarGreetingWrap: {
    flex: 1,
  },
  topBarGreeting: {
    color: '#3cb371',
    fontSize: 25,
  },
  topBarBtn: {
    // flex: 0,
    marginHorizontal: 5,
  },
  sectionTitleWrap: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  vetSectionTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
  },
  sectionTitle: {
    fontSize: 17,
  },
  summaryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryCard: {
    padding: 10,
  },
  summaryCardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  summaryCardValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  WalletCardWrap: {
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
  actionsPage: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionPageIndicatorWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  actionPageIndicator: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#aaa',
    marginHorizontal: 5,
    elevation: 1,
  },
  actionPageIndicatorActive: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#3cb371',
    marginHorizontal: 5,
  },
  actionCard: {
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#454545',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: width * 0.3,
  },
  actionCardIconWrap: {
    padding: 20,
    paddingBottom: 5,
  },
  actionCardTitle: {
    fontSize: 16,
    paddingVertical: 5,
  },
});
