import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Divider } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

const Details = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.detailCard}>
        <Feather style={styles.detailIcon} name="user" size={24} />
        <View style={styles.detailWrap}>
          <Text>Name:</Text>
          <Text style={styles.detailValue}>John Doe</Text>
        </View>
      </View>
      <Divider />
      <View style={styles.detailCard}>
        <Feather style={styles.detailIcon} name="mail" size={24} />
        <View style={styles.detailWrap}>
          <Text>Email:</Text>
          <Text style={styles.detailValue}>jdoe@mail.com</Text>
        </View>
      </View>
      <Divider />
      <View style={styles.detailCard}>
        <Feather style={styles.detailIcon} name="phone" size={24} />
        <View style={styles.detailWrap}>
          <Text>Phone No:</Text>
          <Text style={styles.detailValue}>254799533824</Text>
        </View>
      </View>
      <Divider />
      <View style={styles.detailCard}>
        <FontAwesome5 style={styles.detailIcon} name="route" size={24} />
        <View style={styles.detailWrap}>
          <Text>Route:</Text>
          <Text style={styles.detailValue}>Nanyuki</Text>
        </View>
      </View>
      <Divider />
      <View style={styles.detailCard}>
        <Feather style={styles.detailIcon} name="hash" size={24} />
        <View style={styles.detailWrap}>
          <Text>Member Number:</Text>
          <Text style={styles.detailValue}>334842</Text>
        </View>
      </View>
      <Divider />
    </View>
  );
};

export default Details;
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    padding: 10,
  },
  detailWrap: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
  },
  detailCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
  },
  detailIcon: {
    marginRight: 10,
  },
  detailValue: {
    fontWeight: 'bold',
  },
});
