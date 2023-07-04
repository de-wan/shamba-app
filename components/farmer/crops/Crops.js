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
import AddCropForm from './AddCropForm';
import EditCropForm from './EditCropForm';
import { Alert } from 'react-native';
import DropdownMenu from '../../ui/DropdownMenu';

const Crops = ({ navigation }) => {
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
    chip: {
      backgroundColor: theme.gray6,
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

  const [isAddingCrop, setIsAddingCrop] = useState(false);

  const [isEditingCrop, setIsEditingCrop] = useState(false);
  const [cropToEdit, setCropToEdit] = useState({});

  const crops = [
    {
      id: 1,
      name: 'Crop 1',
      agronomist: 'Agronomist 1',
      variations: ['Variation 1', 'Variation 2', 'Variation 3'],
      expectedYield: 245,
    },
    {
      id: 2,
      name: 'Crop 2',
      agronomist: 'Agronomist 2',
      variations: ['Variation 1', 'Variation 2', 'Variation 3'],
      expectedYield: 245,
    },
    {
      id: 3,
      name: 'Crop 3',
      agronomist: 'Agronomist 3',
      variations: ['Variation 1', 'Variation 2', 'Variation 3'],
      expectedYield: 245,
    },
  ];

  const editCrop = crop => {
    // todo: implement edit
    setCropToEdit(crop);
    setIsEditingCrop(true);
  };

  const deleteCrop = crop => {
    // todo: implement delete
    Alert.alert(
      'Delete Crop',
      `Are you sure you want to delete crop '${crop.name}'`,
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
        <TouchableOpacity
          style={[styles.btn, styles.btnPrimary]}
          onPress={() => setIsAddingCrop(true)}>
          <MaterialCommunityIcons
            name="plus"
            size={30}
            color={theme.wb_color}
          />
          <Text style={styles.btnText}>Add Crop</Text>
        </TouchableOpacity>
      </View>

      {/* Loop through crops */}
      {crops.map(crop => (
        <View key={crop.id} style={styles.cardsWrap}>
          <View style={styles.card}>
            <View style={styles.cardDetailsWrap}>
              <Text style={styles.cardTitle}>{crop.name}</Text>
              <Text style={styles.cardSubtitle}>
                Agronomist: {crop.agronomist}
              </Text>
              <View style={styles.cardItemRow}>
                <Text style={styles.cardText}>Variations: </Text>
                {crop.variations.map(variation => (
                  <View key={variation} style={styles.chip}>
                    <Text style={styles.chipText}>{variation}</Text>
                  </View>
                ))}
              </View>
              <Text style={styles.cardText}>
                Expected Yield: {crop.expectedYield}
              </Text>
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
                  { text: 'Edit', onSelect: () => editCrop(crop) },
                  { text: 'Delete', onSelect: () => deleteCrop(crop) },
                ]}
              />
            </View>
          </View>
        </View>
      ))}

      {/* Adding Crop Modal */}
      <ShambaModal
        visible={isAddingCrop}
        title="ADD CROP"
        onRequestClose={() => {
          setIsAddingCrop(false);
        }}>
        <AddCropForm />
      </ShambaModal>

      {/* Editting Crop Modal */}
      <ShambaModal
        visible={isEditingCrop}
        title="EDIT CROP"
        onRequestClose={() => {
          setIsEditingCrop(false);
        }}>
        <EditCropForm crop={cropToEdit} />
      </ShambaModal>
    </View>
  );
};

export default Crops;
