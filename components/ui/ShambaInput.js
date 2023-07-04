import React, { useContext } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ShambaInput = ({
  inputType,
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  contentContainerStyle,
  autoFocus
}) => {
  const theme = useContext(ThemeContext);
  const styles = StyleSheet.create({
    label: {
      color: theme.gray1,
    },
    inputField: {
      height: 40,
      backgroundColor: theme.wb_color,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: theme.inverted,
      borderStyle: 'solid',
    },
    textareaField: {
      height: 100,
    },
    selectFieldWrap: {
      height: 40,
      flexDirection: 'row',
      backgroundColor: theme.wb_color,
      alignItems: 'center',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: theme.inverted,
      borderStyle: 'solid',
    },
    selectField: {
      height: 40,
      flex: 1,
    },
    selectFieldIcon: {
      marginHorizontal: 5,
    },
  });
  return (
    <View style={contentContainerStyle}>
      {label && <Text style={styles.label}>{label}</Text>}
      {(!inputType || inputType === 'text') && (
        <TextInput
          style={styles.inputField}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          autoFocus={autoFocus}
        />
      )}
      {inputType === 'textarea' && (
        <TextInput
          style={[styles.inputField, styles.textareaField]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          autoFocus={autoFocus}
        />
      )}
      {inputType === 'email' && (
        <TextInput
          style={styles.inputField}
          placeholder={placeholder}
          keyboardType="email-address"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          autoFocus={autoFocus}
        />
      )}
      {inputType === 'select' && (
        <View style={styles.selectFieldWrap}>
          <TextInput
            style={styles.selectField}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            autoFocus={autoFocus}
          />
          <MaterialCommunityIcons
            style={styles.selectFieldIcon}
            name="chevron-down"
            size={20}
            color={theme.gray1}
          />
        </View>
      )}
    </View>
  );
};

export default ShambaInput;
