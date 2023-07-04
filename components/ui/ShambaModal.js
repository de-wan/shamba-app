import React, { useContext } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../../context/ThemeContext';

const ShambaModal = ({ visible, children, onRequestClose, title }) => {
  const theme = useContext(ThemeContext);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.app_bg,
    },
    modalBar: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: theme.wb_color1,
    },
    modalTitleWrap: {
      flexDirection: 'row',
      flex: 1,
    },
    modalTitle: {
      color: theme.gray1,
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10,
    },
  });
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={() => onRequestClose()}>
      <View style={styles.container}>
        <View style={styles.modalBar}>
          <View style={styles.modalTitleWrap}>
            <TouchableOpacity
              style={styles.modalBack}
              onPress={() => onRequestClose()}>
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={theme.inverted}
              />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>{title}</Text>
          </View>
        </View>
        {children}
      </View>
    </Modal>
  );
};

export default ShambaModal;
