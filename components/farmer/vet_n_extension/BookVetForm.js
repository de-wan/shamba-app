import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ShambaInput from '../../ui/ShambaInput';
import ShambaButton from '../../ui/ShambaButton';
import { ThemeContext } from '../../../context/ThemeContext';

const BookVetForm = ({ navigation }) => {
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
      <View style={styles.inputWrap}>
        <ShambaInput
          label="Appointment Type"
          placeholder="--Select--"
          inputType="select"
        />
      </View>
      <View style={styles.inputWrap}>
        <ShambaInput label="Appointment Date" placeholder="dd/mm/yyyy" />
      </View>
      <View style={styles.inputWrap}>
        <ShambaInput label="Appointment Time" placeholder="HH:MM" />
      </View>
      <View style={styles.inputWrap}>
        <ShambaInput
          label="Appointment Location"
          placeholder="Enter Location"
        />
      </View>
      <View style={styles.inputWrap} inputType="textarea">
        <ShambaInput label="Description" placeholder="Enter Description" />
      </View>
      <View style={styles.inputWrap}>
        <ShambaButton text="Book" />
      </View>
    </View>
  );
};

export default BookVetForm;
