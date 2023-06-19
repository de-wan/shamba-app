import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CompletedPayments = () => {
  const [completedPayments, setCompletedPayments] = useState([
    {
      id: 1,
      name: 'John Doe',
      amount: 5000,
      phone_no: '25472348234',
      date: '12th May 2023, 10:10',
    },
    {
      id: 2,
      name: 'John Doe',
      amount: 5000,
      phone_no: '25472348234',
      date: '12th May 2023, 10:10',
    },
  ]);
  return (
    <View>
      <View style={styles.searchWrap}>
        <TextInput
          style={[styles.inputField, styles.searchInput]}
          placeholder="Search"
        />
        <TouchableOpacity style={styles.searchBtn}>
          <MaterialIcons name="search" size={24} color="#fff" />
        </TouchableOpacity>
        <View />
      </View>
      <ScrollView>
        {completedPayments.map(payment => (
          <View key={payment.id} style={styles.paymentCard}>
            <View>
              <View style={styles.paymentCardRow}>
                <Text style={styles.paymentName}>{payment.name}</Text>
                <Text style={styles.paymentAmount}>KES. {payment.amount}</Text>
              </View>
              <View style={styles.paymentCardRow}>
                <Text>{payment.phone_no}</Text>
                <Text>{payment.date}</Text>
              </View>
            </View>

          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CompletedPayments;
const styles = StyleSheet.create({
  inputField: {
    width: '100%',
    height: 45,
    textAlign: 'left',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  searchWrap: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 5,
  },
  searchInput: {
    width: '84%',
    marginTop: 0,
  },
  searchBtn: {
    width: 45,
    height: 45,
    borderRadius: 75,
    backgroundColor: '#3cb371',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  paymentCard: {
    marginHorizontal: 10,
    borderBottomColor: '#3cb371',
    borderBottomWidth: 1,
    padding: 7,
  },
  paymentCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentName: {
    fontWeight: 'bold',
  },
  paymentAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3cb371',
  },
});
