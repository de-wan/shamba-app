import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ({ text, materialIcon, iconSize, color, textColor }) {
  const styles = StyleSheet.create({
    btn: {
      borderColor: color || '#3CB371',
      borderWidth: 1,
      backgroundColor: '#fff',
      padding: 3,
      borderRadius: 5,
      alignItems: 'center',
    },
    icon: {
      marginRight: 10,
      color: textColor || '#3CB371',
    },
    text: {
      color: textColor || '#3CB371',
    },
  });

  return (
    <TouchableOpacity style={styles.btn}>
      {materialIcon && (
        <MaterialIcons
          style={styles.icon}
          name={materialIcon}
          size={iconSize || 24}
        />
      )}

      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
