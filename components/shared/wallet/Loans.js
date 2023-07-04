import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../../ui/SearchBar';
import ShambaButton from '../../ui/ShambaButton';
import DateFilterDropdown from '../../ui/DateFilterDropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../../../context/ThemeContext';
import ViewInstallments from './ViewInstallments';
import ShambaModal from '../../ui/ShambaModal';
import RepayLoanForm from './RepayLoanForm';
import DropdownMenu from '../../ui/DropdownMenu';

const Loans = ({ navigator }) => {
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
  const [isRepayingLoan, setIsRepayingLoan] = React.useState(false);

  const loans = [
    {
      id: 1,
      name: 'Mifugo Loan',
      amount: 1000,
      interest_rate: '1.5% p.a.',
      unpaid: '200',
      due_date: '28th July 2023',
    },
  ];

  const triggerViewInstallments = () => {
    setIsViewingInstallments(true);
  };

  const triggerRepayLoan = () => {
    setIsRepayingLoan(true);
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
      <View style={styles.actionsBar}>
        <ShambaButton
          text="Request Loan"
          onPress={() => setIsRequestingLoan(true)}
        />
      </View>
      {/* Loop through transactions */}
      {loans.map(loan => (
        <View key={loan.id} style={styles.cardsWrap}>
          <View style={styles.card}>
            <View style={styles.loanInfoWrap}>
              <View style={styles.nameAmountWrap}>
                <Text style={styles.loanName}>{loan.name}</Text>
                <Text style={styles.loanAmount}>KSH. {loan.amount}</Text>
              </View>
              <Text style={styles.cardText}>
                Interest Rate: {loan.interest_rate}
              </Text>
              <Text style={[styles.cardText, styles.textWarning]}>
                Unpaid: {loan.unpaid}
              </Text>
              <Text style={(styles.cardText, styles.textWarning)}>
                Due Date: {loan.due_date}
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
                { text: 'Repay Loan', onSelect: () => triggerRepayLoan() },
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
        <ViewInstallments />
      </ShambaModal>

      {/* Repay loan Modal */}
      <ShambaModal
        visible={isRepayingLoan}
        title="REPAY LOAN"
        onRequestClose={() => {
          setIsRepayingLoan(false);
        }}>
        <RepayLoanForm />
      </ShambaModal>
    </View>
  );
};

export default Loans;
