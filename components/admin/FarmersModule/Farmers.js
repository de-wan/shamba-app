import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectDropdown from 'react-native-select-dropdown';
// import { DateTimePicker } from '@react-native-community/datetimepicker';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Wallet from './viewFarmer/Wallet';
import Schedules from './viewFarmer/Schedules';
import Details from './viewFarmer/Details';
import Bank from './viewFarmer/Bank';
import Production from './viewFarmer/Production';
import Loans from './viewFarmer/Loans';

const Tab = createMaterialTopTabNavigator();
const { width } = Dimensions.get('window');

const Farmers = () => {
  const [isAddingRoute, setIsAddingRoute] = useState(false);
  const [farmers, setFarmers] = useState([]);
  const [isAddingFarmer, setIsAddingFarmer] = useState(false);
  const [isViewingFarmer, setIsViewingFarmer] = useState(false);
  const [isOldViewingFarmer, setIsViewingOldFarmer] = useState(false);
  const [isSettingDateOfBirth, setIsSettingDateOfBirth] = useState(false);
  const [token, setToken] = useState('');

  const [dateOfBirth, setDateOfBirth] = useState(new Date(1598051730000));

  const onDateOfBirthChanged = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setDateOfBirth(currentDate);
  };

  const fetchToken = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      let user = JSON.parse(jsonValue);
      setToken(user.token);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);
  useEffect(() => {
    const fetchFarmers = async () => {
      fetchToken();
      await fetch('https://erp.shambarecords.com/api/v1/get-farmers', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.data);
          // setFarmers(data.data);
          const mockFarmers = [
            {
              email: 'farmer@mail.com',
              first_name: 'John',
              other_names: 'Doe Nyawira',
              location: 'Nairobi, Kenya',
            },
            {
              email: 'farmer1@mail.com',
              first_name: 'Jane',
              other_names: 'Doe Nyawira',
              location: 'Nairobi, Kenya',
            },
          ];
          setFarmers(mockFarmers);
        })
        .catch(err => console.log(`err: ${err}`));
    };

    fetchFarmers();
  }, [token]);

  return (
    <View style={styles.mainContainer}>
      <Modal
        animationType="slide"
        visible={isAddingRoute}
        onRequestClose={() => {
          setIsAddingRoute(!isAddingRoute);
        }}>
        <View>
          <Text style={styles.title}>Add a route</Text>
          <View
            style={{
              width: '90%',
              height: 80,
              marginTop: 50,
              paddingLeft: 20,
            }}>
            <Text>Name of route:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Nanyuki"
              autofocus={true}
            />
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
              onPress={() => setIsAddingRoute(false)}
              style={styles.button}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 16,
                  paddingTop: 8,
                }}>
                Add Route
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsAddingRoute(false)}
              style={styles.button}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 16,
                  paddingTop: 8,
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Adding farmer modal */}
      <Modal
        animationType="slide"
        visible={isAddingFarmer}
        onRequestClose={() => {
          setIsAddingFarmer(!isAddingFarmer);
        }}>
        <View style={styles.modalBar}>
          <TouchableOpacity onPress={() => setIsAddingFarmer(false)}>
            <AntDesign name="arrowleft" size={22} />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Add Farmer</Text>
          <TouchableOpacity>
            <Text style={styles.modalSaveBtnText}>Save</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View>
            <View style={styles.inputGroup}>
              <Text>Name:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="John"
                autofocus={true}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text>Email:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="somemail@mail.com"
                autofocus={true}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text>Gender:</Text>
              <SelectDropdown
                buttonStyle={styles.dropdown}
                buttonTextStyle={styles.dropdownText}
                dropdownIconPosition="right"
                defaultButtonText="Select Gender"
                data={['Male', 'Female']}
                renderDropdownIcon={() => (
                  <MaterialIcons name="arrow-drop-down" size={24} />
                )}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text>Date of Birth:</Text>
              <TouchableOpacity
                onPress={() => setIsSettingDateOfBirth(true)}
                style={styles.dateBtn}>
                <Text>dd/mm/yyyy</Text>
              </TouchableOpacity>
              {/* todo: solve implementation <DateTimePicker /> */}
              {/* {isSettingDateOfBirth && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={dateOfBirth}
                  mode="date"
                  is24Hour={true}
                  onChange={onDateOfBirthChanged}
                />
              )} */}
            </View>
            <View style={styles.inputGroup}>
              <Text>ID Number:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="123456789"
                autofocus={true}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text>Country:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Kenya"
                autofocus={true}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text>Address:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Address"
                autofocus={true}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text>Route:</Text>
              <SelectDropdown
                buttonStyle={styles.dropdown}
                buttonTextStyle={styles.dropdownText}
                dropdownIconPosition="right"
                defaultButtonText="Select Route"
                data={['Nairobi', 'Nanyuki', 'Nakuru']}
                renderDropdownIcon={() => (
                  <MaterialIcons name="arrow-drop-down" size={24} />
                )}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text>Bank:</Text>
              <SelectDropdown
                buttonStyle={styles.dropdown}
                buttonTextStyle={styles.dropdownText}
                dropdownIconPosition="right"
                defaultButtonText="Select Bank"
                data={['Equity', 'KCB', 'Co-op Bank']}
                renderDropdownIcon={() => (
                  <MaterialIcons name="arrow-drop-down" size={24} />
                )}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text>Bank Branch:</Text>
              <SelectDropdown
                buttonStyle={styles.dropdown}
                buttonTextStyle={styles.dropdownText}
                dropdownIconPosition="right"
                defaultButtonText="Select Bank Branch"
                data={['Nairobi', 'Nanyuki', 'Nakuru']}
                renderDropdownIcon={() => (
                  <MaterialIcons name="arrow-drop-down" size={24} />
                )}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text>Account No:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="1234..."
                autofocus={true}
              />
            </View>
            {/* todo: create multiselect */}
            <View style={styles.inputGroup}>
              <Text>Products:</Text>
              <SelectDropdown
                buttonStyle={styles.dropdown}
                buttonTextStyle={styles.dropdownText}
                dropdownIconPosition="right"
                defaultButtonText="Select Products"
                data={['Milk', 'Eggs', 'Meat']}
                renderDropdownIcon={() => (
                  <MaterialIcons name="arrow-drop-down" size={24} />
                )}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text>Farm Size:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="1234..."
                autofocus={true}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text>Farm Size Unit:</Text>
              <SelectDropdown
                buttonStyle={styles.dropdown}
                buttonTextStyle={styles.dropdownText}
                dropdownIconPosition="right"
                defaultButtonText="Select Size Unit"
                data={['Milk', 'Eggs', 'Meat']}
                renderDropdownIcon={() => (
                  <MaterialIcons name="arrow-drop-down" size={24} />
                )}
              />
            </View>
            <View style={styles.modalActionBar}>
              <TouchableOpacity
                onPress={() => setIsAddingFarmer(false)}
                style={styles.cancelBtn}>
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsAddingFarmer(false)}
                style={styles.saveBtn}>
                <Text style={styles.saveBtnText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Modal>

      {/* Viewing farmer modal */}
      <Modal
        animationType="slide"
        visible={isOldViewingFarmer}
        onRequestClose={() => {
          setIsViewingOldFarmer(!isOldViewingFarmer);
        }}>
        <ScrollView>
          <View style={styles.primaryModalBar}>
            <TouchableOpacity onPress={() => setIsViewingOldFarmer(false)}>
              <AntDesign name="arrowleft" size={22} color="#fff" />
            </TouchableOpacity>
            <View style={styles.modalTitle} />
            <TouchableOpacity
              onPress={() => {
                setIsViewingOldFarmer(false);
                setIsViewingFarmer(true);
              }}>
              <Text>Other UI</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#3CB371',
              alignItems: 'center',
              paddingBottom: 10,
            }}>
            <Image
              source={require('../../../assets/images/avatar.png')}
              style={{
                height: 150,
                width: 150,
                marginBottom: 10,
                borderRadius: 75,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                marginBottom: 5,
                color: '#fff',
              }}>
              MaryAnn Kamau
            </Text>
            <Text style={{ marginBottom: 5, color: '#fff' }}>
              Email: maryann@gmail.com
            </Text>
            <Text style={{ marginBottom: 5, color: '#fff' }}>
              Phone no: 0799533824
            </Text>
            <Text style={{ marginBottom: 5, color: '#fff' }}>
              Route: Nanyuki
            </Text>
            <Text style={{ marginBottom: 5, color: '#fff' }}>
              Member No: 22-0049
            </Text>
            <Text style={{ marginBottom: 5, color: '#fff' }}>
              Bank Details: 3339409594021, Equity Bank, Nanyuki Branch
            </Text>
          </View>
          <View style={{ alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', paddingTop: 10 }}>
              Collections this week:
            </Text>
            <View
              style={{
                height: 30,
                width: '90%',
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingHorizontal: 20,
                marginVertical: 10,
                elevation: 20,
                shadowColor: '#000',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text>Milk</Text>
              <Text>913 litres</Text>
            </View>
            <Text style={{ fontSize: 14, fontWeight: 'bold', paddingTop: 10 }}>
              Livestock and Crops:
            </Text>
            <View
              style={{
                height: 130,
                width: '90%',
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingHorizontal: 20,
                marginVertical: 10,
                elevation: 20,
                shadowColor: '#000',
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  height: 30,
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>Dairy cows</Text>
                <Text>17</Text>
              </View>
              <View
                style={{
                  height: 30,
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>Maize</Text>
                <Text>261 bags</Text>
              </View>
              <View
                style={{
                  height: 30,
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>Spinach</Text>
                <Text>37 bags</Text>
              </View>
              <View
                style={{
                  height: 30,
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>Tomatoes</Text>
                <Text>100 crates</Text>
              </View>
            </View>
            <Text style={{ fontSize: 14, fontWeight: 'bold', paddingTop: 10 }}>
              Wallet
            </Text>
            <View
              style={{
                height: 130,
                width: '90%',
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingHorizontal: 20,
                marginVertical: 10,
                elevation: 20,
                shadowColor: '#000',
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  height: 30,
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>Total payments:</Text>
                <Text>Ksh 17,350</Text>
              </View>
              <View
                style={{
                  height: 30,
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>Made Payments</Text>
                <Text>Ksh 11,050</Text>
              </View>
              <View
                style={{
                  height: 30,
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>Pending Payment</Text>
                <Text>Ksh 6,300</Text>
              </View>
            </View>
            <Text style={{ fontSize: 14, fontWeight: 'bold', paddingTop: 10 }}>
              7 day vet/agronomist schedules
            </Text>
            <View
              style={{
                height: 150,
                width: '90%',
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingHorizontal: 20,
                marginVertical: 10,
                elevation: 20,
                shadowColor: '#000',
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  height: 50,
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{ width: '45%' }}>Dr. Ngugi(Vet)</Text>
                <View
                  style={{
                    width: '55%',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                  }}>
                  <Text>12-10-2022</Text>
                  <Text>Reason: Artificial Insemination</Text>
                </View>
              </View>
              <View
                style={{
                  height: 50,
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{ width: '45%' }}>Dr. Teresia(Agronomist)</Text>
                <View
                  style={{
                    width: '55%',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                  }}>
                  <Text>17-10-2022</Text>
                  <Text>Reason: Crop Irrigation</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Modal>

      {/* New Viewing farmer Modal */}
      <Modal
        animationType="slide"
        visible={isViewingFarmer}
        onRequestClose={() => {
          setIsViewingFarmer(!isViewingFarmer);
        }}>
        <View style={styles.modalBar}>
          <TouchableOpacity onPress={() => setIsViewingFarmer(false)}>
            <AntDesign name="arrowleft" size={22} />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>View Farmer</Text>
        </View>
        <View
          style={{
            backgroundColor: '#3CB371',
            alignItems: 'center',
            paddingBottom: 10,
          }}>
          <Image
            source={require('../../../assets/images/avatar.png')}
            style={{
              height: 150,
              width: 150,
              marginBottom: 10,
              borderRadius: 75,
            }}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginBottom: 5,
              color: '#fff',
            }}>
            MaryAnn Kamau
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Tab.Navigator
            screenOptions={{
              tabBarScrollEnabled: true,
              tabBarActiveTintColor: '#3CB371',
              tabBarLabelStyle: { fontSize: 12 },
              tabBarStyle: { backgroundColor: '#fff' },
              tabBarIndicatorStyle: { backgroundColor: '#3CB371', height: 5 },
            }}>
            <Tab.Screen name="Details" component={Details} />
            <Tab.Screen name="Bank" component={Bank} />
            <Tab.Screen name="Loans" component={Loans} />
            <Tab.Screen name="Production" component={Production} />
            <Tab.Screen name="Wallet" component={Wallet} />
            <Tab.Screen name="Schedules" component={Schedules} />
          </Tab.Navigator>
        </View>
      </Modal>

      <View style={styles.subContainer}>
        <TextInput
          style={[styles.inputField, styles.search]}
          placeholder="Search"
        />
        <TouchableOpacity style={styles.searchBtn}>
          <MaterialIcons name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      {/* <View
        style={{
          width: '90%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
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
            Route
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
            Gender
          </Text>
        </TouchableOpacity>
      </View> */}

      <View style={styles.addFarmerBtnWrap}>
        <TouchableOpacity
          onPress={() => setIsAddingFarmer(true)}
          style={styles.button}>
          <Text style={styles.addFarmerBtn}>Add Farmer</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {farmers?.map(farmer => (
          <View style={styles.farmerCard} key={farmer.email}>
            <View style={styles.cardAvatarWrap}>
              <Image
                source={require('../../../assets/images/avatar.png')}
                style={styles.cardAvatar}
              />
              <View style={styles.farmerDetailsWrap}>
                <View style={styles.farmerNameWrap}>
                  <Text style={styles.farmerName}>
                    {farmer.first_name} {farmer.other_names}
                  </Text>
                </View>
                <View style={styles.farmerDetail}>
                  <Feather name="map-pin" size={20} />
                  <Text>{farmer.location}</Text>
                </View>
                <View style={styles.farmerDetail}>
                  <Feather name="mail" size={20} />
                  <Text>{farmer.email}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => setIsViewingOldFarmer(true)}
              style={{
                width: 30,
                height: 30,
                borderRadius: 75,
                borderColor: '#3cb371',
                borderWidth: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="#3cb371"
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default Farmers;

const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  subContainer: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
  },
  search: {
    width: '84%',
    marginTop: 0,
  },
  searchBtn: {
    width: 45,
    height: 45,
    borderRadius: 75,
    backgroundColor: '#3cb371',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  addFarmerBtnWrap: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingVertical: 10,
  },
  addFarmerBtn: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    paddingTop: 6,
  },
  farmerCard: {
    height: 90,
    width: '94%',
    borderColor: '#3cb371',
    borderBottomWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalBar: {
    width: width,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  primaryModalBar: {
    width: width,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    backgroundColor: '#3cb371',
  },
  modalTitle: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  modalSaveBtnText: {
    color: '#3cb371',
  },
  cardAvatarWrap: {
    width: 240,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardAvatar: {
    height: 45,
    width: 45,
    borderRadius: 65,
    marginRight: 10,
  },
  farmerDetailsWrap: {
    height: 110,
    width: 140,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
  },
  farmerNameWrap: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  farmerName: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  farmerDetail: {
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  scrollView: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  button: {
    width: 120,
    height: 35,
    backgroundColor: '#3CB371',
    borderRadius: 20,
  },
  inputGroup: {
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  modalActionBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  modalBackBtnWrap: {
    backgroundColor: '#3CB371',
  },
  cancelBtn: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#3CB371',
    padding: 10,
    paddingHorizontal: 20,
  },
  saveBtn: {
    backgroundColor: '#3CB371',
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 20,
  },
  saveBtnText: {
    color: '#fff',
    fontSize: 16,
  },
  dropdown: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  dropdownText: {
    fontSize: 15,
  },
  inputField: {
    width: '100%',
    textAlign: 'left',
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  dateBtn: {
    width: '100%',
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    paddingBottom: 5,
    marginVertical: 10,
    textAlign: 'center',
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
});
