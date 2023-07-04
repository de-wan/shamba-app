import React, { useContext, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { ThemeContext } from '../../../context/ThemeContext';
import { ChartJs } from '../../ui/chartjs/ChartJs';
import { ScrollView } from 'react-native-gesture-handler';
import ShambaButton from '../../ui/ShambaButton';
import { AuthContext } from '../../../context/AuthContext';

const Analytics = () => {
  const theme = useContext(ThemeContext);
  const { width } = Dimensions.get('window');
  const { setRole } = useContext(AuthContext);

  const styles = StyleSheet.create({
    top: {
      backgroundColor: theme.wb_color2,
      height: 100,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 35,
    },
    topContentWrap: {
      flexDirection: 'row',
      height: 50,
      width: '100%',
      alignItems: 'flex-end',
    },
    topImgWrap: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    topImg: {
      height: 50,
      width: 50,
      borderRadius: 25,
    },
    topText: {
      color: theme.gray1,
      marginRight: 20,
      marginBottom: 5,
      fontSize: 24,
    },
    weatherCard: {
      flexDirection: 'row',
      padding: 10,
    },
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
    walletCardValue: {
      color: theme.primary,
    },
    collectionsCardValue: {
      color: theme.warning,
    },
    paymentsCardValue: {
      color: theme.blue,
    },
    savingsCardValue: {
      color: theme.purple,
    },
    weatherCardLeft: {
      padding: 20,
      justifyContent: 'flex-end',
      paddingBottom: 40,
    },
    temperatureWrap: {
      flexDirection: 'row',
      width: '50%',
    },
    temperatureValue: {
      fontSize: 36,
      color: theme.gray1,
    },
    temperatureValueUnitSup: {
      fontSize: 10,
    },
    temperatureValueUnit: {
      fontSize: 36,
      color: theme.gray1,
    },
    weatherLocation: {
      fontSize: 16,
      color: theme.gray1,
    },
    weatherImgWrap: {
      alignItems: 'flex-end',
      width: '50%',
      paddingTop: 20,
    },
    weatherImg: {
      height: 100,
      width: 100,
    },
  });

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

  const weatherInfo = {
    location: 'Nairobi, Kenya',
    temperature: 12,
    units: 'C',
    weather: 'rainy',
  };
  const weatherImages = {
    sunny: () => require('../../../assets/images/weather/sunny.png'),
    cloudy: () => require('../../../assets/images/weather/cloudy.png'),
    rainy: () => require('../../../assets/images/weather/rainy.png'),
  };

  return (
    <ScrollView overScrollMode="never">
      <View style={styles.top}>
        <View style={styles.topContentWrap}>
          <View style={styles.topImgWrap}>
            <Image
              source={require('../../../assets/images/avatar.png')}
              style={styles.topImg}
            />
          </View>
          <View style={styles.topTextWrap}>
            <Text style={styles.topText}>Welcome John Doe</Text>
            <ShambaButton
              text="Go to Agent UI"
              btnType="primary"
              outline={true}
              onPress={() => setRole('agent')}
            />
          </View>
        </View>
      </View>

      <View style={styles.dashCard}>
        <View style={styles.dashCardTopWrap}>
          <Text style={[styles.dashCardValue, styles.collectionsCardValue]}>
            50,000
          </Text>
          <Text style={styles.dashCardLabel}>Total Collections/Harvest</Text>
        </View>
        <ChartJs
          type="line"
          labels={walletChartLabels}
          datasets={walletDataSets}
          options={dashChartOptions}
          ref={setCollectionsDataRef}
          width={width - 40}
          hexColors={['#F4BE37']}
          onChartAdded={onChartAdded}
        />
      </View>

      <View style={[styles.dashCard, styles.weatherCard]}>
        <View style={styles.weatherCardLeft}>
          <View style={styles.temperatureWrap}>
            <Text style={styles.temperatureValue}>
              {weatherInfo.temperature}
            </Text>
            <Text style={styles.temperatureValueUnitSup}>0</Text>
            <Text style={styles.temperatureValueUnit}>{weatherInfo.units}</Text>
          </View>
          <Text style={styles.weatherLocation}>{weatherInfo.location}</Text>
        </View>
        <View style={styles.weatherImgWrap}>
          <Image
            source={weatherImages[weatherInfo.weather]()}
            style={styles.weatherImg}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Analytics;