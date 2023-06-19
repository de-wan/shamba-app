import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import { collections } from '../../../tables/CollectionsTable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CollectionsScreen = () => {
  const [addCollectionModal, setAddCollectionModal] = useState(false);

  return (
    <ScrollView>
      <Modal
        animationType="slide"
        visible={addCollectionModal}
        onRequestClose={() => {
          setAddCollectionModal(!addCollectionModal);
        }}>
        <ScrollView>
          <Text style={styles.title}>Add a collection</Text>
          <View
            style={{ width: '90%', height: 80, marginTop: 5, paddingLeft: 20 }}>
            <Text>Name of product:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Milk"
              autofocus={true}
            />
          </View>
          <View
            style={{
              width: '90%',
              height: 80,
              marginTop: 10,
              paddingLeft: 20,
            }}>
            <Text>Supplier Name:</Text>
            <TextInput style={styles.inputField} placeholder="MaryAnn Kamau" />
          </View>
          <View
            style={{
              width: '90%',
              height: 80,
              marginTop: 10,
              paddingLeft: 20,
            }}>
            <Text>Supplier/Farmer Number:</Text>
            <TextInput style={styles.inputField} placeholder="22-897" />
          </View>
          <View
            style={{
              width: '90%',
              height: 80,
              marginTop: 10,
              paddingLeft: 20,
            }}>
            <Text>Standard Quality:</Text>
            <TextInput style={styles.inputField} placeholder="Grade-1" />
          </View>
          <View
            style={{
              width: '90%',
              height: 80,
              marginTop: 10,
              paddingLeft: 20,
            }}>
            <Text>Unit:</Text>
            <TextInput style={styles.inputField} placeholder="litres" />
          </View>
          <View
            style={{
              width: '90%',
              height: 80,
              marginTop: 10,
              paddingLeft: 20,
            }}>
            <Text>Quantity Supplied:</Text>
            <TextInput style={styles.inputField} placeholder="23" />
          </View>
          <View
            style={{
              width: '90%',
              height: 80,
              marginTop: 10,
              paddingLeft: 20,
            }}>
            <Text>Date and time:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="2022-10-21, 08:14AM"
            />
          </View>
          <View
            style={{
              width: '90%',
              height: 80,
              marginTop: 10,
              paddingLeft: 20,
            }}>
            <Text>Agent:</Text>
            <TextInput style={styles.inputField} placeholder="James" />
          </View>
          <View
            style={{
              width: '90%',
              height: 140,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20,
              paddingLeft: 20,
            }}>
            <TouchableOpacity
              onPress={() => setAddCollectionModal(false)}
              style={styles.button}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 16,
                  paddingTop: 6,
                }}>
                Add Collection
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setAddCollectionModal(false)}
              style={styles.button}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 16,
                  paddingTop: 6,
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Modal>
      <View style={styles.dashContainer}>
        <Text
          style={{
            width: '100%',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            marginVertical: 5,
          }}>
          Collections
        </Text>
        <View
          style={{
            width: '95%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 10,
          }}>
          <TextInput
            style={[styles.inputField, { width: '84%', marginTop: 0 }]}
            placeholder="Search"
          />
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              borderRadius: 75,
              backgroundColor: '#3cb371',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <MaterialIcons name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '90%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <TouchableOpacity style={[styles.button, { width: 100 }]}>
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 14,
                paddingTop: 6,
              }}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { width: 100 }]}>
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 14,
                paddingTop: 6,
              }}>
              Routes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { width: 100 }]}>
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 14,
                paddingTop: 6,
              }}>
              Past Day
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingRight: 20,
          }}>
          <TouchableOpacity
            onPress={() => setAddCollectionModal(true)}
            style={styles.button}>
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 14,
                paddingTop: 6,
              }}>
              Add Collection
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={{
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {collections.map(collection => (
            <View
              style={{
                height: 100,
                borderColor: '#90ee91',
                borderBottomWidth: 1,
                width: '100%',
                borderRadius: 10,
                paddingHorizontal: 10,
                marginLeft: 5,
                marginBottom: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <MaterialIcons name="collections" size={22} />
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                  {collection.id}
                </Text>
                <Text>{collection.date}</Text>
                <Text>Agent: {collection.agent}</Text>
              </View>
              <View>
                <Text>{collection.quantity} litres</Text>
                <Text>Supplier No: {collection.farmerNo}</Text>
                <Text>Supplier: {collection.supplier}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};
export default CollectionsScreen;

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  dashContainer: {
    width: width,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    width: 140,
    height: 35,
    backgroundColor: '#3CB371',
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    paddingBottom: 5,
    marginVertical: 10,
    textAlign: 'center',
  },
  inputField: {
    width: '100%',
    height: 45,
    textAlign: 'left',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
});
