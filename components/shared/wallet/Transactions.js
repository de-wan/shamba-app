import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../../ui/SearchBar';
import ShambaButton from '../../ui/ShambaButton';
import DateFilterDropdown from '../../ui/DateFilterDropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../../../context/ThemeContext';
import DropdownMenu from '../../ui/DropdownMenu';

const Transactions = () => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    filterBar: {
      paddingHorizontal: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
    },
    cardsWrap: {
      padding: 10,
    },
    card: {
      padding: 10,
      backgroundColor: theme.wb_color1,
      borderBottomWidth: 1,
      borderBottomColor: theme.primary,
    },
    transactionCode: {
      fontSize: 20,
      color: theme.gray1,
    },
    amountWrap: {
      flexDirection: 'row',
    },
    amount: {
      fontSize: 17,
    },
    textPrimary: {
      color: theme.primary,
    },
    textDanger: {
      color: theme.danger,
    },
    cardText: {
      fontSize: 15,
      color: theme.gray1,
    },
    cardItemBottomRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

  const [isFilterVisible, setIsFilterVisible] = React.useState(false);

  const transactions = [
    {
      id: 1,
      code: 'T43543',
      amount: 1000,
      source: 'Internal',
      initiator: 'John Doe',
      date: '28th May, 10:10',
      type: 'Debit',
    },
    {
      id: 2,
      code: 'T435432',
      amount: 1000,
      source: 'Internal',
      initiator: 'John Doe',
      date: '28th May, 10:10',
      type: 'Credit',
    },
    {
      id: 3,
      code: 'T435432',
      amount: 500,
      source: 'Internal',
      initiator: 'John Doe',
      date: '28th May, 10:10',
      type: 'Credit',
    },
    {
      id: 4,
      code: 'T435432',
      amount: 500,
      source: 'Internal',
      initiator: 'John Doe',
      date: '28th May, 10:10',
      type: 'Debit',
    },
  ];

  return (
    <View>
      <SearchBar searchCallback={() => console.log('searching...')}>
        <ShambaButton
          materialCommunityIcon="filter-outline"
          onPress={() => setIsFilterVisible(!isFilterVisible)}
        />
        <DropdownMenu
          trigger={<ShambaButton materialCommunityIcon="sort" />}
          options={[
            { text: 'Latest', onSelect: () => {} },
            { text: 'Largest Amount', onSelect: () => {} },
          ]}
        />
      </SearchBar>
      {isFilterVisible && (
        <View style={styles.filterBar}>
          <DateFilterDropdown changeCallback={() => {}} />
        </View>
      )}
      {/* Loop through transactions */}
      {transactions.map(transaction => (
        <View key={transaction.id} style={styles.cardsWrap}>
          <View style={styles.card}>
            <Text style={styles.transactionCode}>{transaction.code}</Text>
            {transaction.type === 'Credit' ? (
              <View style={[styles.amountWrap]}>
                <MaterialCommunityIcons
                  name="minus"
                  size={20}
                  color={theme.danger}
                />
                <Text style={[styles.amount, styles.textDanger]}>
                  KSH. {transaction.amount}
                </Text>
              </View>
            ) : (
              <View style={[styles.amountWrap]}>
                <MaterialCommunityIcons
                  name="plus"
                  size={20}
                  color={theme.primary}
                />
                <Text style={[styles.amount, styles.textPrimary]}>
                  KSH. {transaction.amount}
                </Text>
              </View>
            )}
            <Text style={styles.cardText}>Source: {transaction.source}</Text>
            <View style={styles.cardItemBottomRow}>
              <Text style={styles.cardText}>
                Initiator: {transaction.initiator}
              </Text>
              <Text style={styles.cardTitle}>{transaction.date}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Transactions;
