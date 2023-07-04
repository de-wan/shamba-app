import React, { useContext, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../../ui/SearchBar';
import ShambaButton from '../../ui/ShambaButton';
import DropdownMenu from '../../ui/DropdownMenu';
import { ThemeContext } from '../../../context/ThemeContext';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import DateFilterDropdown from '../../ui/DateFilterDropdown';

const Notifications = () => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    filterBar: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
    },
    actionsBar: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 5,
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
      gap: 10,
    },
    cardItemRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    cardAction: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
    },
    justifyBetween: {
      justifyContent: 'space-between',
    },
    unreadIndicatorText: {
      color: theme.blue,
      fontSize: 12,
    },
    readIndicator: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: theme.primary,
      marginLeft: 10,
    },
    readIndicatorText: {
      color: theme.primary,
      fontSize: 12,
    },
    notfTitle: {
      color: theme.gray1,
      fontSize: 18,
    },
    notfBody: {
      color: theme.gray1,
      fontSize: 15,
      padding: 5,
    },
    notfDate: {
      color: theme.gray1,
      fontSize: 12,
      width: '100%',
      textAlign: 'right',
    },
    viewNotfWrap: {
      padding: 10,
    },
    viewNotfTitle: {
      color: theme.gray1,
      fontSize: 18,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    viewNotfBody: {
      color: theme.gray1,
      fontSize: 15,
      marginBottom: 10,
    },
    viewNotfDate: {
      color: theme.gray1,
      fontSize: 12,
      width: '100%',
      textAlign: 'right',
    },
  });

  const [isFilterVisible, setIsFilterVisible] = React.useState(false);
  const [notificationToView, setNotificationToView] = React.useState({
    title: '',
    body: '',
    date: '',
  });
  const bottomSheetRef = useRef(null);
  const bottomSheetSnapPoints = useMemo(() => ['25%', '50%'], []);

  const notifications = [
    {
      id: 1,
      title: 'Disease Alert',
      body: 'A disease has been reported in your area',
      status: 'unread',
      date: '3rd Jul 2023, 10.10',
    },
    {
      id: 2,
      title: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque distinctio iste cumque impedit quisquam numquam quod ut. Corporis quisquam ratione ducimus delectus est, dolorem recusandae. Expedita ipsum quis mollitia ipsam et aut ad inventore cupiditate deserunt sunt modi tenetur neque nisi, laudantium voluptas eum quisquam, unde quidem doloremque, possimus at! Consequuntur nihil aut nulla hic vel dolorum assumenda! Illo deleniti laborum, laudantium doloremque sapiente earum, cumque cupiditate rem totam aperiam quo excepturi saepe et consequuntur! Non, sint quibusdam enim a quaerat tempore consequatur expedita ipsum dolorem? Voluptatibus quis tempore quam non aperiam maxime nam voluptas reiciendis saepe! Nostrum, asperiores omnis.',
      status: 'read',
      date: '3rd Jul 2023, 10.10',
    },
    {
      id: 3,
      title: 'Disease Alert',
      body: 'A disease has been reported in your area',
      status: 'unread',
      date: '3rd Jul 2023, 10.10',
    },
    {
      id: 4,
      title: 'Disease Alert',
      body: 'A disease has been reported in your area',
      status: 'read',
      date: '3rd Jul 2023, 10.10',
    },
    {
      id: 5,
      title: 'Disease Alert',
      body: 'A disease has been reported in your area',
      status: 'unread',
      date: '3rd Jul 2023, 10.10',
    },
  ];

  const viewNotification = notification => {
    setNotificationToView(notification);
    bottomSheetRef.current?.snapToIndex(0);
  };

  return (
    <View style={styles.container}>
      <SearchBar searchCallback={() => console.log('searching...')}>
        <ShambaButton
          materialCommunityIcon="filter-outline"
          onPress={() => setIsFilterVisible(!isFilterVisible)}
        />
        <DropdownMenu
          trigger={<ShambaButton materialCommunityIcon="sort" />}
          options={[
            { text: 'Oldest', onSelect: () => { } },
            { text: 'Newest', onSelect: () => { } },
          ]}
        />
      </SearchBar>
      {isFilterVisible && (
        <View style={styles.filterBar}>
          <DateFilterDropdown changeCallback={() => { }} />
        </View>
      )}
      <View style={styles.actionsBar}>
        <ShambaButton
          text="Mark all as read"
        />

      </View>
      {notifications.map(notification => (
        <View key={notification.id} style={styles.cardsWrap}>
          <View style={styles.card}>
            <View>
              <View style={[styles.cardItemRow, styles.justifyBetween]}>
                <Text style={styles.notfTitle}>{notification.title}</Text>
                {notification.status === 'unread' ? (
                  <Text style={styles.unreadIndicatorText}>New</Text>
                ) : (
                  <Text style={styles.readIndicatorText}>Read</Text>
                )}
              </View>
              <Text style={styles.notfBody} numberOfLines={1}>
                {notification.body}
              </Text>
              <Text style={styles.notfDate}>{notification.date}</Text>
            </View>
            <View style={styles.cardAction}>
              <ShambaButton
                materialCommunityIcon="chevron-right"
                btnType="primary"
                outline={true}
                size="sm"
                onPress={() => viewNotification(notification)}
              />
            </View>
          </View>
        </View>
      ))}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={bottomSheetSnapPoints}>
        <View style={styles.viewNotfWrap}>
          <Text style={styles.viewNotfDate}>{notificationToView.date}</Text>
          <Text style={styles.viewNotfTitle}>{notificationToView.title}</Text>
          <Text style={styles.viewNotfBody}>
            {notificationToView.body}
          </Text>
          <ShambaButton btnType="primary" outline={true} text="Close" onPress={() => bottomSheetRef.current?.close()} />
        </View>
      </BottomSheet>
    </View>
  );
};

export default Notifications;
