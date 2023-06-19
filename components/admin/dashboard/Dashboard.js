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

const Dashboard = () => {
  const navigation = useNavigation();
  const [farmersCount, setFarmersCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [totalPendingPayments, setTotalPendingPayments] = useState(0);
  const [pendingPayments, setPendingPayments] = useState(0);
  const [totalPendingSales, setTotalPendingSales] = useState(0);
  const [pendingSales, setPendingSales] = useState(0);
  const [token, setToken] = useState('');

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
  useEffect(() => {
    fetchToken();
  }, []);
  useEffect(() => {
    fetchFarmers();
    fetchCustomers();
    fetchPendingPayments();
    fetchPendingSales();
  }, [token]);
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View
          style={{
            height: 320,
            width: 370,
            backgroundColor: '#3CB371',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <View
            style={{
              width: '90%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <Image
                source={require('../../../assets/images/avatar.png')}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 75,
                  marginRight: 10,
                }}
              />
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>
                Welcome Admin
              </Text>
            </View>
            <TouchableOpacity
              style={{ marginHorizontal: 5 }}
              onPress={() => navigation.navigate('Analytics')}>
              <MaterialIcons name="pie-chart" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 5 }}>
              <MaterialIcons name="notifications-on" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '90%',
              backgroundColor: '#fff',
              height: 200,
              borderRadius: 20,
              marginTop: 20,
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <View
              style={{
                width: '50%',
                height: '45%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{ color: '#3cb371', fontSize: 18, fontWeight: 'bold' }}>
                {farmersCount}
              </Text>
              <Text style={{ fontSize: 14 }}>Total farmers</Text>
            </View>
            <View
              style={{
                width: '50%',
                height: '45%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{ color: '#3cb371', fontSize: 18, fontWeight: 'bold' }}>
                {customersCount}
              </Text>
              <Text style={{ fontSize: 14 }}>Registered customers</Text>
            </View>
            <View
              style={{
                width: '50%',
                height: '45%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{ color: '#3cb371', fontSize: 18, fontWeight: 'bold' }}>
                Ksh {totalPendingPayments}
              </Text>
              <Text style={{ fontSize: 14 }}>Pending payment</Text>
            </View>
            <View
              style={{
                width: '50%',
                height: '45%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{ color: '#3cb371', fontSize: 18, fontWeight: 'bold' }}>
                Ksh {totalPendingSales}
              </Text>
              <Text style={{ fontSize: 14 }}>Total sales</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: 370,
            height: 100,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Collections')}
            style={{
              width: 110,
              height: '90%',
              backgroundColor: '#fff',
              borderRadius: 10,
              elevation: 10,
              shadowColor: '#454545',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <MaterialCommunityIcons name="grass" size={35} />
            <Text style={{ fontSize: 14 }}>Add Product</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Collections')}
            style={{
              width: 110,
              height: '90%',
              backgroundColor: '#fff',
              borderRadius: 10,
              elevation: 20,
              shadowColor: '#454545',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <MaterialIcons name="collections" size={35} />
            <Text style={{ fontSize: 14 }}>Add Collection</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Manufacturing and Sales')}
            style={{
              width: 110,
              height: '90%',
              backgroundColor: '#fff',
              borderRadius: 10,
              elevation: 20,
              shadowColor: '#454545',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Foundation name="graph-trend" size={35} />
            <Text style={{ fontSize: 14 }}>Add Sale</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 370,
            height: 180,
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10,
          }}>
          <Text style={{ fontSize: 18 }}>Pending transactions</Text>
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 10,
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#3cb371',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 75,
                  backgroundColor: '#3cb371',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <MaterialIcons name="pending-actions" size={24} color="#fff" />
              </View>
              <Text style={{ fontSize: 14 }}>Pending farmer payments</Text>
            </View>
            <Text style={{ fontSize: 14 }}>{pendingPayments}</Text>
          </View>
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 10,
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#3cb371',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 75,
                  backgroundColor: '#3cb371',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <MaterialIcons name="pending-actions" size={24} color="#fff" />
              </View>
              <Text style={{ fontSize: 14 }}>Pending sales payments</Text>
            </View>
            <Text style={{ fontSize: 14 }}>{pendingSales}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Dashboard;
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
