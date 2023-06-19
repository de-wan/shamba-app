import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import SelectDropdown from 'react-native-select-dropdown';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Divider } from 'react-native-paper';
import { BarChart, LineChart, PieChart } from 'react-native-chart-kit';
// import { ChartAnalyticsCard, MaleVsFemalePie } from './charts';
import VetSchedule from '../../ui/VetSchedule';
// import { MaleVsFemalePie } from './charts';

const Analytics = () => {
  const [fromDate, setFromDate] = useState(new Date(1598051730000));
  const [toDate, setToDate] = useState(new Date(1598051730000));

  const [isSettingFromDate, setIsSettingFromDate] = useState(false);
  const [isSettingToDate, setIsSettingToDate] = useState(false);

  const onFromChanged = (event, selectedDate) => {
    const currentDate = selectedDate || fromDate;
    setFromDate(currentDate);
  };

  const onToChanged = (event, selectedDate) => {
    const currentDate = selectedDate || toDate;
    setToDate(currentDate);
  };

  // const showFromDatePicker = () => {
  //   DateTimePicker.open({
  //     value: new Date(),
  //     onChanged: onFromChanged,
  //     mode: 'date',
  //   });
  // };

  // const showToDatePicker = () => {
  //   DateTimePicker.open({
  //     value: new Date(),
  //     onChanged: onToChanged,
  //     mode: 'date',
  //   });
  // };
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.subContainer}>
          {/* Spinner to select today, yesterday, this week, last week, this month, last month, this year, last year, custom */}
          <SelectDropdown
            dropdownIconPosition="left"
            searchPlaceHolder="Select Analysis Mode"
            data={[
              'Today',
              'Yesterday',
              'This Week',
              'Last Week',
              'This Month',
              'Last Month',
              'This Year',
              'Last Year',
              'Custom',
            ]}
          />
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff', padding: 3, borderRadius: 5, borderWidth: 1, marginHorizontal: 2 }}>
              <Text>From:</Text>
              <TouchableOpacity onPress={() => setIsSettingFromDate(true)}>
                <Text>{fromDate.toDateString()}</Text>
              </TouchableOpacity>
              {/* <DateTimePicker /> */}
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff', padding: 3, borderRadius: 5, borderWidth: 1, marginHorizontal: 2 }}>
              <Text>To:</Text>
              <TouchableOpacity onPress={() => setIsSettingFromDate(true)}>
                <Text>{fromDate.toDateString()}</Text>
              </TouchableOpacity>
              {/* <DateTimePicker /> */}
              {isSettingFromDate && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={fromDate}
                  mode="date"
                  is24Hour={true}
                  onChange={onFromChanged}
                />
              )}
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Gender</Text>
            <Text style={styles.cardSubtitle}>Male Vs Female</Text>
            <Divider />
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <View style={{ flexDirection: 'column' }}>
                <MaleVsFemalePie />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <ChartAnalyticsCard
                    title="Male"
                    value="400"
                    color="#006587"
                  />
                  <ChartAnalyticsCard
                    title="Female"
                    value="500"
                    color="#FFA500"
                  />
                </View>
              </View>
              <View>
                <ChartAnalyticsCard title="All" value="900" />
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Farmers Vs Livestock</Text>
            <Divider />
            <FarmersVsLivestockLine />
            <View style={{ flexDirection: 'row' }}>
              <ChartAnalyticsCard title="Farmers" value="400" color="#37F4D2" />
              <ChartAnalyticsCard
                title="Livestock"
                value="500"
                color="#FFA500"
              />
            </View>
          </View>

          <View style={styles.card}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 3 }}>
              <Text style={styles.cardTitle}>Vet Schedules</Text>
              {/* Outline button */}
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: '#13C232',
                  borderRadius: 10,
                  padding: 5,
                }}>
                <Text style={{ color: '#13C232' }}>View All</Text>
              </TouchableOpacity>
            </View>
            <Divider />
            <VetSchedule />
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Total Sales</Text>
            <Divider />
            <TotalSalesBar />
            <ChartAnalyticsCard
              title="Total Sales"
              value="500"
              color="#5388D8"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Analytics;
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  subContainer: {
    width: width,
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    marginVertical: 10,
    backgroundColor: '#fff',
    width: '90%',
    padding: 5,
    borderRadius: 10,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
});

const FarmersVsLivestockLine = () => {
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 0.5,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: true, // optional
  };

  const farmersVsLivestockData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 60, 30, 45, 38, 72, 40],
        color: () => '#37F4D2',
      },
      {
        data: [30, 90, 43, 45, 50, 70, 80, 30, 89, 50, 65, 68],
        color: () => '#FFA500',
      },
    ],
  };

  return (
    <LineChart
      width={width - 40}
      height={220}
      data={farmersVsLivestockData}
      yAxisSuffix={'k l'}
      chartConfig={chartConfig}
      bezier
    />
  );
};

const TotalSalesBar = () => {
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(83, 136, 216, ${opacity})`,
    // collectionColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    // strokeWidth: 2, // optional, default 3
    // barPercentage: 0.5,
    // useShadowColorFromDataset: true, // optional
  };

  const totalSalesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(83, 136, 216, ${opacity})`,
      },
    ],
  };

  return (
    <BarChart
      width={width - 60}
      height={220}
      data={totalSalesData}
      yAxisSuffix={'k l'}
      chartConfig={chartConfig}
    />
  );
};

const ChartAnalyticsCard = ({ title, value, color }) => {
  return (
    <View>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <View>
          {color ? (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: color,
                margin: 5,
              }}
            />
          ) : null}
        </View>
        <View>
          <Text style={{fontSize: 12}}>{title}</Text>
          <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold' }}>
            {value}
          </Text>
        </View>
      </View>
    </View>
  );
};

const MaleVsFemalePie = () => {
  const chartConfig = {
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 0.1,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 0.1,
    color: () => '#3CB371',
    collectionColor: () => '#90ee91',
  };

  const pieData = [
    {
      name: 'Males',
      value: 400,
      color: '#006587',
    },
    {
      name: 'Females',
      value: 500,
      color: '#FFA500',
    },
  ];

  return (
    <PieChart
      data={pieData}
      width={200}
      chartConfig={chartConfig}
      accessor={'value'}
      paddingLeft={'15'}
      center={[0, 0]}
      absolute
      hasLegend={false}
    />
  );
};
