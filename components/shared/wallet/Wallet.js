import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../context/ThemeContext';
import ShambaButton from '../../ui/ShambaButton';
import Feather from 'react-native-vector-icons/Feather';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Loans from './Loans';
import Savings from './Savings';
import Transactions from './Transactions';
import { Dimensions } from 'react-native';
import ShambaModal from '../../ui/ShambaModal';
import DepositForm from './DepositForm';
import WithdrawForm from './WithdrawForm';
import WalletAnalytics from './WalletAnalytics';

const WalletTabs = () => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.app_bg,
      height: '100%',
    },
  });

  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarScrollEnabled: true,
        headerShown: false,
        activeTintColor: theme.primary,
        tabBarActiveTintColor: theme.primary,
        inactiveTintColor: 'gray',
        tabBarInactiveTintColor: theme.gray3,
        indicatorStyle: { backgroundColor: theme.primary },
      })}
      sceneContainerStyle={styles.container}>
      <Tab.Screen name="Transactions" component={Transactions} />
      <Tab.Screen name="Loans" component={Loans} />
      <Tab.Screen name="Savings" component={Savings} />
    </Tab.Navigator>
  );
};

const Wallet = ({ navigation }) => {
  const theme = useContext(ThemeContext);
  const { height } = Dimensions.get('window');
  const styles = StyleSheet.create({
    main: {
      height: height,
    },
    walletTop: {
      backgroundColor: theme.wb_color,
      paddingBottom: 10,
    },
    walletRow: {
      flexDirection: 'row',
      paddingHorizontal: 10,
    },
    leftTopColumn: {
      flex: 1,
    },
    balanceLabel: {
      color: theme.gray2,
      fontSize: 20,
    },
    balanceValue: {
      fontSize: 27,
      color: theme.primary,
    },
    walletActionsRow: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    walletTabsWrap: {
      flex: 1,
    },
  });

  const [isDepositing, setIsDepositing] = React.useState(false);
  const [isWithdrawing, setIsWithdrawing] = React.useState(false);
  const [isViewingAnalytics, setIsViewingAnalytics] = React.useState(false);

  return (
    <View style={styles.main}>
      <View style={styles.walletTop}>
        <View style={styles.walletRow}>
          <View style={styles.leftTopColumn}>
            <View style={styles.walletBalanceWrap}>
              <Text style={styles.balanceLabel}>Balance</Text>
              <Text style={styles.balanceValue}>KES. 0.00</Text>
            </View>
          </View>
          <View>
            <ShambaButton
              btnType="primary"
              size="sm"
              icon={
                <Feather name="pie-chart" size={20} color={theme.primary} />
              }
              outline={true}
              onPress={() => setIsViewingAnalytics(true)}
            />
          </View>
        </View>
        <View style={styles.walletActionsRow}>
          <ShambaButton text="Deposit" onPress={() => setIsDepositing(true)} />
          <ShambaButton
            text="Withdraw"
            onPress={() => setIsWithdrawing(true)}
          />
        </View>
      </View>
      <View style={styles.walletTabsWrap}>
        <WalletTabs />
      </View>

      {/* Deposit Modal */}
      <ShambaModal
        visible={isDepositing}
        title="DEPOSIT"
        onRequestClose={() => {
          setIsDepositing(false);
        }}>
        <DepositForm />
      </ShambaModal>

      {/* Withdraw Modal */}
      <ShambaModal
        visible={isWithdrawing}
        title="WITHDRAW"
        onRequestClose={() => {
          setIsWithdrawing(false);
        }}>
        <WithdrawForm />
      </ShambaModal>

      {/* Analytics Modal */}
      <ShambaModal
        visible={isViewingAnalytics}
        title="WALLET ANALYTICS"
        onRequestClose={() => {
          setIsViewingAnalytics(false);
        }}>
        <WalletAnalytics />
      </ShambaModal>
    </View>
  );
};

export default Wallet;
