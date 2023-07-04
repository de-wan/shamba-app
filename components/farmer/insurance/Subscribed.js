import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../../ui/SearchBar';
import ShambaButton from '../../ui/ShambaButton';
import DateFilterDropdown from '../../ui/DateFilterDropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../../../context/ThemeContext';
import ShambaModal from '../../ui/ShambaModal';
import PaySubscriptionForm from './PaySubscriptionForm';
import ViewSubscriptionInstallments from './ViewSubscriptionInstallments';
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
      flexDirection: 'row',
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
  });

  const [isFilterVisible, setIsFilterVisible] = React.useState(false);
  const [isRequestingLoan, setIsRequestingLoan] = React.useState(false);

  const [selectedLoan, setSelectedLoan] = React.useState({});
  const [isViewingInstallments, setIsViewingInstallments] =
    React.useState(false);
  const [isPayingForSubscription, setIsPayingForSubscription] =
    React.useState(false);

  const subscriptions = [
    {
      id: 1,
      name: 'Boma',
      mode: 'Monthly',
      pricing: 1000,
      unpaid: '200',
      payment_due_date: '28th July 2023',
    },
  ];

  const triggerViewInstallments = () => {
    setIsViewingInstallments(true);
  };

  const triggerRepaySubscription = () => {
    setIsPayingForSubscription(true);
  };

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
      {subscriptions.map(subscription => (
        <View key={subscription.id} style={styles.cardsWrap}>
          <View style={styles.card}>
            <View style={styles.loanInfoWrap}>
              <Text style={styles.loanName}>{subscription.name}</Text>
              <Text style={styles.loanAmount}>
                KSH. {subscription.pricing} {subscription.mode}
              </Text>
              <Text style={[styles.cardText, styles.textWarning]}>
                Unpaid: {subscription.unpaid}
              </Text>
              <Text style={(styles.cardText, styles.textWarning)}>
                Due Date: {subscription.payment_due_date}
              </Text>
            </View>
            <DropdownMenu
              trigger={
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={30}
                  color={theme.gray1}
                />
              }
              options={[
                {
                  text: 'View Installments',
                  onSelect: () => triggerViewInstallments(),
                },
                {
                  text: 'Pay Subscription',
                  onSelect: () => triggerRepaySubscription(),
                },
              ]}
            />
          </View>
        </View>
      ))}

      {/* View Installments Modal */}
      <ShambaModal
        visible={isViewingInstallments}
        title="VIEW INSTALLMENTS"
        onRequestClose={() => {
          setIsViewingInstallments(false);
        }}>
        <ViewSubscriptionInstallments />
      </ShambaModal>

      {/* Repay loan Modal */}
      <ShambaModal
        visible={isPayingForSubscription}
        title="REPAY LOAN"
        onRequestClose={() => {
          setIsPayingForSubscription(false);
        }}>
        <PaySubscriptionForm />
      </ShambaModal>
    </View>
  );
};

export default Subscribed;
