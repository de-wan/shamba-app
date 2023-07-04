import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ShambaInput from '../../ui/ShambaInput';
import ShambaButton from '../../ui/ShambaButton';
import { ThemeContext } from '../../../context/ThemeContext';
import CheckBox from '@react-native-community/checkbox';

const ReportDiseaseForm = ({ diseaseToReport }) => {
  const theme = useContext(ThemeContext);

  const [name, setName] = useState(diseaseToReport?.name || '');
  const [foundInSubjects, setFoundInSubects] = useState(
    diseaseToReport?.foundIn || []
  );
  const [type, setType] = useState(diseaseToReport?.type || '');

  const styles = StyleSheet.create({
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
    foundRow: {
      flexDirection: 'row',
    },
    typeRow: {
      flexDirection: 'row',
    },
    chip: {
      backgroundColor: theme.gray5,
      height: 20,
      borderRadius: 10,
      paddingHorizontal: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 2,
      marginVertical: 1,
    },
    chipText: {
      color: theme.inverted,
      fontSize: 12,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.gray2,
    },
    title2: {
      fontSize: 16,
      color: theme.gray2,
    },
    topWrap: {
      paddingHorizontal: 10,
      marginBottom: 50,
    },
    checkboxContainer: {
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    checkbox: {
      alignSelf: 'center',
    },
  });

  return (
    <View>
      <View style={styles.topWrap}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.foundRow}>
          <Text style={styles.title2}>Found In:</Text>
          {foundInSubjects.map(foundIn => (
            <View style={styles.chip}>
              <Text style={styles.chipText}>{foundIn}</Text>
            </View>
          ))}
        </View>
        <View style={styles.typeRow}>
          <Text style={styles.title2}>Type:</Text>
          <View style={styles.chip}>
            <Text style={styles.chipText}>{type}</Text>
          </View>
        </View>
      </View>
      <View style={styles.inputWrap}>
        <ShambaInput label="Location" placeholder="Nyandarua, Olkalau,..." />
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox style={styles.checkbox} />
        <Text style={styles.label}>Send an alert to the vet in charge</Text>
      </View>
      <View style={styles.inputWrap}>
        <ShambaButton text="Report" />
      </View>
    </View>
  );
};

export default ReportDiseaseForm;
