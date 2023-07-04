import React, { useContext, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { ThemeContext } from '../../../context/ThemeContext';
import { ChartJs } from '../../ui/chartjs/ChartJs';
import { ScrollView } from 'react-native-gesture-handler';

const Analytics = () => {
  const theme = useContext(ThemeContext);
  const { width } = Dimensions.get('window');

  const styles = StyleSheet.create({
    dashCard: {
      backgroundColor: theme.wb_color1,
      height: 200,
      marginHorizontal: 20,
      marginVertical: 10,
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
    appointmentsCardValue: {
      color: theme.primary,
    },
    farmersCardValue: {
      color: theme.purple,
    },
  });

  const setWalletDataRef = useRef();
  const setCollectionsDataRef = useRef();

  /* const walletChartConfig = {
    type: 'line',
    data: {
      datasets: [
        {
          label: 'Wallet Balance',
          data: [10, 20, 30],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              suggestedMin: 0,
              suggestedMax: 100000,
              stepSize: 10000,
              callback: function (value, index, values) {
                return 'KES. ' + value;
              },
            },
          },
        ],
      },
    },
  }; */

  const dashChartOptions = {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  const walletChartLabels = data.map(row => row.year);
  const walletDataSets = [
    {
      data: data.map(row => row.count),
      fill: true,
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 4,
    },
  ];

  // const chartConfig = {
  //   type: 'line',
  //   data: {
  //     labels: data.map(row => row.year),
  //     datasets: [
  //       {
  //         fill: true,
  //         label: 'Acquisitions by year',
  //         data: data.map(row => row.count),
  //       },
  //     ],
  //   },
  // };

  const onChartAdded = () => {
    // const walletDataSets = [
    //   {
    //     data: [10, 20, 30],
    //   },
    // ];
    // setWalletDataRef.current.setData(walletDataSets);
  };

  return (
    <ScrollView overScrollMode="never">
      <View style={styles.dashCard}>
        <View style={styles.dashCardTopWrap}>
          <Text style={[styles.dashCardValue, styles.appointmentsCardValue]}>30</Text>
          <Text style={styles.dashCardLabel}>Complete Appointments</Text>
        </View>
        <ChartJs
          type="line"
          labels={walletChartLabels}
          datasets={walletDataSets}
          options={dashChartOptions}
          ref={setWalletDataRef}
          width={width - 40}
          hexColors={['#47E162']}
          onChartAdded={onChartAdded}
        />
      </View>

      <View style={styles.dashCard}>
        <View style={styles.dashCardTopWrap}>
          <Text style={[styles.dashCardValue, styles.farmersCardValue]}>
            500
          </Text>
          <Text style={styles.dashCardLabel}>Total Farmers</Text>
        </View>
        <ChartJs
          type="line"
          labels={walletChartLabels}
          datasets={walletDataSets}
          options={dashChartOptions}
          ref={setCollectionsDataRef}
          width={width - 40}
          hexColors={['#7E30FC']}
          onChartAdded={onChartAdded}
        />
      </View>
    </ScrollView>
  );
};

export default Analytics;
