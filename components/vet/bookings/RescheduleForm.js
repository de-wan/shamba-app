import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ShambaInput from '../../ui/ShambaInput';
import ShambaButton from '../../ui/ShambaButton';
import { ThemeContext } from '../../../context/ThemeContext';

const RescheduleForm = ({ navigation }) => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    main: {
      paddingTop: 50,
    },
    inputWrap: {
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    displayWrap: {
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    displayLabel: {
      color: theme.gray1,
    },
    displayValue: {
      color: theme.gray1,
      fontSize: 20,
      fontWeight: 'bold',
    },
    displayValuePrimary: {
      color: theme.primary,
    },
    displayValueDanger: {
      color: theme.danger,
    },
  });

  return (
    <View style={styles.main}>
      <View style={styles.displayWrap}>
        <Text style={styles.displayLabel}>Appointment Type</Text>
        <Text style={styles.displayValue}>Appointment Type</Text>
      </View>
      <View style={styles.displayWrap}>
        <Text style={styles.displayLabel}>Appointment Location</Text>
        <Text style={styles.displayValue}>Nyahururu Town</Text>
      </View>
      <View style={styles.displayWrap}>
        <Text style={styles.displayLabel}>Appointment Description</Text>
        <Text style={styles.displayValue}>Lorem Ipsum</Text>
      </View>
      <View style={styles.inputWrap}>
        <ShambaInput label="Appointment Date" placeholder="dd/mm/yyyy" />
      </View>
      <View style={styles.inputWrap}>
        <ShambaInput label="Appointment Time" placeholder="HH:MM" />
      </View>
      <View style={styles.inputWrap}>
        <ShambaButton text="Reschedule" />
      </View>
    </View>
  );
};

export default RescheduleForm;
