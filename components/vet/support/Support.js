import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ShambaButton from '../../ui/ShambaButton';
import Feather from 'react-native-vector-icons/Feather';
import { ThemeContext } from '../../../context/ThemeContext';
import SearchBar from '../../ui/SearchBar';
import DropdownMenu from '../../ui/DropdownMenu';
import DateFilterDropdown from '../../ui/DateFilterDropdown';
import ViewTicket from './ViewTicket';
import ShambaModal from '../../ui/ShambaModal';

const Support = () => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    analyticsBtnWrap: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    filterBar: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
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
      rowGap: 10,
    },
    cardItemRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    alignCenter: {
      alignItems: 'center',
    },
    avatar: {
      width: 30,
      height: 30,
      borderRadius: 30,
    },
    cardUsername: {
      marginLeft: 10,
      color: theme.gray1,
      fontSize: 12,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.gray1,
    },
    description: {
      color: theme.gray1,
      fontSize: 12,
    },
    date: {
      color: theme.gray2,
      fontSize: 12,
    },
    leftColumn: {
      flex: 1,
    },
    rightColumn: {
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    textBlue: {
      color: theme.blue,
    },
    textWarning: {
      color: theme.warning,
    },
    textSuccess: {
      color: theme.primary,
    },
  });

  const [isViewingAnalytics, setIsViewingAnalytics] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [ticketToView, setTicketToView] = useState({});
  const [isViewingTicket, setIsViewingTicket] = useState(false);

  const tickets = [
    {
      id: 1,
      avatar: 'https://picsum.photos/200/300',
      username: 'John Doe',
      title: 'Sick cow',
      description: 'My cow is sick and I need help',
      status: 'open',
      date: '3rd May 2023, 10.10',
    },
    {
      id: 2,
      avatar: 'https://picsum.photos/200/300',
      username: 'John Doe',
      title: 'Sick cow',
      description: 'My cow is sick and I need help',
      status: 'closed',
      date: '3rd May 2023, 10.10',
    },
    {
      id: 3,
      avatar: 'https://picsum.photos/200/300',
      username: 'John Doe',
      title: 'Sick cow',
      description: 'My cow is sick and I need help',
      status: 'in progress',
      date: '3rd May 2023, 10.10',
    },
  ];

  const viewTicket = ticket => {
    setTicketToView(ticket);
    setIsViewingTicket(true);
  };

  return (
    <View>
      <View style={styles.analyticsBtnWrap}>
        <ShambaButton
          btnType="primary"
          size="sm"
          icon={<Feather name="pie-chart" size={20} color={theme.primary} />}
          outline={true}
          onPress={() => setIsViewingAnalytics(true)}
        />
      </View>
      <SearchBar searchCallback={() => console.log('searching...')}>
        <ShambaButton
          materialCommunityIcon="filter-outline"
          onPress={() => setIsFilterVisible(!isFilterVisible)}
        />
        <DropdownMenu
          trigger={<ShambaButton materialCommunityIcon="sort" />}
          options={[
            { text: 'Oldest', onSelect: () => {} },
            { text: 'Newest', onSelect: () => {} },
          ]}
        />
      </SearchBar>
      {isFilterVisible && (
        <View style={styles.filterBar}>
          <DateFilterDropdown changeCallback={() => {}} />
        </View>
      )}

      {tickets.map(ticket => (
        <View key={ticket.id} style={styles.cardsWrap}>
          <View style={styles.card}>
            <View style={styles.leftColumn}>
              <View style={[styles.cardItemRow, styles.alignCenter]}>
                <Image
                  source={require('../../../assets/images/avatar.png')}
                  style={styles.avatar}
                />
                <Text style={styles.cardUsername}>{ticket.username}</Text>
              </View>
              <Text style={styles.title}>{ticket.title}</Text>
              <Text style={styles.description}>{ticket.description}</Text>
            </View>
            <View style={styles.rightColumn}>
              {ticket.status === 'open' && (
                <Text style={styles.textWarning}>{ticket.status}</Text>
              )}
              {ticket.status === 'closed' && (
                <Text style={styles.textSuccess}>{ticket.status}</Text>
              )}
              {ticket.status === 'in progress' && (
                <Text style={styles.textBlue}>{ticket.status}</Text>
              )}
              <ShambaButton
                materialCommunityIcon="chevron-right"
                btnType="primary"
                outline={true}
                size="sm"
                onPress={() => viewTicket(ticket)}
              />
              <Text style={styles.date}>{ticket.date}</Text>
            </View>
          </View>
        </View>
      ))}

      {/* View Ticket Modal */}
      <ShambaModal
        visible={isViewingTicket}
        title="VIEW TICKET"
        onRequestClose={() => {
          setIsViewingTicket(false);
        }}>
        <ViewTicket />
      </ShambaModal>
    </View>
  );
};

export default Support;
