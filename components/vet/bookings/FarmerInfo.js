import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../context/ThemeContext';

const FarmerInfo = () => {
  const theme = useContext(ThemeContext);
  const styles = StyleSheet.create({
    detailsWrap: {
      padding: 20,
    },
    detailLabel: {
      color: theme.gray1,
    },
    detailValue: {
      color: theme.gray1,
      fontSize: 20,
    },
  });

    const farmer = {
        name: 'John Doe',
        phone: '0712345678',
        email: 'johndoe@mail.com',
        location: 'Nyahururu Town',
    };

    return (
        <View>
            <View style={styles.detailsWrap}>
              <Text style={styles.detailLabel}>Name</Text>
              <Text style={styles.detailValue}>{farmer.name}</Text>
            </View>
            <View style={styles.detailsWrap}>
              <Text style={styles.detailLabel}>Phone</Text>
              <Text style={styles.detailValue}>{farmer.phone}</Text>
            </View>
            <View style={styles.detailsWrap}>
              <Text style={styles.detailLabel}>Email</Text>
              <Text style={styles.detailValue}>{farmer.email}</Text>
            </View>
            <View style={styles.detailsWrap}>
              <Text style={styles.detailLabel}>Location</Text>
              <Text style={styles.detailValue}>{farmer.location}</Text>
            </View>
        </View>
    );
}

export default FarmerInfo;
