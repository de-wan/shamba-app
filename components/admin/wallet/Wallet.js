import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { pendingPayments } from '../../../tables/WalletTable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Wallet = () => {
  const [makePaymentModal, setMakePaymentModal] = React.useState(false);
  const [token, setToken] = useState('');
  const [pendingPayments, setPendingPayments] = useState([]);
  const [totalPendingPayments, setTotalPendingPayments] = useState(0);

  const fetchToken = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      let user = JSON.parse(jsonValue);
      setToken(user.token);
    } catch (e) {
      console.log(e);
    }
  };
  const fetchPendingPayments = async () => {
    fetchToken();
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
        console.log(data.data);
        setPendingPayments(data.data);

        let currentBalance = 0;
        pendingPayments?.map(
          data => (currentBalance = data.current_balance + currentBalance)
        );
        setTotalPendingPayments(currentBalance);
      })
      .catch(err => console.log(`err: ${err}`));
  };
  useEffect(() => {
    fetchToken();
  }, []);
  useEffect(() => {
    fetchPendingPayments();
  }, [token]);

  return (
    <View style={styles.dashContainer}>
      <Modal
        animationType="slide"
        visible={makePaymentModal}
        onRequestClose={() => {
          setMakePaymentModal(!makePaymentModal);
        }}>
        <TouchableOpacity onPress={() => setMakePaymentModal(false)}>
          <AntDesign name="arrowleft" size={22} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Make a payment</Text>
          <View
            style={{
              width: '90%',
              height: 80,
              marginTop: 10,
              paddingLeft: 20,
            }}>
            <Text>Amount to pay(Ksh):</Text>
            <TextInput
              style={styles.inputField}
              placeholder="5,000"
              autofocus={true}
            />
          </View>
          <View
            style={{
              width: '90%',
              height: 80,
              marginTop: 10,
              paddingLeft: 20,
            }}>
            <Text>Full name of the person making the payment:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Jackson Mutuma"
              autofocus={true}
            />
          </View>

          <View
            style={{
              width: '90%',
              height: 140,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20,
              paddingLeft: 20,
            }}>
            <TouchableOpacity
              onPress={() => setMakePaymentModal(false)}
              style={styles.button}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 14,
                  paddingTop: 8,
                }}>
                Make payment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setMakePaymentModal(false)}
              style={styles.button}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 14,
                  paddingTop: 8,
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View
        style={{
          width: '90%',
          height: 100,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View
          style={{
            width: '45%',
            height: 100,
            flexDirection: 'column',
            backgroundColor: '#3CB371',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={{ fontSize: 14, color: '#fff' }}>Income</Text>
          <View
            style={{
              width: '100%',
              height: 60,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <AntDesign name="arrowup" size={22} color="#fff" />
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
              Ksh 2,192,000
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '45%',
            height: 100,
            flexDirection: 'column',
            backgroundColor: '#E9AB17',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={{ fontSize: 14, color: '#fff' }}>Expenses</Text>
          <View
            style={{
              width: '100%',
              height: 60,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <AntDesign name="arrowdown" size={22} color="#fff" />
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
              Ksh 792,000
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          width: '100%',
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 'bold',
          marginVertical: 10,
        }}>
        Pending Payments
      </Text>
      <View
        style={{
          width: '95%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 12,
          marginBottom: 10,
        }}>
        <TextInput
          style={[styles.inputField, { width: '84%', marginTop: 0 }]}
          placeholder="Search"
        />
        <TouchableOpacity
          style={{
            width: 45,
            height: 45,
            borderRadius: 75,
            backgroundColor: '#3cb371',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
          }}>
          <MaterialIcons name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '90%',
          height: 100,
          flexDirection: 'column',
          backgroundColor: '#E55451',
          borderRadius: 20,
          marginBottom: 10,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text style={{ fontSize: 14, color: '#fff' }}>Pending Payments</Text>
        <View
          style={{
            width: '50%',
            height: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <MaterialIcons name="payments" size={22} color="#fff" />
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
            Ksh {totalPendingPayments}
          </Text>
        </View>
      </View>
      <ScrollView style={{ height: 500, width: width, marginBottom: 10 }}>
        {pendingPayments?.map(payment => (
          <View
            style={{
              height: 70,
              borderColor: '#90ee91',
              borderBottomWidth: 1,
              width: '100%',
              borderRadius: 10,
              paddingHorizontal: 10,
              marginBottom: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            key={payment.id}>
            <View style={{ width: '15%' }}>
              <FontAwesome5 name="money-bill-wave" size={22} />
            </View>
            <View style={{ width: '55%', justifyContent: 'flex-start' }}>
              <Text style={{ fontWeight: 'bold' }}>
                {payment.first_name} {payment.other_names}
              </Text>
              <Text>{payment.phone_no}</Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                width: '30%',
                justifyContent: 'space-around',
              }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                {payment.currency} {payment.current_balance}
              </Text>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 35,
                  backgroundColor: '#3CB371',
                  borderRadius: 10,
                }}
                onPress={() => setMakePaymentModal(true)}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                    textAlign: 'center',
                    paddingTop: 8,
                  }}>
                  Make Payment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default Wallet;
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  dashContainer: {
    width: width,
    height: height,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    width: 140,
    height: 35,
    backgroundColor: '#3CB371',
    borderRadius: 20,
  },
  inputField: {
    width: '100%',
    height: 45,
    textAlign: 'left',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
});
