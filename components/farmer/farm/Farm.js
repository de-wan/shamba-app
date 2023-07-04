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
          onPress={() => navigation.navigate('Crops')}>
          <CardAvatarIcon backgroundColor="#99CC00">
            <MaterialCommunityIcons color="white" name="corn" size={iconSize} />
          </CardAvatarIcon>
          <Text style={styles.cardText}>Crops</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Livestock')}>
          <CardAvatarIcon backgroundColor="#ff9900">
            <MaterialCommunityIcons color="white" name="cow" size={iconSize} />
          </CardAvatarIcon>
          <Text style={styles.cardText}>Livestock</Text>
        </TouchableOpacity>
      </CardRow>
      <CardRow>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Sales')}>
          <CardAvatarIcon backgroundColor="#9900FF">
            <Entypo color="white" name="shop" size={iconSize} />
          </CardAvatarIcon>
          <Text style={styles.cardText}>Sales</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Yield Calculator')}>
          <CardAvatarIcon backgroundColor="#ff0099">
            <MaterialCommunityIcons
              color="white"
              name="calculator"
              size={iconSize}
            />
          </CardAvatarIcon>
          <Text style={styles.cardText}>Yield Calculator</Text>
        </TouchableOpacity>
      </CardRow>
      <CardRow>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Purchases')}>
          <CardAvatarIcon backgroundColor="#22ff00">
            <MaterialCommunityIcons
              color="white"
              name="shopping-outline"
              size={iconSize}
            />
          </CardAvatarIcon>
          <Text style={styles.cardText}>Purchases</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Crop Calendar')}>
          <CardAvatarIcon backgroundColor="#0099ff">
            <MaterialCommunityIcons
              color="white"
              name="calendar-month"
              size={iconSize}
            />
          </CardAvatarIcon>
          <Text style={styles.cardText}>Crop Calendar</Text>
        </TouchableOpacity>
      </CardRow>
      <CardRow>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Calendar Center')}>
          <CardAvatarIcon backgroundColor="#ff0022">
            <MaterialCommunityIcons
              color="white"
              name="calendar-text"
              size={iconSize}
            />
          </CardAvatarIcon>
          <Text style={styles.cardText}>Calendar Center</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Vet N Extension')}>
          <CardAvatarIcon backgroundColor="#0022ff">
            <MaterialCommunityIcons
              color="white"
              name="stethoscope"
              size={iconSize}
            />
          </CardAvatarIcon>
          <Text style={styles.cardText}>Vet & Extension</Text>
        </TouchableOpacity>
      </CardRow>
      <CardRow>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Disease')}>
          <CardAvatarIcon backgroundColor="#ffaa22">
            <MaterialCommunityIcons
              color="white"
              name="bacteria-outline"
              size={iconSize}
            />
          </CardAvatarIcon>
          <Text style={styles.cardText}>Disease</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Wallet')}>
          <CardAvatarIcon backgroundColor="#00ff99">
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
          onPress={() => navigation.navigate('Insurance')}>
          <CardAvatarIcon backgroundColor="#0099ff">
            <MaterialCommunityIcons
              color="white"
              name="shield-half-full"
              size={iconSize}
            />
          </CardAvatarIcon>
          <Text style={styles.cardText}>Insurance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Marketplace')}>
          <CardAvatarIcon backgroundColor="#99CC00">
            <Foundation color="white" name="dollar" size={iconSize} />
          </CardAvatarIcon>
          <Text style={styles.cardText}>Marketplace</Text>
        </TouchableOpacity>
      </CardRow>
      <CardRow>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Income Vs Expense')}>
          <CardAvatarIcon backgroundColor="#0022ff">
            <MaterialCommunityIcons
              color="white"
              name="speedometer"
              size={iconSize}
            />
          </CardAvatarIcon>
          <Text style={styles.cardText}>Income Vs Expense</Text>
        </TouchableOpacity>
      </CardRow>
    </ScrollView>
  );
};

export default Farm;
