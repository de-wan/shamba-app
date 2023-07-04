import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import SearchBar from '../../ui/SearchBar';
import ShambaButton from '../../ui/ShambaButton';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../../../context/ThemeContext';
import DateFilterDropdown from '../../ui/DateFilterDropdown';
import ShambaModal from '../../ui/ShambaModal';
// import BookVetForm from './BookVetForm';
// import ViewCalendar from './ViewCalendar';
import DropdownMenu from '../../ui/DropdownMenu';
import FarmerInfo from './FarmerInfo';
import RescheduleForm from './RescheduleForm';
import ScheduleFollowUpForm from './ScheduleFollowUpForm';
import Analytics from './Analytics';

const Bookings = ({ navigation }) => {
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
  const [isViewingAnalytics, setIsViewingAnalytics] = useState(false);

  const [isViewingFarmerInfo, setIsViewingFarmerInfo] = useState(false);
  const [isRescheduling, setIsRescheduling] = useState(false);
  const [isViewingCalendar, setIsViewingCalendar] = useState(false);
  const [isSchedulingFollowUp, setIsSchedulingFollowUp] = useState(false);
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

  const viewFarmerInfo = booking => {
    console.log('View farmer info', booking);
    setIsViewingFarmerInfo(true);
  };

  const reschedule = booking => {
    console.log('Reschedule booking', booking);
    setIsRescheduling(true);
  };

  const viewOnCalendar = booking => {
    console.log('View on calendar', booking);
    setIsViewingCalendar(true);
  };

  const scheduleFollowUp = booking => {
    console.log('Schedule follow up', booking);
    setIsSchedulingFollowUp(true);
  };

  const approve = booking => {
    console.log('Approve booking', booking);
    Alert.alert(
      'Approve Booking',
      'Are you sure you want to approve this booking?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel approve booking'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK approve booking') },
      ],
      { cancelable: false }
    );
  };

  const reject = booking => {
    console.log('Reject booking', booking);
    Alert.alert(
      'Reject Booking',
      'Are you sure you want to reject this booking?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel reject booking'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK reject booking') },
      ],
      { cancelable: false }
    );
  };

  const markAsComplete = booking => {
    console.log('Mark as complete', booking);
    Alert.alert(
      'Mark as Complete',
      'Are you sure you want to mark this booking as complete?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel mark as complete'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK mark as complete') },
      ],
      { cancelable: false }
    );
  };

  const cancel = booking => {
    console.log('Cancel booking', booking);
    Alert.alert(
      'Cancel Booking',
      'Are you sure you want to cancel this booking?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel cancel booking'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK cancel booking') },
      ],
      { cancelable: false }
    );
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
            { text: 'Latest', onSelect: () => { } },
            { text: 'Largest Price', onSelect: () => { } },
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
          text="Calendar"
          onPress={() => setIsViewingCalendar(true)}
        />
        <ShambaButton
          btnType="primary"
          icon={<Feather name="pie-chart" size={20} color={theme.wb_color} />}
          text=" Analytics"
          onPress={() => setIsViewingAnalytics(true)}
        />
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
                    text: 'View Farmer Info',
                    onSelect: () => viewFarmerInfo(booking),
                  },
                  {
                    text: 'Reschedule Booking',
                    onSelect: () => reschedule(booking),
                  },
                  {
                    text: 'View On Calendar',
                    onSelect: () => viewOnCalendar(booking),
                  },
                  {
                    text: 'Schedule Follow Up',
                    onSelect: () => scheduleFollowUp(booking),
                  },
                  {
                    text: 'Approve Booking',
                    onSelect: () => approve(booking),
                  },
                  {
                    text: 'Reject Booking',
                    onSelect: () => reject(booking),
                  },
                  {
                    text: 'Mark as Complete',
                    onSelect: () => markAsComplete(booking),
                  },
                  { text: 'Cancel Booking', onSelect: () => cancel(booking) },
                ]}
              />
            </View>
          </View>
        </View>
      ))}

      {/* Viewing Farmer Info Modal */}
      <ShambaModal
        visible={isViewingFarmerInfo}
        title="FARMER INFO"
        onRequestClose={() => {
          setIsViewingFarmerInfo(false);
        }}>
        <FarmerInfo />
      </ShambaModal>

      {/* Reschedule Booking Modal */}
      <ShambaModal
        visible={isRescheduling}
        title="RESCHEDULE"
        onRequestClose={() => {
          setIsRescheduling(false);
        }}>
        <RescheduleForm />
      </ShambaModal>

      {/* Viewing Calendar Modal */}
      <ShambaModal
        visible={isViewingCalendar}
        title={'BOOKINGS CALENDAR'}
        onRequestClose={() => {
          setIsViewingCalendar(false);
        }}>
        {/* <ViewCalendar /> */}
      </ShambaModal>

      {/* Scheduling Follow up Modal */}
      <ShambaModal
        visible={isSchedulingFollowUp}
        title="SCHEDULE FOLLOW UP"
        onRequestClose={() => {
          setIsSchedulingFollowUp(false);
        }}>
        <ScheduleFollowUpForm />
      </ShambaModal>
      
      {/* Analytics Modal */}
      <ShambaModal
        visible={isViewingAnalytics}
        title="ANALYTICS"
        onRequestClose={() => {
          setIsViewingAnalytics(false);
        }}>
        <Analytics />
      </ShambaModal>
    </View>
  );
};

export default Bookings;
