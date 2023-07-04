import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../../ui/SearchBar';
import ShambaButton from '../../ui/ShambaButton';
import { ThemeContext } from '../../../context/ThemeContext';
import DateFilterDropdown from '../../ui/DateFilterDropdown';
import ShambaModal from '../../ui/ShambaModal';
import PurchaseForm from './PurchaseForm';
import DropdownMenu from '../../ui/DropdownMenu';

const Purchases = ({ navigation }) => {
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
    cardUnpaidRow: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
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
    dangerText: {
      color: theme.danger,
    },
  });

  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [isPurchasing, setIsPurchasing] = useState(false);

  const purchases = [
    {
      id: 1,
      item: 'Milk',
      buyer: 'John Doe',
      amount: 1000,
      unpaid: 500,
      date: '24th May 2023',
    },
    {
      id: 2,
      item: 'Milk',
      buyer: 'John Doe',
      amount: 1000,
      unpaid: 500,
      date: '24th May 2023',
    },
    {
      id: 3,
      item: 'Milk',
      buyer: 'John Doe',
      amount: 1000,
      unpaid: 500,
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
        <ShambaButton text="Purchase" onPress={() => setIsPurchasing(true)} />
      </View>

      {/* Loop through sales */}
      {purchases.map(purchase => (
        <View key={purchase.id} style={styles.cardsWrap}>
          <View style={styles.card}>
            <View style={styles.cardItemRow}>
              <Text style={styles.cardTitle}>{purchase.item}</Text>
              <Text style={[styles.cardTitle, styles.primaryText]}>
                KSH. {purchase.amount}
              </Text>
            </View>
            <View style={styles.cardItemRow}>
              <Text style={styles.cardSubtitle}>Buyer: {purchase.buyer}</Text>
              <Text style={styles.cardSubtitle}>{purchase.date}</Text>
            </View>
            <View style={styles.cardUnpaidRow}>
              <Text style={styles.cardSubtitle}>Unpaid:</Text>
              <Text style={[styles.cardSubtitle, styles.dangerText]}>
                KSH. {purchase.unpaid}
              </Text>
            </View>
          </View>
        </View>
      ))}

      {/* Viewing Payments Modal */}
      <ShambaModal
        visible={isPurchasing}
        title="PURCHASE"
        onRequestClose={() => {
          setIsPurchasing(false);
        }}>
        <PurchaseForm />
      </ShambaModal>
    </View>
  );
};

export default Purchases;
