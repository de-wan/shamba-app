import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function () {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 2 }}>
      <View
        style={{
          height: '100%',
          width: 5,
          backgroundColor: '#FFB800',
          marginRight: 5,
        }}></View>
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
        <View style={{ marginRight: 5, flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Sarah Mbugua</Text>
          <Text style={{ fontSize: 12 }}>Diesease: Bovine M...</Text>
        </View>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={styles.stopIndicator}></View>
            <Text>5th May, 09:31</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <View
              style={styles.stepIndicator}></View>
            <View
              style={styles.stepIndicator}></View>
            <View
              style={styles.stepIndicator}></View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={styles.stopIndicator}></View>
            <Text>5th May, 09:31</Text>
          </View>
        </View>
      </View>
      {/* Filled indicator for the status of the appointment e.g. pending */}
      <View
        style={{
          borderRadius: 5,
          backgroundColor: '#FFB800',
          marginLeft: 5,
          padding: 3,
        }}>
        <Text>Pending</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stopIndicator: {
    height: 10,
    width: 10,
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 1,
    borderColor: '#888',
  },
  stepIndicator: {
    height: 6,
    width: 6,
    borderRadius: 3,
    marginRight: 1,
    backgroundColor: '#888',
    marginVertical: 1,
  },
});