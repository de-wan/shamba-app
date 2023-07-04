import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../../ui/SearchBar';
import ShambaButton from '../../ui/ShambaButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../../../context/ThemeContext';
import DateFilterDropdown from '../../ui/DateFilterDropdown';
import ShambaModal from '../../ui/ShambaModal';
import BookVetForm from './BookVetForm';
import ViewCalendar from './ViewCalendar';
import DropdownMenu from '../../ui/DropdownMenu';

const VetNExtension = ({ navigation }) => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
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
    filterMenuTrigger: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderWidth: 1,
      borderColor: theme.primary,
      borderStyle: 'solid',
      borderRadius: 5,
      flexDirection: 'row',
    },
    filterMenuTriggerIcon: {
      marginLeft: 5,
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
    cardItemRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardColumn: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginHorizontal: 5,
    },
    cardTitle: {
      color: theme.gray1,
      fontSize: 20,
    },
    cardSubtitle: {
      color: theme.gray3,
      fontSize: 13,
    },
    diseaseInfo: {
      fontSize: 10,
      color: theme.gray1,
    },
    primaryText: {
      color: theme.primary,
    },
    whiteText: {
      color: theme.wb_color,
    },
    statusWrap: {
      padding: 3,
      borderRadius: 5,
    },
    pendingStatusWrap: {
      backgroundColor: theme.warning,
    },
    completedStatusWrap: {
      backgroundColor: theme.primary,
    },
    cancelledStatusWrap: {
      backgroundColor: theme.danger,
    },
  });

  const getStatusWrapStyle = status => {
    switch (status) {
      case 'Pending':
        return styles.pendingStatusWrap;
      case 'Completed':
        return styles.completedStatusWrap;
      case 'Cancelled':
        return styles.cancelledStatusWrap;
      default:
        return styles.pendingStatusWrap;
    }
  };

  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [isViewingCalendar, setIsViewingCalendar] = useState(false);
  const [isBookingVet, setIsBookingVet] = useState(false);

  const bookings = [
    {
      id: 1,
      vet: 'John Doe',
      disease: 'Bovine Pleuropneumonia',
      status: 'Pending',
      from_datetime: '5th May, 9:31',
      to_datetime: '5th May, 10:31',
    },
    {
      id: 2,
      vet: 'John Doe',
      disease: 'Bovine Pleuropneumonia',
      status: 'Completed',
      from_datetime: '5th May, 9:31',
      to_datetime: '5th May, 10:31',
    },
    {
      id: 3,
      vet: 'John Doe',
      disease: 'Bovine Pleuropneumonia',
      status: 'Cancelled',
      from_datetime: '5th May, 9:31',
      to_datetime: '5th May, 10:31',
    },
  ];

  const reschedule = booking => {
    console.log('Reschedule booking', booking);
  };

  const viewOnCalendar = booking => {
    console.log('View on calendar', booking);
  };

  const cancel = booking => {
    console.log('Cancel booking', booking);
  };

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
            { text: 'Largest Price', onSelect: () => {} },
          ]}
        />
      </SearchBar>
      {isFilterVisible && (
        <View style={styles.filterBar}>
          <DateFilterDropdown changeCallback={() => {}} />
        </View>
      )}
      <View style={styles.actionsBar}>
        <ShambaButton
          text="Calendar"
          onPress={() => setIsViewingCalendar(true)}
        />
        <ShambaButton text="Book Vet" onPress={() => setIsBookingVet(true)} />
      </View>

      {/* Loop through sales */}
      {bookings.map(booking => (
        <View key={booking.id} style={styles.cardsWrap}>
          <View style={styles.card}>
            <View style={styles.cardColumn}>
              <Text style={styles.cardTitle}>{booking.vet}</Text>
              <Text style={styles.diseaseInfo}>Disease: {booking.disease}</Text>
              <View
                style={[styles.statusWrap, getStatusWrapStyle(booking.status)]}>
                <Text style={styles.whiteText}>{booking.status}</Text>
              </View>
            </View>
            <View style={styles.cardColumn}>
              <Text style={styles.cardSubtitle}>
                Start: {booking.from_datetime}
              </Text>
              <Text style={styles.cardSubtitle}>
                End: {booking.to_datetime}
              </Text>
            </View>
            <View style={styles.cardColumn}>
              <DropdownMenu
                triggerContainerStyle={[styles.btn, styles.btnOptions]}
                trigger={
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={30}
                    color={theme.gray1}
                  />
                }
                options={[
                  {
                    text: 'Reschedule Booking',
                    onSelect: () => reschedule(booking),
                  },
                  {
                    text: 'View On Calendar',
                    onSelect: () => viewOnCalendar(booking),
                  },
                  { text: 'Cancel Booking', onSelect: () => cancel(booking) },
                ]}
              />
            </View>
          </View>
        </View>
      ))}

      {/* Viewing Payments Modal */}
      <ShambaModal
        visible={isBookingVet}
        title="BOOK VET"
        onRequestClose={() => {
          setIsBookingVet(false);
        }}>
        <BookVetForm />
      </ShambaModal>

      {/* Viewing Calendar Modal */}
      <ShambaModal
        visible={isViewingCalendar}
        title={'BOOKINGS CALENDAR'}
        onRequestClose={() => {
          setIsViewingCalendar(false);
        }}>
        <ViewCalendar />
      </ShambaModal>
    </View>
  );
};

export default VetNExtension;
