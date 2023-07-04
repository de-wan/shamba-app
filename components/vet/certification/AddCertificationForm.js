import React from 'react';
import { StyleSheet, View } from 'react-native';
import ShambaInput from '../../ui/ShambaInput';
import ShambaButton from '../../ui/ShambaButton';

const AddCertificationForm = () => {
  const styles = StyleSheet.create({
    inputWrap: {
      paddingHorizontal: 10,
      marginBottom: 20,
    },
  });

  return (
    <View>
      <View style={styles.inputWrap}>
        <ShambaInput placeholder="Service" label="Service" inputType="select" />
      </View>
      <View style={styles.inputWrap}>
        <ShambaInput placeholder="dd/mm/yyyy" label="Experience start date" />
      </View>
      <View style={styles.inputWrap}>
        <ShambaInput placeholder="500" label="Unit Price" />
      </View>
      <View style={styles.inputWrap}>
        <ShambaInput placeholder="per session" label="Unit" />
      </View>
      <View style={styles.inputWrap}>
        <ShambaButton text="Add Service" />
      </View>
    </View>
  );
};

export default AddCertificationForm;
