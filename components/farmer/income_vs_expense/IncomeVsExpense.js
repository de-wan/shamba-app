import React, { useContext, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { ChartJs } from '../../ui/chartjs/ChartJs';
import { ThemeContext } from '../../../context/ThemeContext';

const IncomeVsExpense = () => {
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
      color: '#47E162',
    },
    loanCardValue: {
      color: '#F4BE37',
    },
  });

  // chartjs with gradient
  const incomeData = [
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

  const expenseData = [
    { month: 'Jan', count: 20 },
    { month: 'Feb', count: 10 },
    { month: 'Mar', count: 32 },
    { month: 'Apr', count: 23 },
    { month: 'May', count: 12 },
    { month: 'Jun', count: 13 },
    { month: 'Jul', count: 17 },
    { month: 'Aug', count: 10 },
    { month: 'Sep', count: 16 },
    { month: 'Oct', count: 17 },
    { month: 'Nov', count: 25 },
    { month: 'Dec', count: 20 },
  ];

  const chartLabels = incomeData.map(row => row.month);
  const incomeVsExpenseDataSets = [
    {
      label: 'Income',
      data: incomeData.map(row => row.count),
      fill: true,
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 2,
    },
    {
      label: 'Expense',
      data: expenseData.map(row => row.count),
      fill: true,
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 2,
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
        title: {
          color: theme.gray3,
        },
      },
    },
  };

  const setWalletDataRef = useRef();

  return (
    <ScrollView overScrollMode="never">
      <View style={styles.dashCard}>
        <View style={styles.dashCardTopWrap}>
          <Text style={styles.dashCardLabel}>Income Vs Expense</Text>
        </View>
        <ChartJs
          type="line"
          labels={chartLabels}
          datasets={incomeVsExpenseDataSets}
          options={walletChartOptions}
          ref={setWalletDataRef}
          gradientHeight={220}
          height={140}
          width={width - 40}
          hexColors={[theme.primary, theme.danger]}
        />
      </View>
    </ScrollView>
  );
};

export default IncomeVsExpense;
