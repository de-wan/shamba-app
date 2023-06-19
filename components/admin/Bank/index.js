import React, { useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Modal,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SelectDropdown from 'react-native-select-dropdown';

const Bank = () => {
  const [isAddingBank, setIsAddingBank] = useState(false);
  const [isEdittingBank, setIsEdittingBank] = useState(false);
  const [bankToEdit, setBankToEdit] = useState({});
  const [banks, setBanks] = useState([
    {
      id: 1,
      name: 'Equity Bank',
      branchesCount: 2,
      contactNo: '254782723921',
      swiftCode: 'feuaf8faeojfa',
    },
  ]);
  const [isViewingBranches, setIsViewingBranches] = useState(false);
  const [bankBranchesToView, setBankBranchesToView] = useState({});
  const [branches, setBranches] = useState([
    {
      id: 1,
      name: 'Nanyuki Branch',
      route: 'Nanyuki',
      address: 'Nanyuki',
      branchCode: 'feuaf8faeojfa',
    },
  ]);

  const [isAddingBranch, setIsAddingBranch] = useState(false);
  const [branchToEdit, setBranchToEdit] = useState({});
  const [isEdittingBranch, setIsEdittingBranch] = useState(false);

  const triggerDeleteBank = id => {
    Alert.alert(
      'Delete Bank',
      'Are you sure you want to delete this bank?',
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

  const triggerDeleteBranch = id => {
    Alert.alert(
      'Delete Branch',
      'Are you sure you want to delete this branch?',
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
      {/* Adding bank modal */}
      <Modal
        animationType="slide"
        visible={isAddingBank}
        onRequestClose={() => {
          setIsAddingBank(!isAddingBank);
        }}>
        <View>
          <Text style={styles.modalTitle}>Add a bank</Text>
          <View style={styles.inputGroup}>
            <Text>Name of bank:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter bank name"
              autofocus={true}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Contact Number:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="2547..."
              autofocus={true}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Swift Code:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Swift Code"
              autofocus={true}
            />
          </View>
          <View style={styles.modalActionsWrap}>
            <TouchableOpacity
              onPress={() => setIsAddingBank(false)}
              style={[styles.button, styles.cancelSaveBankBtn]}>
              <Text style={styles.cancelSaveBankBtnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsAddingBank(false)}
              style={[styles.button]}>
              <Text style={styles.saveBankBtn}>Add Bank</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Editting bank modal */}
      <Modal
        animationType="slide"
        visible={isEdittingBank}
        onRequestClose={() => {
          setIsEdittingBank(!isEdittingBank);
        }}>
        <View>
          <Text style={styles.modalTitle}>Edit a bank</Text>
          <View style={styles.inputGroup}>
            <Text>Name of bank:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter bank name"
              autofocus={true}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Contact Number:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="2547..."
              autofocus={true}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Swift Code:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Swift Code"
              autofocus={true}
            />
          </View>
          <View>
            <View style={styles.modalActionsWrap}>
              <TouchableOpacity
                onPress={() => setIsEdittingBank(false)}
                style={[styles.button, styles.cancelSaveBankBtn]}>
                <Text style={styles.cancelSaveBankBtnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsEdittingBank(false)}
                style={[styles.button]}>
                <Text style={styles.saveBankBtn}>Save Bank</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Bank Branches */}
      <Modal
        animationType="slide"
        visible={isViewingBranches}
        onRequestClose={() => {
          setIsViewingBranches(!isViewingBranches);
        }}>
        <View>
          <View style={styles.modalBar}>
            <TouchableOpacity onPress={() => setIsViewingBranches(false)}>
              <AntDesign name="arrowleft" size={22} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Bank Branches</Text>
          </View>
          <View style={styles.branchesBankWrap}>
            <Text style={styles.branchesBankDescription}>Bank: </Text>
            <Text style={styles.branchesBankName}>
              {bankBranchesToView.name}
            </Text>
          </View>
          <View style={styles.searchWrap}>
            <TextInput
              style={[styles.inputField, styles.searchInput]}
              placeholder="Search"
            />
            <TouchableOpacity style={styles.searchBtn}>
              <MaterialIcons name="search" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.actionBar}>
            <TouchableOpacity
              style={[styles.button, styles.actionBtn]}
              onPress={() => setIsAddingBranch(true)}>
              <MaterialIcons name="add" size={24} color="#fff" />
              <Text style={styles.actionBtnText}>Add Branch</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={styles.modalSubContainerWrap}>
              <View style={styles.modalSubContainer}>
                {branches.map(branch => (
                  <View style={styles.branchCard}>
                    <Feather
                      style={styles.branchIcon}
                      name="git-branch"
                      size={24}
                    />
                    <View style={styles.branchDetailsWrap}>
                      <Text style={styles.branchName}>Nanyuki Branch</Text>
                      <View style={styles.descriptionWrap}>
                        <FontAwesome5
                          style={styles.descriptionIcon}
                          name="route"
                          size={15}
                        />
                        <Text style={styles.descriptionLabel}>Route:</Text>
                        <Text style={styles.descriptionValue}>
                          {branch.route}
                        </Text>
                      </View>
                      <View style={styles.descriptionWrap}>
                        <Feather
                          style={styles.descriptionIcon}
                          name="map-pin"
                          size={15}
                        />
                        <Text style={styles.descriptionLabel}>Address:</Text>
                        <Text style={styles.descriptionValue}>
                          {branch.address}
                        </Text>
                      </View>
                      <View style={styles.descriptionWrap}>
                        <Feather
                          style={styles.descriptionIcon}
                          name="hash"
                          size={12}
                        />
                        <Text style={styles.descriptionLabel}>Code:</Text>
                        <Text style={styles.descriptionValue}>
                          {branch.branchCode}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.bankActions}>
                      <TouchableOpacity
                        style={styles.cardAction}
                        onPress={() => {
                          setIsViewingBranches(false);
                          setBranchToEdit({ ...branch });
                          setIsEdittingBranch(true);
                        }}>
                        <AntDesign name="edit" size={22} color="#3CB371" />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.cardAction}
                        onPress={() => triggerDeleteBranch()}>
                        <AntDesign name="delete" size={22} color="#E55451" />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>

      {/* Adding branch modal */}
      <Modal
        animationType="slide"
        visible={isAddingBranch}
        onRequestClose={() => {
          setIsAddingBranch(!isAddingBranch);
        }}>
        <View>
          <Text style={styles.modalTitle}>Add a branch</Text>
          <View style={styles.inputGroup}>
            <Text>Bank:</Text>
            <SelectDropdown
              buttonStyle={styles.dropdown}
              buttonTextStyle={styles.dropdownText}
              dropdownIconPosition="right"
              defaultButtonText="Select Bank"
              // todo: use actual banks
              data={['Bank 1', 'Bank 2']}
              renderDropdownIcon={() => (
                <MaterialIcons name="arrow-drop-down" size={24} />
              )}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Route:</Text>
            <SelectDropdown
              buttonStyle={styles.dropdown}
              buttonTextStyle={styles.dropdownText}
              dropdownIconPosition="right"
              defaultButtonText="Select Route"
              // todo: use actual routes
              data={['Route 1', 'Route 2']}
              renderDropdownIcon={() => (
                <MaterialIcons name="arrow-drop-down" size={24} />
              )}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Name of branch:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter branch name"
              autofocus={true}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Address:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Address"
              autofocus={true}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Branch Code:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Branch Code"
              autofocus={true}
            />
          </View>
          <View style={styles.modalActionsWrap}>
            <TouchableOpacity
              onPress={() => setIsAddingBranch(false)}
              style={[styles.button, styles.cancelSaveBankBtn]}>
              <Text style={styles.cancelSaveBankBtnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsAddingBranch(false)}
              style={[styles.button]}>
              <Text style={styles.saveBankBtn}>Add Branch</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Editting branch modal */}
      <Modal
        animationType="slide"
        visible={isEdittingBranch}
        onRequestClose={() => {
          setIsEdittingBranch(!isEdittingBranch);
        }}>
        <View>
          <Text style={styles.modalTitle}>Edit a branch</Text>
          <View style={styles.inputGroup}>
            <Text>Bank:</Text>
            <SelectDropdown
              value={branchToEdit.bank}
              buttonStyle={styles.dropdown}
              buttonTextStyle={styles.dropdownText}
              dropdownIconPosition="right"
              defaultButtonText="Select Bank"
              // todo: use actual banks
              data={['Bank 1', 'Bank 2']}
              renderDropdownIcon={() => (
                <MaterialIcons name="arrow-drop-down" size={24} />
              )}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Route:</Text>
            <SelectDropdown
              value={branchToEdit.route}
              buttonStyle={styles.dropdown}
              buttonTextStyle={styles.dropdownText}
              dropdownIconPosition="right"
              defaultButtonText="Select Route"
              // todo: use actual routes
              data={['Route 1', 'Route 2']}
              renderDropdownIcon={() => (
                <MaterialIcons name="arrow-drop-down" size={24} />
              )}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Name of branch:</Text>
            <TextInput
              value={branchToEdit.name}
              style={styles.inputField}
              placeholder="Enter branch name"
              autofocus={true}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Address:</Text>
            <TextInput
              value={branchToEdit.address}
              style={styles.inputField}
              placeholder="Enter Address"
              autofocus={true}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Branch Code:</Text>
            <TextInput
              value={branchToEdit.code}
              style={styles.inputField}
              placeholder="Enter Branch Code"
              autofocus={true}
            />
          </View>
          <View style={styles.modalActionsWrap}>
            <TouchableOpacity
              onPress={() => setIsEdittingBranch(false)}
              style={[styles.button, styles.cancelSaveBankBtn]}>
              <Text style={styles.cancelSaveBankBtnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsEdittingBranch(false)}
              style={[styles.button]}>
              <Text style={styles.saveBankBtn}>Save Branch</Text>
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
      <View style={styles.actionBar}>
        <TouchableOpacity
          style={[styles.button, styles.actionBtn]}
          onPress={() => setIsAddingBank(true)}>
          <MaterialIcons name="add" size={24} color="#fff" />
          <Text style={styles.actionBtnText}>Add Bank</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          {banks?.map(bank => (
            <View key={bank.id} style={styles.bankCard}>
              <MaterialCommunityIcons
                style={styles.bankIcon}
                name="bank-outline"
                size={26}
              />
              <View style={styles.bankDetails}>
                <Text style={styles.bankName}>{bank.name}</Text>
                <View style={styles.descriptionWrap}>
                  <Feather
                    style={styles.descriptionIcon}
                    name="git-branch"
                    size={20}
                  />
                  <Text style={styles.descriptionValue}>
                    {bank.branchesCount} Branch(es)
                  </Text>
                </View>
                <View style={styles.descriptionWrap}>
                  <Feather
                    style={styles.descriptionIcon}
                    name="phone"
                    size={20}
                  />
                  <Text style={styles.descriptionValue}>{bank.contactNo}</Text>
                </View>
                <View style={styles.descriptionWrap}>
                  <Feather
                    style={styles.descriptionIcon}
                    name="hash"
                    size={20}
                  />
                  <Text style={styles.descriptionValue}>{bank.swiftCode}</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setBankBranchesToView({ ...bank });
                    setIsViewingBranches(true);
                  }}
                  style={[styles.button, styles.viewBranchesBtn]}>
                  <Text style={styles.viewBranchesBtnText}>View Branches</Text>
                </TouchableOpacity>
                <View style={styles.bankActions}>
                  <TouchableOpacity
                    onPress={() => {
                      setBankToEdit({ ...bank });
                      setIsEdittingBank(true);
                    }}>
                    <AntDesign name="edit" size={22} color="#3CB371" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => triggerDelete()}>
                    <AntDesign name="delete" size={22} color="#E55451" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Bank;
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    padding: 10,
  },
  button: {
    width: 120,
    height: 35,
    backgroundColor: '#3CB371',
    borderRadius: 20,
  },
  inputGroup: {
    width: '90%',
    height: 80,
    marginTop: 5,
    paddingLeft: 20,
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
  actionBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 5,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtnText: {
    color: '#fff',
    marginLeft: 5,
  },
  bankCard: {
    padding: 10,
    width: '94%',
    borderColor: '#3cb371',
    borderBottomWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bankIcon: {
    marginRight: 10,
  },
  bankDetails: {
    flex: 1,
  },
  bankName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  descriptionIcon: {
    marginRight: 5,
  },
  descriptionLabel: {
    marginRight: 5,
  },
  descriptionValue: {
    fontWeight: 'bold',
  },
  viewBranchesBtn: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#3cb371',
    marginBottom: 2,
  },
  viewBranchesBtnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    paddingTop: 8,
    color: '#3cb371',
  },
  bankActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  addBankBtnWrap: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingVertical: 10,
  },
  addBankBtn: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    paddingTop: 6,
  },
  modalSubContainerWrap: {
    width: width,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  modalSubContainer: {
    width: '100%',
  },
  modalBar: {
    width: width,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    paddingBottom: 5,
    marginVertical: 10,
    textAlign: 'center',
  },
  modalActionsWrap: {
    width: '90%',
    height: 140,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingLeft: 20,
  },
  cancelSaveBankBtn: {
    borderWidth: 2,
    borderColor: '#3CB371',
    backgroundColor: '#fff',
  },
  cancelSaveBankBtnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 8,
    color: '#3CB371',
  },
  saveBankBtn: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 8,
  },
  branchesBankWrap: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
  },
  branchesBankDescription: {
    fontSize: 16,
  },
  branchesBankName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3CB371',
  },
  branchCard: {
    padding: 10,
    width: '94%',
    borderColor: '#3cb371',
    borderBottomWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  branchDetailsWrap: {
    flex: 1,
  },
  branchName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  branchIcon: {
    marginRight: 10,
  },
  cardAction: {
    marginHorizontal: 2,
  },
});
