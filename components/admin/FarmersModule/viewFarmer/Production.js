import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

const Production = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.DetailSectionTitle}>Collections This Week</Text>
      <View style={styles.detailCard}>
        <Feather style={styles.detailIcon} name="layers" size={24} />
        <View style={styles.detailWrap}>
          <Text>Milk:</Text>
          <Text style={styles.detailValue}>913 litres</Text>
        </View>
      </View>
      <Divider />
      <Text style={styles.DetailSectionTitle}>Livestock and Crops</Text>
      <View style={styles.detailCard}>
        <Feather style={styles.detailIcon} name="layers" size={24} />
        <View style={styles.detailWrap}>
          <Text>Dairy Cows:</Text>
          <Text style={styles.detailValue}>17</Text>
        </View>
      </View>
      <Divider />
      <View style={styles.detailCard}>
        <Feather style={styles.detailIcon} name="layers" size={24} />
        <View style={styles.detailWrap}>
          <Text>Maize:</Text>
          <Text style={styles.detailValue}>261 bags</Text>
        </View>
      </View>
      <Divider />
      <View style={styles.detailCard}>
        <Feather style={styles.detailIcon} name="layers" size={24} />
        <View style={styles.detailWrap}>
          <Text>Spinach:</Text>
          <Text style={styles.detailValue}>37 bags</Text>
        </View>
      </View>
      <Divider />
      <View style={styles.detailCard}>
        <Feather style={styles.detailIcon} name="layers" size={24} />
        <View style={styles.detailWrap}>
          <Text>Tomatoes:</Text>
          <Text style={styles.detailValue}>100 Crates</Text>
        </View>
      </View>
      <Divider />
    </View>
  );
};

export default Production;
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    padding: 10,
  },
  DetailSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
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
})
