import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../../ui/SearchBar';
import ShambaButton from '../../ui/ShambaButton';
import DateFilterDropdown from '../../ui/DateFilterDropdown';
import { ThemeContext } from '../../../context/ThemeContext';
import ShambaModal from '../../ui/ShambaModal';
import RegisterClaimForm from './RegisterClaimForm';
import DropdownMenu from '../../ui/DropdownMenu';

const Subscribed = () => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    filterBar: {
      paddingHorizontal: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
    },
    actionsBar: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 2,
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
    cardRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    justifyEnd: {
      justifyContent: 'flex-end',
    },
    cardTitle: {
      fontSize: 20,
      color: theme.gray1,
    },
    loanInfoWrap: {
      flex: 1,
    },
    nameAmountWrap: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    loanName: {
      fontSize: 20,
      color: theme.gray1,
    },
    loanAmount: {
      fontSize: 17,
      color: theme.primary,
    },
    textWarning: {
      color: theme.warning,
    },
    cardText: {
      fontSize: 15,
      color: theme.gray1,
    },
    cardItemBottomRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    grayText: {
      color: theme.gray1,
    },
    whiteText: {
      color: theme.wb_color,
    },
    statusWrap: {
      padding: 3,
      borderRadius: 5,
    },
    pendingStatusWrap: {
      backgroundColor: theme.warning,
    },
    completedStatusWrap: {
      backgroundColor: theme.primary,
    },
    cancelledStatusWrap: {
      backgroundColor: theme.danger,
    },
  });

  const [isFilterVisible, setIsFilterVisible] = React.useState(false);

  const [selectedLoan, setSelectedLoan] = React.useState({});
  const [isViewingInstallments, setIsViewingInstallments] =
    React.useState(false);
  const [isRegisteringClaim, setIsRegisteringClaim] = React.useState(false);

  const claims = [
    {
      id: 1,
      name: 'Boma',
      payee: 'John Doe',
      status: 'Paid Installment',
      amount: '200',
      date: '23rd June 2021',
    },
    {
      id: 2,
      name: 'Boma',
      payee: 'John Doe',
      status: 'Paid Installment',
      amount: '200',
      date: '23rd Apr 2021',
    },
    {
      id: 3,
      name: 'Boma',
      payee: 'John Doe',
      status: 'Paid Installment',
      amount: '200',
      date: '23rd May 2021',
    },
  ];

  const getStatusWrapStyle = status => {
    switch (status) {
      case 'Pending':
        return styles.pendingStatusWrap;
      case 'Completed':
      case 'Paid Installment':
        return styles.completedStatusWrap;
      case 'Cancelled':
      case 'Declined':
        return styles.cancelledStatusWrap;
      default:
        return styles.pendingStatusWrap;
    }
  };

  return (
    <ScrollView>
      <SearchBar searchCallback={() => console.log('searching...')}>
        <ShambaButton
          materialCommunityIcon="filter-outline"
          onPress={() => setIsFilterVisible(!isFilterVisible)}
        />
        <DropdownMenu
          trigger={<ShambaButton materialCommunityIcon="sort" />}
          options={[
            { text: 'Latest', onSelect: () => {} },
            { text: 'Earliest', onSelect: () => {} },
          ]}
        />
      </SearchBar>
      {isFilterVisible && (
        <View style={styles.filterBar}>
          <DateFilterDropdown changeCallback={() => {}} />
        </View>
      )}
      {/* Loop through transactions */}
      {claims.map(claim => (
        <View key={claim.id} style={styles.cardsWrap}>
          <View style={styles.card}>
            <View style={styles.cardRow}>
              <Text style={styles.cardTitle}>{claim.name}</Text>
              <View
                style={[styles.statusWrap, getStatusWrapStyle(claim.status)]}>
                <Text style={styles.whiteText}>{claim.status}</Text>
              </View>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.grayText}>{claim.payee}</Text>
              <Text style={styles.cardTitle}>KSH{claim.amount}</Text>
            </View>
            <View style={[styles.cardRow, styles.justifyEnd]}>
              <Text style={styles.grayText}>{claim.date}</Text>
            </View>
          </View>
        </View>
      ))}

      {/* Register claim Modal */}
      <ShambaModal
        visible={isRegisteringClaim}
        title="REGISTER CLAIM"
        onRequestClose={() => {
          setIsRegisteringClaim(false);
        }}>
        <RegisterClaimForm />
      </ShambaModal>
    </ScrollView>
  );
};

export default Subscribed;
