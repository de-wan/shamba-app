import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../context/ThemeContext';
import SearchBar from '../../ui/SearchBar';
import ShambaButton from '../../ui/ShambaButton';
import DropdownMenu from '../../ui/DropdownMenu';
import DateFilterDropdown from '../../ui/DateFilterDropdown';
import ChipFilterDropdown from '../../ui/ChipFilterDropdown';
import ShambaModal from '../../ui/ShambaModal';
import AddCollection from './AddCollection';

const Collections = () => {
  const theme = useContext(ThemeContext);
  const styles = StyleSheet.create({
    filterBar: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
    },
    actionsBar: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 5,
      justifyContent: 'flex-end',
    },
    topContent: {
      backgroundColor: theme.wb_color,
      height: 100,
      justifyContent: 'center',
      marginHorizontal: 20,
    },
    topContentLabel: {
      fontSize: 20,
      color: theme.gray1,
    },
    topContentValue: {
      fontSize: 24,
      color: theme.primary,
      fontWeight: 'bold',
    },
    cardWrap: {
      padding: 10,
    },
    card: {
      padding: 10,
      backgroundColor: theme.wb_color1,
      borderBottomWidth: 1,
      borderBottomColor: theme.primary,
    },
    cardItemRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    largeCardText: {
      fontSize: 20,
    },
    mediumCardText: {
      fontSize: 16,
    },
    smallCardText: {
      fontSize: 12,
    },
    greyText: {
      color: theme.gray1,
    },
    primaryText: {
      color: theme.primary,
    },
  });

  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [routeFilter, setRouteFilter] = useState('All Routes');
  const [farmerFilter, setFarmerFilter] = useState('All Farmers');
  const [productFilter, setProductFilter] = useState('Products');

  const [isAddingCollection, setIsAddingCollection] = useState(false);

  const collections = [
    {
      id: 1,
      farmer: 'John Doe',
      quantity: 10,
      quantityUnit: 'Kgs',
      product: 'Maize',
      datetime: '10th June 2023, 10:00 AM',
    },
    {
      id: 2,
      farmer: 'John Doe',
      quantity: 10,
      quantityUnit: 'L',
      product: 'Milk',
      datetime: '10th June 2023, 10:00 AM',
    },
    {
      id: 3,
      farmer: 'John Doe',
      quantity: 10,
      quantityUnit: 'Kgs',
      product: 'Coffee',
      datetime: '10th June 2023, 10:00 AM',
    },
  ];

  return (
    <View>
      <View style={styles.topContent}>
        <Text style={styles.topContentLabel}>Total Collections</Text>
        <Text style={styles.topContentValue}>10,000</Text>
      </View>
      <SearchBar>
        <ShambaButton
          materialCommunityIcon="filter-outline"
          onPress={() => setIsFilterVisible(!isFilterVisible)}
        />
        <DropdownMenu
          trigger={<ShambaButton materialCommunityIcon="sort" />}
          options={[
            { text: 'Age Asc', onSelect: () => {} },
            { text: 'Age Desc', onSelect: () => {} },
          ]}
        />
      </SearchBar>
      {isFilterVisible && (
        <View style={styles.filterBar}>
          <ChipFilterDropdown
            selected={routeFilter}
            options={[
              {
                text: 'All Routes',
                onSelect: () => {
                  setRouteFilter('All Routes');
                },
              },
            ]}
          />
          <ChipFilterDropdown
            selected={farmerFilter}
            options={[
              {
                text: 'All Farmers',
                onSelect: () => {
                  setFarmerFilter('All Farmers');
                },
              },
            ]}
          />
          <ChipFilterDropdown
            selected={productFilter}
            options={[
              {
                text: 'Products',
                onSelect: () => {
                  setProductFilter('Products');
                },
              },
            ]}
          />
          <DateFilterDropdown changeCallback={() => {}} />
        </View>
      )}
      <View style={styles.actionsBar}>
        <ShambaButton
          text="Add Collection"
          onPress={() => {
            setIsAddingCollection(true);
          }}
        />
      </View>

      {collections.map(collection => (
        <View key={collection.id} style={styles.cardWrap}>
          <View style={styles.card}>
            <View style={styles.cardItemRow}>
              <Text style={[styles.largeCardText, styles.greyText]}>
                Farmer: {collection.farmer}
              </Text>
              <Text style={[styles.largeCardText, styles.primaryText]}>
                {collection.quantity} {collection.quantityUnit}
              </Text>
            </View>
            <View style={styles.cardItemRow}>
              <Text style={[styles.mediumCardText, styles.grayText]}>
                {collection.product}
              </Text>
              <Text style={[styles.smallCardText, styles.grayText]}>
                {collection.datetime}
              </Text>
            </View>
          </View>
        </View>
      ))}

      {/* Add Collection Modal */}
      <ShambaModal
        visible={isAddingCollection}
        title="ADD COLLECTION"
        onRequestClose={() => {
          setIsAddingCollection(false);
        }}>
        <AddCollection />
      </ShambaModal>
    </View>
  );
};

export default Collections;
