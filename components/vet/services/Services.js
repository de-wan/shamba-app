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
// import AddCropForm from './AddCropForm';
// import EditCropForm from './EditCropForm';
import { Alert } from 'react-native';
import DropdownMenu from '../../ui/DropdownMenu';
import ShambaButton from '../../ui/ShambaButton';
import AddServiceForm from './AddServiceForm';
import EditServiceForm from './EditServiceForm';

const Services = ({ navigation }) => {
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
      fontSize: 20,
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
  });

  const [search, setSearch] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [isAddingService, setIsAddingService] = useState(false);

  const [isEditingService, setIsEditingService] = useState(false);
  const [serviceToEdit, setServiceToEdit] = useState({});

  const services = [
    {
      id: 1,
      name: 'Consultation',
      experience: '2yrs 3mnths',
      price: 'Ksh 2000 per session',
    },
    {
      id: 2,
      name: 'Vaccination',
      experience: '2yrs 3mnths',
      price: 'Ksh 2000 per animal',
    },
  ];

  const editService = service => {
    // todo: implement edit
    setServiceToEdit(service);
    setIsEditingService(true);
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
          text="Add Service"
          onPress={() => setIsAddingService(true)}
        />
      </View>

      {/* Loop through crops */}
      {services.map(service => (
        <View key={service.id} style={styles.cardsWrap}>
          <View style={styles.card}>
            <View style={styles.cardDetailsWrap}>
              <Text style={styles.cardTitle}>{service.name}</Text>
              <Text style={styles.cardSubtitle}>
                Experience: {service.experience}
              </Text>
              <View style={styles.priceRow}>
                <Text style={styles.cardText}>Price: </Text>
                <Text style={styles.priceText}>{service.price}</Text>
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
                  { text: 'Edit', onSelect: () => editService(service) },
                  { text: 'Delete', onSelect: () => deleteService(service) },
                ]}
              />
            </View>
          </View>
        </View>
      ))}

      {/* Adding Service Modal */}
      <ShambaModal
        visible={isAddingService}
        title="ADD SERVICE"
        onRequestClose={() => {
          setIsAddingService(false);
        }}>
        <AddServiceForm />
      </ShambaModal>

      {/* Editting Service Modal */}
      <ShambaModal
        visible={isEditingService}
        title="EDIT SERVICE"
        onRequestClose={() => {
          setIsEditingService(false);
        }}>
        <EditServiceForm service={serviceToEdit} />
      </ShambaModal>
    </View>
  );
};

export default Services;
