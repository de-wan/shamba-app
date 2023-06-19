import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Divider } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Loans = () => {
  const [loans, setLoans] = useState([
    {
      id: 1,
      name: 'John Doe',
      amount: 5000,
      interest_rate: '1',
      num_of_installments: '12',
      paid: 0,
      balance: 5000,
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
        {loans.map(loan => (
          <View key={loan.id} style={styles.loanCard}>
            <View>
              <View style={styles.loanCardRow}>
                <Text style={styles.farmerName}>{loan.name}</Text>
                <Text style={styles.loanAmount}>KES. {loan.amount}</Text>
              </View>
              <View style={styles.loanCardRow}>
                <Text>{loan.phone_no}</Text>
                <Text>{loan.num_of_installments} installments</Text>
              </View>
              <View style={styles.loanCardRow}>
                <View style={styles.loanSubCard}>
                  <Text>Paid:</Text>
                  <Text style={styles.loanPaidText}>{loan.paid}</Text>
                </View>
                <Divider style={styles.verticalDivider} />
                <View style={styles.loanSubCard}>
                  <Text>Balance:</Text>
                  <Text style={styles.loanBalanceText}>{loan.balance}</Text>
                </View>
                <Divider style={styles.verticalDivider} />
                <View style={styles.loanSubCard}>
                  <Text>Total Interests:</Text>
                  <Text style={styles.loanInterestsText}>{loan.balance}</Text>
                </View>
              </View>
              <View style={[styles.loanCardRow, styles.justifyRight]}>
                <Text>{loan.date}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Loans;
const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 35,
    backgroundColor: '#3CB371',
    borderRadius: 20,
  },
  verticalDivider: {
    width: 1,
    height: '100%',
  },
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
  loanCard: {
    marginHorizontal: 10,
    borderBottomColor: '#3cb371',
    borderBottomWidth: 1,
    padding: 7,
  },
  loanCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  farmerName: {
    fontWeight: 'bold',
  },
  loanSubCard: {
    padding: 5,
    flex: 1,
  },
  loanAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3cb371',
  },
  justifyRight: {
    justifyContent: 'flex-end',
  },
  loanPaidText: {
    fontWeight: 'bold',
    color: '#3cb371',
  },
  loanBalanceText: {
    fontWeight: 'bold',
    color: '#ff9900',
  },
  loanInterestsText: {
    fontWeight: 'bold',
    color: '#0099ff',
  },
});
