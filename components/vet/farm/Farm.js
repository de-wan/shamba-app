import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../../context/ThemeContext';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { ScrollView } from 'react-native-gesture-handler';

const CardAvatarIcon = ({ backgroundColor, children }) => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    cardAvatarIcon: {
      backgroundColor: backgroundColor,
      height: 50,
      width: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return <View style={styles.cardAvatarIcon}>{children}</View>;
};

const CardRow = ({ children }) => {
  const styles = StyleSheet.create({
    cardRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
  });

  return <View style={styles.cardRow}>{children}</View>;
};

const Farm = ({ navigation }) => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.wb_color1,
      height: 100,
      width: '45%',
      marginVertical: 10,
      marginHorizontal: 10,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardText: {
      color: theme.gray1,
      fontSize: 16,
      marginTop: 3,
    },
  });

  const iconSize = 35;

  return (
    <ScrollView>
      <CardRow>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Bookings')}>
          <CardAvatarIcon backgroundColor="#99CC00">
            <MaterialCommunityIcons
              color="white"
              name="calendar-text"
              size={iconSize}
            />
          </CardAvatarIcon>
          <Text style={styles.cardText}>Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Wallet')}>
          <CardAvatarIcon backgroundColor="#9900FF">
            <MaterialCommunityIcons
              color="white"
              name="wallet-outline"
              size={iconSize}
            />
          </CardAvatarIcon>
          <Text style={styles.cardText}>Wallet</Text>
        </TouchableOpacity>
      </CardRow>
      <CardRow>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Services')}>
          <CardAvatarIcon backgroundColor="#ff9900">
            <MaterialCommunityIcons
              color="white"
              name="stethoscope"
              size={iconSize}
            />
          </CardAvatarIcon>
          <Text style={styles.cardText}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Certifications')}>
          <CardAvatarIcon backgroundColor="#ff0099">
            <MaterialCommunityIcons
              color="white"
              name="certificate-outline"
              size={iconSize}
            />
          </CardAvatarIcon>
          <Text style={styles.cardText}>Certifications</Text>
        </TouchableOpacity>
      </CardRow>
      <CardRow>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Outbreaks')}>
          <CardAvatarIcon backgroundColor="#ff0022">
            <MaterialCommunityIcons
              color="white"
              name="bacteria-outline"
              size={iconSize}
            />
          </CardAvatarIcon>
          <Text style={styles.cardText}>Outbreaks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Notifications')}>
          <CardAvatarIcon backgroundColor="#0099ff">
            <MaterialCommunityIcons
              color="white"
              name="bell-outline"
              size={iconSize}
            />
          </CardAvatarIcon>
          <Text style={styles.cardText}>Notifications</Text>
        </TouchableOpacity>
      </CardRow>
      <CardRow>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Support')}>
          <CardAvatarIcon backgroundColor="#0022ff">
            <MaterialCommunityIcons
              color="white"
              name="information-variant"
              size={iconSize}
            />
          </CardAvatarIcon>
          <Text style={styles.cardText}>Support</Text>
        </TouchableOpacity>
      </CardRow>
    </ScrollView>
  );
};

export default Farm;
