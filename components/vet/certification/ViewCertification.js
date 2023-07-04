import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../../../context/ThemeContext';
import DropdownMenu from '../../ui/DropdownMenu';
import ShambaButton from '../../ui/ShambaButton';

const ViewCertification = certification => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    detailsWrap: {
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    detailLabel: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    detailText: {
      fontSize: 20,
    },
    documentCard: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: theme.wb_color,
      marginVertical: 5,
      marginHorizontal: 10,
    },
    documentTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 10,
      flex: 1,
    },
    uploadDocBtn: {
      marginHorizontal: 10,
      marginVertical: 5,
    },
  });

  const [isViewingDocument, setIsViewingDocument] = useState(false);
  const [documentToView, setDocumentToView] = useState(null);

  const viewDocument = document => {
    setDocumentToView(document);
    setIsViewingDocument(true);
  };

  const deleteDocument = document => {
    Alert.alert(
      'Delete Document',
      'Are you sure you want to delete this document?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: "Yes, I'm sure",
          onPress: () => console.log('OK Pressed'),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView>
      <View style={styles.detailsWrap}>
        <Text style={styles.detailLabel}>institution</Text>
        <Text style={styles.detailText}>Jomo Kenyatta University</Text>
      </View>
      <View style={styles.detailsWrap}>
        <Text style={styles.detailLabel}>Certification</Text>
        <Text style={styles.detailText}>Bachelor of Science(Argriculture)</Text>
      </View>
      <View style={styles.detailsWrap}>
        <Text style={styles.detailLabel}>Level</Text>
        <Text style={styles.detailText}>Degree</Text>
      </View>
      <View style={styles.detailsWrap}>
        <Text style={styles.detailLabel}>Grade</Text>
        <Text style={styles.detailText}>First Class Honors</Text>
      </View>
      <View style={styles.detailsWrap}>
        <Text style={styles.detailLabel}>Start Date</Text>
        <Text style={styles.detailText}>23rd May 2015</Text>
      </View>
      <View style={styles.detailsWrap}>
        <Text style={styles.detailLabel}>Graduation Date</Text>
        <Text style={styles.detailText}>23rd May 2019</Text>
      </View>

      <View style={styles.documentCard}>
        <MaterialCommunityIcons name="file-outline" size={24} />
        <Text style={styles.documentTitle}>Certificate.docx</Text>
        <DropdownMenu
          trigger={
            <MaterialCommunityIcons
              name="dots-vertical"
              size={30}
              color={theme.gray1}
            />
          }
          options={[
            { text: 'View', onSelect: () => viewDocument('') },
            { text: 'Delete', onSelect: () => deleteDocument('') },
          ]}
        />
      </View>
      <View style={styles.documentCard}>
        <MaterialCommunityIcons name="file-outline" size={24} />
        <Text style={styles.documentTitle}>Certificate.docx</Text>
        <DropdownMenu
          trigger={
            <MaterialCommunityIcons
              name="dots-vertical"
              size={30}
              color={theme.gray1}
            />
          }
          options={[
            { text: 'View', onSelect: () => viewDocument('') },
            { text: 'Delete', onSelect: () => deleteDocument('') },
          ]}
        />
      </View>
      <View style={styles.documentCard}>
        <MaterialCommunityIcons name="file-outline" size={24} />
        <Text style={styles.documentTitle}>Certificate.docx</Text>
        <DropdownMenu
          trigger={
            <MaterialCommunityIcons
              name="dots-vertical"
              size={30}
              color={theme.gray1}
            />
          }
          options={[
            { text: 'View', onSelect: () => viewDocument('') },
          ]}
        />
      </View>
    </ScrollView>
  );
};

export default ViewCertification;
