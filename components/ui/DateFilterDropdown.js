import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from 'react-navigation';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DropdownMenu from './DropdownMenu';

const DateFilterDropdown = ({ changeCallback }) => {
  const theme = useContext(ThemeContext);
  const styles = StyleSheet.create({
    filterMenuTrigger: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderWidth: 1,
      borderColor: theme.primary,
      borderStyle: 'solid',
      borderRadius: 5,
      flexDirection: 'row',
      backgroundColor: theme.wb_color1,
    },
    filterMenuTriggerIcon: {
      marginLeft: 5,
    },
    menuOptionsContainer: {
      backgroundColor: theme.wb_color1,
      opacity: 0,
    },
    menuOptionsWrapper: {
      backgroundColor: theme.wb_color1,
    },
    menuOptionsText: {
      backgroundColor: theme.wb_color1,
      color: theme.inverted,
    },
  });

  const optionsStyles = {
    optionsContainer: {
      backgroundColor: 'green',
      padding: 5,
    },
    optionsWrapper: {
      backgroundColor: 'white',
    },
    optionWrapper: {
      backgroundColor: 'white',
      margin: 5,
    },
    optionTouchable: {
      underlayColor: 'white',
      activeOpacity: 70,
    },
    optionText: {
      color: 'brown',
    },
  };

  const [dateFilter, setDateFilter] = useState({
    from: '',
    to: '',
    short: '',
  });

  const triggerSetDateFilter = value => {
    let today = new Date();
    switch (value) {
      case 'today':
        let todayDate = today.getDate();
        setDateFilter({
          from: todayDate,
          to: todayDate,
          short: 'Today',
        });
        break;
      case 'yesterday':
        let yesterdayDate = today.getDate() - 1;
        let yesterday = new Date(
          today.getFullYear(),
          today.getMonth(),
          yesterdayDate
        );
        setDateFilter({
          from: yesterday,
          to: today,
          short: 'Yesterday',
        });
        break;
      case 'this_week':
        let thisWeekDate = today.getDate() - 7;
        let thisWeekStart = new Date(
          today.getFullYear(),
          today.getMonth(),
          thisWeekDate
        );
        setDateFilter({
          from: thisWeekStart,
          to: today,
          short: 'This Week',
        });
        break;
      case 'last_week':
        let lastWeekEndDate = today.getDate() - 7;
        let lastWeekEnd = new Date(
          today.getFullYear(),
          today.getMonth(),
          lastWeekEndDate
        );
        let lastWeekStartDate = today.getDate() - 14;
        let lastWeekStart = new Date(
          today.getFullYear(),
          today.getMonth(),
          lastWeekStartDate
        );
        setDateFilter({
          from: lastWeekStart,
          to: lastWeekEnd,
          short: 'Last Week',
        });
        break;
      case 'this_month':
        let thisMonthStartDate = today.getDate() - 30;
        let thisMonthStart = new Date(
          today.getFullYear(),
          today.getMonth(),
          thisMonthStartDate
        );
        setDateFilter({
          from: thisMonthStart,
          to: today,
          short: 'This Month',
        });
        break;
      case 'last_month':
        let lastMonthEndDate = today.getDate() - 30;
        let lastMonthEnd = new Date(
          today.getFullYear(),
          today.getMonth(),
          lastMonthEndDate
        );
        let lastMonthStartDate = today.getDate() - 60;
        let lastMonthStart = new Date(
          today.getFullYear(),
          today.getMonth(),
          lastMonthStartDate
        );
        setDateFilter({
          from: lastMonthStart,
          to: lastMonthEnd,
          short: 'Last Month',
        });
        break;
      case 'this_year':
        let thisYearStartDate = today.getDate() - 365;
        let thisYearStart = new Date(
          today.getFullYear(),
          today.getMonth(),
          thisYearStartDate
        );
        setDateFilter({
          from: thisYearStart,
          to: today,
          short: 'This Year',
        });
        break;
      case 'last_year':
        let lastYearEndDate = today.getDate() - 365;
        let lastYearEnd = new Date(
          today.getFullYear(),
          today.getMonth(),
          lastYearEndDate
        );
        let lastYearStartDate = today.getDate() - 730;
        let lastYearStart = new Date(
          today.getFullYear(),
          today.getMonth(),
          lastYearStartDate
        );
        setDateFilter({
          from: lastYearStart,
          to: lastYearEnd,
          short: 'Last Year',
        });
        break;
      case 'custom':
      default:
        // todo: add date picker
        setDateFilter({
          from: '',
          to: '',
          short: 'custom',
        });
        break;
    }

    changeCallback && changeCallback(dateFilter);
  };

  return (
    <DropdownMenu
      trigger={
        <View style={styles.filterMenuTrigger}>
          {!dateFilter.short && <Text>Filter By Date</Text>}
          {dateFilter.short !== 'custom' && <Text>{dateFilter.short}</Text>}
          {dateFilter.short === 'custom' && (
            <Text>
              {dateFilter.from} - {dateFilter.to}
            </Text>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            style={styles.filterMenuTriggerIcon}
          />
        </View>
      }
      options={[
        { text: 'Today', onSelect: () => triggerSetDateFilter('today') },
        {
          text: 'Yesterday',
          onSelect: () => triggerSetDateFilter('yesterday'),
        },
        {
          text: 'This Week',
          onSelect: () => triggerSetDateFilter('this_week'),
        },
        {
          text: 'Last Week',
          onSelect: () => triggerSetDateFilter('last_week'),
        },
        {
          text: 'This Month',
          onSelect: () => triggerSetDateFilter('this_month'),
        },
        {
          text: 'Last Month',
          onSelect: () => triggerSetDateFilter('last_month'),
        },
        {
          text: 'This Year',
          onSelect: () => triggerSetDateFilter('this_year'),
        },
        {
          text: 'Last Year',
          onSelect: () => triggerSetDateFilter('last_year'),
        },
        { text: 'Custom', onSelect: () => triggerSetDateFilter('custom') },
      ]}
    />
  );
};

export default DateFilterDropdown;
