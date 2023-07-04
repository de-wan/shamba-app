import React, { useContext, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { ChartJs } from '../../ui/chartjs/ChartJs';
import { ThemeContext } from '../../../context/ThemeContext';

const WalletAnalytics = () => {
  const theme = useContext(ThemeContext);
  const { width } = Dimensions.get('window');
  const styles = StyleSheet.create({
    dashCard: {
      backgroundColor: theme.wb_color1,
      height: 300,
      marginHorizontal: 20,
      marginVertical: 10,
    },
    loanVsIncomeCard: {
      height: 370,
    },
    dashCardTopWrap: {
      margin: 10,
    },
    dashCardValue: {
      fontSize: 24,
    },
    dashCardLabel: {
      fontSize: 20,
      color: theme.gray1,
    },
    walletCardValue: {
      color: theme.primary,
    },
    loanCardValue: {
      color: theme.warning,
    },
  });

  // chartjs with gradient
  const data = [
    { month: 'Jan', count: 10 },
    { month: 'Feb', count: 20 },
    { month: 'Mar', count: 15 },
    { month: 'Apr', count: 25 },
    { month: 'May', count: 22 },
    { month: 'Jun', count: 30 },
    { month: 'Jul', count: 28 },
    { month: 'Aug', count: 25 },
    { month: 'Sep', count: 20 },
    { month: 'Oct', count: 22 },
    { month: 'Nov', count: 19 },
    { month: 'Dec', count: 24 },
  ];

  const walletChartLabels = data.map(row => row.month);
  const walletDataSets = [
    {
      data: data.map(row => row.count),
      fill: true,
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 2,
    },
  ];

  const loanVsIncomeDataSets = [
    {
      data: [50, 100],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
    },
  ];

  const walletChartOptions = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: theme.gray3,
        },
      },
      y: {
        ticks: {
          color: theme.gray3,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const setWalletDataRef = useRef();
  const setLoanVsIncomeDataRef = useRef();

  return (
    <ScrollView overScrollMode="never">
      <View style={styles.dashCard}>
        <View style={styles.dashCardTopWrap}>
          <Text style={[styles.dashCardValue, styles.walletCardValue]}>
            KES. 50,000
          </Text>
          <Text style={styles.dashCardLabel}>Wallet Balance</Text>
        </View>
        <ChartJs
          type="line"
          labels={walletChartLabels}
          datasets={walletDataSets}
          options={walletChartOptions}
          ref={setWalletDataRef}
          gradientHeight={220}
          height={140}
          width={width - 40}
          hexColors={[theme.primary]}
        />
      </View>
      <View style={styles.dashCard}>
        <View style={styles.dashCardTopWrap}>
          <Text style={[styles.dashCardValue, styles.loanCardValue]}>
            KES. 50,000
          </Text>
          <Text style={styles.dashCardLabel}>Loan</Text>
        </View>
        <ChartJs
          type="line"
          labels={walletChartLabels}
          datasets={walletDataSets}
          options={walletChartOptions}
          ref={setWalletDataRef}
          gradientHeight={220}
          height={140}
          width={width - 40}
          hexColors={['#F4BE37']}
        />
      </View>

      <View style={[styles.dashCard, styles.loanVsIncomeCard]}>
        <View style={styles.dashCardTopWrap}>
          <Text style={styles.dashCardLabel}>Loan vs Income</Text>
        </View>
        <ChartJs
          type="doughnut"
          labels={['Loan', 'Income']}
          datasets={loanVsIncomeDataSets}
          options={walletChartOptions}
          ref={setLoanVsIncomeDataRef}
          height={50}
          width={50}
          hexColors={['#F4BE37']}
        />
      </View>
    </ScrollView>
  );
};

export default WalletAnalytics;
