import React, { useRef } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { ChartJs } from '../../ui/chartjs/ChartJs';

const CropCalendar = ({ navigation }) => {
  const { width } = Dimensions.get('window');

  const styles = StyleSheet.create({
    main: {
      // backgroundColor: theme.wb_color,
      height: 200,
      marginHorizontal: 20,
      marginVertical: 10,
    },
  });

  // chartjs with gradient
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  const chartConfig = {
    type: 'line',
    data: {
      labels: data.map(row => row.year),
      datasets: [
        {
          fill: true,
          label: 'Acquisitions by year',
          data: data.map(row => row.count),
        },
      ],
    },
  };

  const setCropCalendarDataRef = useRef();

  return (
    <View style={styles.main}>
      <ChartJs
          config={chartConfig}
          ref={setCropCalendarDataRef}
          width={width - 40}
          // width={200}
          hexColor={'#47E162'}
        />
    </View>
  );
};

export default CropCalendar;
