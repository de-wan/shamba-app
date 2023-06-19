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
  Alert,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { width } = Dimensions.get('window');

const Routes = () => {
  const [isAddingRoute, setIsAddingRoute] = useState(false);
  const [isEdittingRoute, setIsEdittingRoute] = useState(false);
  const [routeToEdit, setRouteToEdit] = useState({});
  const [routes, setRoutes] = useState([]);
  // const [isAddingRoute, setIsAddingRoute] = useState(false);
  const [token, setToken] = useState('');

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
    const fetchRoutes = async () => {
      fetchToken();
      // todo: change the url to the correct one
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
          const mockRoutes = [
            {
              id: 1,
              name: 'Nairobi',
              members: 20,
            },
            {
              id: 2,
              name: 'Nanyuki',
              members: 20,
            },
            {
              id: 3,
              name: 'Mombasa',
              members: 20,
            },
            {
              id: 4,
              name: 'Nakuru',
              members: 20,
            },
          ];
          setRoutes(mockRoutes);
        })
        .catch(err => console.log(`err: ${err}`));
    };
    fetchRoutes();
  }, [token]);

  const triggerDelete = id => {
    Alert.alert(
      'Delete Route',
      'Are you sure you want to delete this route?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            console.log('Delete Pressed');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.mainContainer}>
      {/* Adding route modal */}
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
          <View style={styles.modalActionsWrap}>
            <TouchableOpacity
              onPress={() => setIsAddingRoute(false)}
              style={[styles.button, styles.cancelSaveRouteBtn]}>
              <Text style={styles.cancelSaveRouteBtnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsAddingRoute(false)}
              style={[styles.button]}>
              <Text style={styles.saveRouteBtn}>Add Route</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Editting route modal */}
      <Modal
        animationType="slide"
        visible={isEdittingRoute}
        onRequestClose={() => {
          setIsEdittingRoute(!isEdittingRoute);
        }}>
        <View>
          <Text style={styles.title}>Add a route</Text>
          <View style={styles.routeNameFormGroup}>
            <Text>Name of route:</Text>
            <TextInput
              value={routeToEdit.name}
              style={styles.inputField}
              placeholder="Nanyuki"
              autofocus={true}
            />
          </View>
          <View style={styles.modalActionsWrap}>
            <TouchableOpacity
              onPress={() => setIsEdittingRoute(false)}
              style={[styles.button, styles.cancelSaveRouteBtn]}>
              <Text style={styles.cancelSaveRouteBtnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsEdittingRoute(false)}
              style={[styles.button]}>
              <Text style={styles.saveRouteBtn}>Save Route</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.searchWrap}>
        <TextInput
          style={[styles.inputField, styles.searchInput]}
          placeholder="Search"
        />
        <TouchableOpacity style={styles.searchBtn}>
          <MaterialIcons name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.addRouteBtnWrap}>
        <TouchableOpacity
          onPress={() => setIsAddingRoute(true)}
          style={styles.button}>
          <Text style={styles.addRouteBtn}>Add Route</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.routeScrollView}>
        {routes?.map(route => (
          <View style={styles.routeCard} key={route.id}>
            <View style={styles.routeCardDetailsContainer}>
              <FontAwesome5 name="route" size={24} />
              <View style={styles.routeDetailsWrap}>
                <View style={styles.routeNameWrap}>
                  <Text style={styles.routeName}>{route.name}</Text>
                </View>
                <View style={styles.membersCountWrap}>
                  <Feather
                    style={styles.membersCountIcon}
                    name="users"
                    size={16}
                  />
                  <Text style={styles.membersCountDescription}>Members: </Text>
                  <Text style={styles.membersCountValue}>{route.members}</Text>
                </View>
              </View>
            </View>
            <View style={styles.routeActions}>
              <TouchableOpacity
                onPress={() => {
                  setRouteToEdit({ ...route });
                  setIsEdittingRoute(true);
                }}>
                <AntDesign name="edit" size={22} color="#3CB371" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => triggerDelete()}>
                <AntDesign name="delete" size={22} color="#E55451" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default Routes;

const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    width: 120,
    height: 35,
    backgroundColor: '#3CB371',
    borderRadius: 20,
  },
  inputField: {
    width: '100%',
    height: 45,
    textAlign: 'left',
    padding: 10,
    marginTop: 20,
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
  searchWrap: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
  },
  searchInput: {
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
  addRouteBtnWrap: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingVertical: 10,
  },
  addRouteBtn: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    paddingTop: 6,
  },
  routeScrollView: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  routeCard: {
    padding: 10,
    width: '94%',
    borderColor: '#3cb371',
    borderBottomWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  routeCardDetailsContainer: {
    width: 240,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  routeAvatar: {
    height: 45,
    width: 45,
    borderRadius: 65,
    marginRight: 10,
  },
  routeDetailsWrap: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 5,
  },
  routeNameWrap: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  routeName: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  membersCountWrap: {
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  membersCountIcon: {
    marginHorizontal: 5,
  },
  membersCountValue: {
    color: '#000',
    fontWeight: 'bold',
  },
  routeActions: {
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'space-around',
  },
  modalActionsWrap: {
    width: '90%',
    height: 140,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingLeft: 20,
  },
  cancelSaveRouteBtn: {
    borderWidth: 2,
    borderColor: '#3CB371',
    backgroundColor: '#fff',
  },
  cancelSaveRouteBtnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 8,
    color: '#3CB371',
  },
  saveRouteBtn: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 8,
  },
  routeNameFormGroup: {
    width: '90%',
    height: 80,
    marginTop: 50,
    paddingLeft: 20,
  },
});
