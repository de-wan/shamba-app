import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../../ui/SearchBar';
import ShambaButton from '../../ui/ShambaButton';
import DateFilterDropdown from '../../ui/DateFilterDropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../../../context/ThemeContext';
import ShambaModal from '../../ui/ShambaModal';
import SaveForm from './SaveForm';
import DropdownMenu from '../../ui/DropdownMenu';

const Savings = ({ navigator }) => {
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
  const [isSaving, setIsSaving] = React.useState(false);

  const savings = [
    {
      id: 1,
      name: 'Senior Savings',
      amount: 1000,
      matures_at: '25th Jul, 2023',
      interest_rate: '2%',
    },
  ];

  // const triggerViewInstallments = () => {
  //   setIsViewingInstallments(true);
  // }

  // const triggerRepayLoan = () => {
  //   setIsSaving(true);
  // }

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
        <ShambaButton text="Save" onPress={() => setIsSaving(true)} />
      </View>
      {/* Loop through transactions */}
      {savings.map(loan => (
        <View key={loan.id} style={styles.cardsWrap}>
          <View style={styles.card}>
            <View style={styles.loanInfoWrap}>
              <View style={styles.nameAmountWrap}>
                <Text style={styles.loanName}>{loan.name}</Text>
                <Text style={styles.loanAmount}>KSH. {loan.amount}</Text>
              </View>
              <Text style={styles.cardText}>Matures At: {loan.matures_at}</Text>
              <Text style={styles.cardText}>
                Interest Rate: {loan.interest_rate}
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
                { text: 'Deposit Savings', onSelect: () => {} },
                { text: 'Withdraw Savings', onSelect: () => {} },
                { text: 'Close Saving Account', onSelect: () => {} },
              ]}
            />
          </View>
        </View>
      ))}

      {/* Repay loan Modal */}
      <ShambaModal
        visible={isSaving}
        title="SAVE"
        onRequestClose={() => {
          setIsSaving(false);
        }}>
        <SaveForm />
      </ShambaModal>
    </View>
  );
};

export default Savings;
