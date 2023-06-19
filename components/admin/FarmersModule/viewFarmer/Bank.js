import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Bank = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.detailCard}>
        <Feather style={styles.detailIcon} name="hash" size={24} />
        <View style={styles.detailWrap}>
          <Text>Acc Number:</Text>
          <Text style={styles.detailValue}>32798423724</Text>
        </View>
      </View>
      <Divider />
      <View style={styles.detailCard}>
        <MaterialCommunityIcons
          style={styles.detailIcon}
          name="bank-outline"
          size={24}
        />
        <View style={styles.detailWrap}>
          <Text>Bank Name:</Text>
          <Text style={styles.detailValue}>Equity Bank</Text>
        </View>
      </View>
      <Divider />
      <View style={styles.detailCard}>
        <Feather style={styles.detailIcon} name="git-branch" size={24} />
        <View style={styles.detailWrap}>
          <Text>Branch:</Text>
          <Text style={styles.detailValue}>Nanyuki Branch</Text>
        </View>
      </View>
      <Divider />
    </View>
  );
};

export default Bank;
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
