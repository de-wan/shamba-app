import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import ShambaButton from '../../ui/ShambaButton';
import DropdownMenu from '../../ui/DropdownMenu';
import SearchBar from '../../ui/SearchBar';
import { ThemeContext } from '../../../context/ThemeContext';
import { Divider } from '@react-native-material/core';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ShambaInput from '../../ui/ShambaInput';

const ViewTicket = () => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    infoWrapRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    infoWrap: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    topicWrap: {
      borderWidth: 1,
      borderColor: theme.primary,
      padding: 3,
      borderRadius: 5,
      marginLeft: 5,
    },
    topicLabel: {
      color: theme.gray1,
    },
    topicText: {
      color: theme.primary,
    },
    urgencyWrap: {
      borderWidth: 1,
      borderColor: theme.blue,
      padding: 3,
      borderRadius: 5,
      marginLeft: 5,
    },
    urgencyLabel: {
      color: theme.gray1,
    },
    urgencyText: {
      color: theme.blue,
    },
    statusWrap: {
      padding: 3,
      borderRadius: 5,
    },
    openStatusWrap: {
      backgroundColor: theme.primary,
    },
    statusText: {
      color: theme.wb_color1,
    },
    responsesRow: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    responseWrap: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    responseCount: {
      color: theme.primary,
      marginRight: 5,
      fontSize: 14,
    },
    responseLabel: {
      color: theme.gray1,
      fontSize: 14,
    },
    ticketContainer: {
      paddingHorizontal: 10,
    },
    ticketTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.gray1,
      paddingHorizontal: 20,
    },
    ticketPostedOn: {
      color: theme.gray1,
      paddingHorizontal: 20,
      fontSize: 14,
    },
    ticketContent: {
      color: theme.gray1,
      fontSize: 12,
    },
    responseCard: {
      padding: 10,
    },
    responseDivider: {
      marginVertical: 10,
    },
    cardRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    responseMovesWrap: {
      paddingVertical: 10,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    responseVotes: {
      color: theme.gray1,
      fontWeight: 'bold',
      margin: 3,
    },
    responseAvatar: {
      width: 30,
      height: 30,
      borderRadius: 30,
    },
    responseUsername: {
      marginLeft: 10,
      color: theme.gray1,
      fontSize: 12,
      flex: 1,
    },
    responseDate: {
      color: theme.gray2,
      fontSize: 12,
    },
    responseContentWrap: {
      padding: 5,
    },
    respondActionWrap: {
      marginVertical: 25,
    },
  });

  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const status = 'Open';

  const responses = [
    {
      id: 1,
      username: 'John Doe',
      avatar: 'https://picsum.photos/200',
      response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      postedOn: '1st Jan 2021',
      isSolution: false,
    },
    {
      id: 2,
      username: 'John Doe',
      avatar: 'https://picsum.photos/200',
      response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      postedOn: '1st Jan 2021',
      isSolution: false,
    },
  ];

  return (
    <ScrollView>
      <SearchBar searchCallback={() => console.log('searching...')}>
        <ShambaButton
          materialCommunityIcon="filter-outline"
          onPress={() => setIsFilterVisible(!isFilterVisible)}
        />
        <DropdownMenu
          trigger={<ShambaButton materialCommunityIcon="sort" />}
          options={[
            { text: 'Top', onSelect: () => { } },
            { text: 'Newest', onSelect: () => { } },
            { text: 'Newest', onSelect: () => { } },
          ]}
        />
      </SearchBar>
      <View style={styles.infoWrapRow}>
        <View style={styles.infoWrap}>
          <Text style={styles.topicLabel}>Topic: </Text>
          <View style={styles.topicWrap}>
            <Text style={styles.topicText}>Health</Text>
          </View>
        </View>
        <View>
          <DropdownMenu
            trigger={
              <ShambaButton materialCommunityIcon="dots-vertical" size="sm" />
            }
            options={[
              { text: 'Top', onSelect: () => { } },
              { text: 'Newest', onSelect: () => { } },
              { text: 'Newest', onSelect: () => { } },
            ]}
          />
        </View>
      </View>
      <View style={styles.infoWrapRow}>
        <View style={styles.infoWrap}>
          <Text style={styles.urgencyLabel}>Urgency: </Text>
          <View style={styles.urgencyWrap}>
            <Text style={styles.urgencyText}>Normal</Text>
          </View>
        </View>
        <View>
          {status === 'Open' && (
            <View style={[styles.statusWrap, styles.openStatusWrap]}>
              <Text style={styles.statusText}>Open</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.responsesRow}>
        <View style={styles.responseWrap}>
          <Text style={styles.responseCount}>5</Text>
          <Text style={styles.responseLabel}>Responses</Text>
        </View>
      </View>
      <View style={styles.ticketContainer}>
        <Text style={styles.ticketTitle}>Lorem, ipsum dolor.</Text>
        <Text style={styles.ticketPostedOn}>Posted on 1st May 2023, 10.10</Text>
        <Divider color={theme.primary} />
        <Text style={styles.ticketContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          excepturi sit perferendis reprehenderit ipsa expedita consectetur
          fugiat itaque, est vitae alias animi? Tenetur, similique voluptas.
          Exercitationem nulla impedit sunt quidem, eveniet veniam, odio
          suscipit sequi sint labore corrupti placeat provident, commodi
          eligendi quam! Quam, voluptatibus pariatur libero dolorem voluptate
          possimus, eos officia nobis at obcaecati incidunt. Earum quam
          consequuntur quia qui ex voluptate iusto asperiores, cum non harum
          amet quo odio, vitae corrupti velit nostrum quae optio reprehenderit
          iste vel, aliquam saepe porro. Voluptatibus voluptatem nemo
          consectetur, at qui earum fugit! Nesciunt eveniet quidem vero ab
          placeat. In, officiis voluptas.
        </Text>

        {responses.map(response => (
          <View key={response.id} style={styles.responseCard}>
            <Divider style={styles.responseDivider} color={theme.primary} />
            <View style={styles.cardRow}>
              <Image
                source={{ uri: response.avatar }}
                style={styles.responseAvatar}
              />
              <Text style={styles.responseUsername}>{response.username}</Text>
              <Text style={styles.responseDate}>{response.postedOn}</Text>
            </View>
            <View />
            <View style={styles.cardRow}>
              <View style={styles.responseMovesWrap}>
                <ShambaButton
                  materialCommunityIcon="check"
                  size="sm"
                  outline={true}
                  btnType="primary"
                />
                <ShambaButton
                  materialCommunityIcon="chevron-up"
                  size="sm"
                />
                <MaterialCommunityIcons name="check" color={theme.primary} />
                <Text style={styles.responseVotes}>10</Text>
                <ShambaButton
                  materialCommunityIcon="chevron-down"
                  size="sm"
                />
              </View>
              <Divider style={styles.responseDivider} color={theme.primary} />
              <View style={styles.responseContentWrap}>
                <Text>{response.response}</Text>
              </View>
            </View>
          </View>
        ))}
        <View style={styles.respondActionWrap}>
          <ShambaInput
            inputType="textarea"
            placeholder="Write a response..."
          />
          <ShambaButton
            text="Respond"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewTicket;
