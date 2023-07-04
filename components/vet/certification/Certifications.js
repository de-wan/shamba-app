import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../../../context/ThemeContext';

import ShambaModal from '../../ui/ShambaModal';
import { Alert } from 'react-native';
import DropdownMenu from '../../ui/DropdownMenu';
import ShambaButton from '../../ui/ShambaButton';
import AddCertificationForm from './AddCertificationForm';
import EditCertificationForm from './EditCertificationForm';
import ViewCertification from './ViewCertification';

const Certifications = ({ navigation }) => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    topBar: {
      flexDirection: 'row',
      padding: 10,
    },
    actionsBar: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 5,
      justifyContent: 'flex-end',
    },
    searchWrap: {
      flex: 1,
      paddingHorizontal: 10,
      flexDirection: 'row',
    },
    cardsWrap: {
      padding: 10,
    },
    card: {
      flexDirection: 'row',
      backgroundColor: theme.wb_color1,
      borderBottomWidth: 1,
      borderBottomColor: theme.primary,
    },
    cardDetailsWrap: {
      padding: 5,
      paddingLeft: 10,
      flex: 1,
    },
    cardOptionsWrap: {
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardTitle: {
      color: theme.gray1,
      fontSize: 16,
    },
    cardSubtitle: {
      color: theme.gray2,
      fontSize: 13,
    },
    cardText: {
      color: theme.gray1,
      fontSize: 15,
    },
    cardItemRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    priceRow: {
      flexDirection: 'row',
    },
    priceText: {
      color: theme.primary,
      fontSize: 15,
      fontWeight: 'bold',
    },
    inputField: {
      flex: 1,
      height: 40,
      backgroundColor: theme.wb_color,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: theme.inverted,
      borderStyle: 'solid',
    },
    btn: {
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 5,
      marginHorizontal: 2,
      flexDirection: 'row',
    },
    btnText: {
      color: theme.wb_color,
    },
    btnPrimary: {
      backgroundColor: theme.primary,
      borderColor: theme.inverted,
      borderRadius: 10,
      borderWidth: 2,
      borderStyle: 'solid',
    },
    btnOptions: {
      backgroundColor: theme.gray5,
      height: 40,
      width: 40,
      borderRadius: 20,
      borderColor: theme.inverted,
    },
    timestampRow: {
      flexDirection: 'row',
    },
    justifyEnd: {
      justifyContent: 'flex-end',
    },
  });

  const [search, setSearch] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [isViewingCertification, setIsViewingCertification] = useState(false);
  const [certificationToView, setCertificationToView] = useState({});

  const [isAddingCertification, setIsAddingCertification] = useState(false);

  const [isEditingCertification, setIsEditingCertification] = useState(false);
  const [certificationToEdit, setCertificationToEdit] = useState({});

  const certifications = [
    {
      id: 1,
      institution: 'Jomo Kenyatta University',
      name: 'Bachelor of Science(Agriculture)',
      level: 'Degree',
      grade: 'First Class Honors',
      from: '23rd May 2015',
      to: '23rd May 2019',
    },
  ];

  const viewCertification = certification => {
    setCertificationToView(certification);
    setIsViewingCertification(true);
  };

  const editCertification = service => {
    // todo: implement edit
    setCertificationToEdit(service);
    setIsEditingCertification(true);
  };

  const deleteService = service => {
    // todo: implement delete
    Alert.alert(
      'Delete Service',
      `Are you sure you want to delete service '${service.name}'`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Yes', onPress: () => console.log('OK Pressed') },
      ]
    );
  };

  return (
    <View>
      <View style={styles.topBar}>
        <View style={styles.searchWrap}>
          <TextInput
            style={styles.inputField}
            placeholder="search"
            keyboardType="email-address"
            value={search}
            onChangeText={value => setSearch(value)}
          />
          <TouchableOpacity style={[styles.btn, styles.btnPrimary]}>
            <MaterialCommunityIcons
              name="magnify"
              size={30}
              color={theme.wb_color}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.actionsBar}>
        <ShambaButton
          text="Add Certification"
          onPress={() => setIsAddingCertification(true)}
        />
      </View>

      {/* Loop through crops */}
      {certifications.map(certification => (
        <View key={certification.id} style={styles.cardsWrap}>
          <View style={styles.card}>
            <View style={styles.cardDetailsWrap}>
              <Text style={styles.cardSubtitle}>
                {certification.institution}
              </Text>
              <Text style={styles.cardTitle}>{certification.name}</Text>
              <Text style={styles.cardSubtitle}>
                Level: {certification.level}
              </Text>
              <Text style={styles.cardSubtitle}>
                Grade: {certification.grade}
              </Text>
              <View style={[styles.timestampRow, styles.justifyEnd]}>
                <Text style={styles.cardText}>
                  {certification.from} - {certification.to}
                </Text>
              </View>
            </View>
            <View style={styles.cardOptionsWrap}>
              <DropdownMenu
                trigger={
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={30}
                    color={theme.gray1}
                  />
                }
                options={[
                  { text: 'View', onSelect: () => viewCertification(certification) },
                  { text: 'Edit', onSelect: () => editCertification(certification) },
                  { text: 'Delete', onSelect: () => deleteService(certification) },
                ]}
              />
            </View>
          </View>
        </View>
      ))}

      {/* Viewing Certification Modal */}
      <ShambaModal
        visible={isViewingCertification}
        title="VIEW CERTIFICATION"
        onRequestClose={() => {
          setIsViewingCertification(false);
        }}>
        <ViewCertification certification={certificationToView} />
      </ShambaModal>

      {/* Adding Certification Modal */}
      <ShambaModal
        visible={isAddingCertification}
        title="ADD CERTIFICATION"
        onRequestClose={() => {
          setIsAddingCertification(false);
        }}>
        <AddCertificationForm />
      </ShambaModal>

      {/* Editting Service Modal */}
      <ShambaModal
        visible={isEditingCertification}
        title="EDIT CERTIFICATION"
        onRequestClose={() => {
          setIsEditingCertification(false);
        }}>
        <EditCertificationForm service={certificationToEdit} />
      </ShambaModal>
    </View>
  );
};

export default Certifications;
