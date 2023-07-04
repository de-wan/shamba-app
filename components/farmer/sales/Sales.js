import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../../ui/SearchBar';
import ShambaButton from '../../ui/ShambaButton';
import { ThemeContext } from '../../../context/ThemeContext';
import DateFilterDropdown from '../../ui/DateFilterDropdown';
import ViewPayments from './ViewPayments';
import ShambaModal from '../../ui/ShambaModal';
import DropdownMenu from '../../ui/DropdownMenu';

const Sales = ({ navigation }) => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    filterBar: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
    },
    actionsBar: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 5,
      justifyContent: 'flex-end',
    },
    filterMenuTrigger: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderWidth: 1,
      borderColor: theme.primary,
      borderStyle: 'solid',
      borderRadius: 5,
      flexDirection: 'row',
    },
    filterMenuTriggerIcon: {
      marginLeft: 5,
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
    cardItemRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardTitle: {
      color: theme.gray1,
      fontSize: 20,
    },
    cardSubtitle: {
      color: theme.gray3,
      fontSize: 13,
    },
    primaryText: {
      color: theme.primary,
    },
  });

  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [isViewingPayments, setIsViewingPayments] = useState(false);

  const sales = [
    {
      id: 1,
      item: 'Milk',
      buyer: 'John Doe',
      amount: 1000,
      date: '24th May 2023',
    },
    {
      id: 2,
      item: 'Milk',
      buyer: 'John Doe',
      amount: 1000,
      date: '24th May 2023',
    },
    {
      id: 3,
      item: 'Milk',
      buyer: 'John Doe',
      amount: 1000,
      date: '24th May 2023',
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
            { text: 'Largest Price', onSelect: () => {} },
          ]}
        />
      </SearchBar>
      {isFilterVisible && (
        <View style={styles.filterBar}>
          <DateFilterDropdown changeCallback={() => {}} />
        </View>
      )}
      <View style={styles.actionsBar}>
        <ShambaButton
          text="View Payments"
          onPress={() => setIsViewingPayments(true)}
        />
      </View>

      {/* Loop through sales */}
      {sales.map(sale => (
        <View key={sale.id} style={styles.cardsWrap}>
          <View style={styles.card}>
            <View style={styles.cardItemRow}>
              <Text style={styles.cardTitle}>{sale.item}</Text>
              <Text style={[styles.cardTitle, styles.primaryText]}>
                KSH. {sale.amount}
              </Text>
            </View>
            <View style={styles.cardItemRow}>
              <Text style={styles.cardSubtitle}>Buyer: {sale.buyer}</Text>
              <Text style={styles.cardSubtitle}>{sale.date}</Text>
            </View>
          </View>
        </View>
      ))}

      {/* Viewing Payments Modal */}
      <ShambaModal
        visible={isViewingPayments}
        title="VIEW PAYMENTS"
        onRequestClose={() => {
          setIsViewingPayments(false);
        }}>
        <ViewPayments />
      </ShambaModal>
    </View>
  );
};

export default Sales;
