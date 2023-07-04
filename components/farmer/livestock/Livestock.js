import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ShambaModal from '../../ui/ShambaModal';
import AddLivestockForm from './AddLivestockForm';
import EditLivestockForm from './EditLivestockForm';
import { Alert } from 'react-native';
import ViewCollections from './ViewCollections';
import { ThemeContext } from '../../../context/ThemeContext';
import DropdownMenu from '../../ui/DropdownMenu';

const Livestock = ({ navigation }) => {
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

  const [isAddingLivestock, setIsAddingLivestock] = useState(false);

  const [isEditingLivestock, setIsEditingLivestock] = useState(false);
  const [livestockToEdit, setLivestockToEdit] = useState({});

  const [isViewingCollections, setIsViewingCollections] = useState(false);

  const all_livestock = [
    {
      id: 1,
      reg_no: '324243',
      name: 'Goats',
      breeds: ['Breed 1'],
      grade: 'Grade 1',
      expectedYield: 245,
    },
    {
      id: 2,
      reg_no: '342987',
      name: 'Sheep',
      breeds: ['Breed 1'],
      grade: 'Grade 1',
      expectedYield: 245,
    },
    {
      id: 3,
      reg_no: '8397434',
      name: 'Cows',
      breeds: ['Breed 1'],
      grade: 'Grade 1',
      expectedYield: 245,
    },
  ];

  const viewCollections = () => {
    setIsViewingCollections(true);
  };

  const editLivestock = livestock => {
    // todo: implement edit
    setLivestockToEdit(livestock);
    setIsEditingLivestock(true);
  };

  const deleteLivestock = livestock => {
    // todo: implement delete
    Alert.alert(
      'Delete Livestock',
      `Are you sure you want to delete livestock '${livestock.name}'`,
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
          onPress={() => setIsAddingLivestock(true)}>
          <MaterialCommunityIcons
            name="plus"
            size={30}
            color={theme.wb_color}
          />
          <Text style={styles.btnText}>Add Livestock</Text>
        </TouchableOpacity>
      </View>

      {/* Loop through all_livestock */}
      {all_livestock.map(livestock => (
        <View key={livestock.id} style={styles.cardsWrap}>
          <View style={styles.card}>
            <View style={styles.cardDetailsWrap}>
              <Text style={styles.cardTitle}>Reg No: {livestock.reg_no}</Text>
              <Text style={styles.cardTitle}>{livestock.name}</Text>
              <View style={styles.cardItemRow}>
                {livestock.breeds.map(breed => (
                  <View key={breed} style={styles.chip}>
                    <Text style={styles.chipText}>{breed}</Text>
                  </View>
                ))}
                <View style={styles.chip}>
                  <Text style={styles.chipText}>{livestock.grade}</Text>
                </View>
              </View>
              <Text style={styles.cardText}>
                Expected Yield: {livestock.expectedYield}
              </Text>
            </View>
            <View style={styles.cardOptionsWrap}>
              <DropdownMenu
                triggerStyle={[styles.btn, styles.btnOptions]}
                trigger={
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={30}
                    color={theme.gray1}
                  />
                }
                options={[
                  {
                    text: 'View Collections',
                    onSelect: () => viewCollections(),
                  },
                  { text: 'Edit', onSelect: () => editLivestock(livestock) },
                  {
                    text: 'Delete',
                    onSelect: () => deleteLivestock(livestock),
                  },
                ]}
              />
            </View>
          </View>
        </View>
      ))}

      {/* Viewing Collections Modal */}
      <ShambaModal
        visible={isViewingCollections}
        title="VIEW COLLECTIONS"
        onRequestClose={() => {
          setIsViewingCollections(false);
        }}>
        <ViewCollections />
      </ShambaModal>

      {/* Adding Livestock Modal */}
      <ShambaModal
        visible={isAddingLivestock}
        title="ADD LIVESTOCK"
        onRequestClose={() => {
          setIsAddingLivestock(false);
        }}>
        <AddLivestockForm />
      </ShambaModal>

      {/* Editting Livestock Modal */}
      <ShambaModal
        visible={isEditingLivestock}
        title="EDIT LIVESTOCK"
        onRequestClose={() => {
          setIsEditingLivestock(false);
        }}>
        <EditLivestockForm livestock={livestockToEdit} />
      </ShambaModal>
    </View>
  );
};

export default Livestock;
