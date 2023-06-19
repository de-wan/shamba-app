import React, { useState } from 'react';
import {
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import OptionsMenu from 'react-native-options-menu';
import { Divider } from 'react-native-paper';

const PendingPayments = () => {
  const [isMakingPayment, setIsMakingPayment] = useState(false);
  const [paymentToMake, setPaymentToMake] = useState({});

  const [isViewingPayment, setIsViewingPayment] = useState(false);
  const [paymentToView, setPaymentToView] = useState({});

  const [pendingPayments, setPendingPayments] = useState([
    {
      currency: 'KES',
      current_balance: 49949320,
      first_name: 'James',
      id: '16830c09-bfa8-4d0b-a420-d0b6f5b39e25',
      other_names: 'Kimani',
      phone_no: '0732456009',
    },
    {
      currency: 'KES',
      current_balance: 1810,
      first_name: 'Frank',
      id: '28e1b169-06c7-4bb4-aebd-9745975ebbbc',
      other_names: 'Wachira',
      phone_no: '0735565789',
    },
    {
      currency: 'KES',
      current_balance: 49949320,
      first_name: 'James',
      id: '16830c09-bfa8-4d0b-a420-d0b6f5b3e25',
      other_names: 'Kimani',
      phone_no: '0732456009',
    },
  ]);

  const makePayment = payment => {
    setPaymentToMake({ ...payment });
    setIsMakingPayment(true);
  };

  return (
    <View>
      {/* View Pending Payment Modal */}
      <Modal
        animationType="slide"
        visible={isViewingPayment}
        onRequestClose={() => {
          setIsViewingPayment(!isViewingPayment);
        }}>
        <View style={styles.modalBar}>
          <TouchableOpacity onPress={() => setIsViewingPayment(false)}>
            <AntDesign name="arrowleft" size={22} />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>View Payment</Text>
        </View>
        <ScrollView>
          <View style={[styles.modalContent, styles.justifyBetween]}>
            <View>
              <Text style={styles.modalSectionTitle}>Farmer Details</Text>
              <View style={styles.detailCard}>
                <Feather style={styles.detailIcon} name="user" size={24} />
                <View style={styles.detailWrap}>
                  <Text>Name:</Text>
                  <Text style={styles.detailValue}>
                    {paymentToView.first_name} {paymentToView.other_names}
                  </Text>
                </View>
              </View>
              <View style={styles.detailCard}>
                <Feather style={styles.detailIcon} name="phone" size={24} />
                <View style={styles.detailWrap}>
                  <Text>Phone No:</Text>
                  <Text style={styles.detailValue}>
                    {paymentToView.phone_no}
                  </Text>
                </View>
              </View>
              <Text style={styles.modalSectionTitle}>Payment Details</Text>
              <View style={styles.detailCard}>
                <Entypo
                  style={styles.detailIcon}
                  name="text-document"
                  size={24}
                />
                <View style={styles.detailWrap}>
                  <Text>Reason:</Text>
                  <Text style={styles.detailValue}>Payment Reason</Text>
                </View>
              </View>
              <View style={styles.detailCard}>
                <Feather style={styles.detailIcon} name="calendar" size={24} />
                <View style={styles.detailWrap}>
                  <Text>Last Payment Date:</Text>
                  <Text style={styles.detailValue}>5th May 2023, 10:10</Text>
                </View>
              </View>
            </View>
            <View style={styles.unpaidDetailsWrap}>
              <View style={styles.unpaidCard}>
                <Text style={styles.unpaidLabel}>
                  Quantity of Unpaid Product:
                </Text>
                <Text style={styles.unpaidValue}>5</Text>
              </View>
              <Divider style={styles.verticalDivider} />
              <View style={styles.unpaidCard}>
                <Text style={styles.unpaidLabel}>Total Unpaid:</Text>
                <Text style={[styles.unpaidValue, styles.unpaidRedValue]}>
                  50,000
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </Modal>
      {/* Making payment modal */}
      <Modal
        animationType="slide"
        visible={isMakingPayment}
        onRequestClose={() => {
          setIsMakingPayment(!isMakingPayment);
        }}>
        <View style={styles.modalBar}>
          <TouchableOpacity onPress={() => setIsMakingPayment(false)}>
            <AntDesign name="arrowleft" size={22} />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Make a payment</Text>
          <TouchableOpacity onPress={() => setIsMakingPayment(false)}>
            <Text style={styles.modalSaveBtnText}>Save</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              width: '90%',
              height: 80,
              marginTop: 10,
              paddingLeft: 20,
            }}>
            <Text>Amount to pay(Ksh):</Text>
            <TextInput
              style={styles.inputField}
              placeholder="5,000"
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
            <Text>Full name of the person making the payment:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Jackson Mutuma"
              autofocus={true}
            />
          </View>

          <View style={styles.modalActionsWrap}>
            <TouchableOpacity
              onPress={() => setIsMakingPayment(false)}
              style={[styles.button, styles.cancelSaveItemBtn]}>
              <Text style={styles.cancelSaveItemBtnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsMakingPayment(false)}
              style={[styles.button]}>
              <Text style={styles.saveItemBtn}>Make Payment</Text>
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
      <ScrollView>
        <View style={styles.mainContainer}>
          {pendingPayments?.map(payment => (
            <TouchableOpacity
              onPress={() => {
                setPaymentToView({ ...payment });
                setIsViewingPayment(true);
              }}
              style={{
                height: 100,
                borderColor: '#90ee91',
                borderBottomWidth: 1,
                width: '100%',
                borderRadius: 10,
                paddingHorizontal: 10,
                marginBottom: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              key={payment.id}>
              <View style={{ marginRight: 20 }}>
                <FontAwesome5 name="money-bill-wave" size={22} />
              </View>
              <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <Text style={{ fontWeight: 'bold' }}>
                  {payment.first_name} {payment.other_names}
                </Text>
                <Text>{payment.phone_no}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  width: '30%',
                  justifyContent: 'space-around',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#3CB371',
                  }}>
                  {payment.currency} {payment.current_balance}
                </Text>
              </View>
              <View>
                <OptionsMenu
                  customButton={
                    <View style={styles.cardOptionsBtn}>
                      <FontAwesome5 name="ellipsis-v" size={22} />
                    </View>
                  }
                  options={['View', 'Make Payment', 'Cancel']}
                  actions={[
                    () => {
                      setPaymentToView(payment);
                      setIsViewingPayment(true);
                    },
                    () => makePayment(payment),
                    () => {},
                  ]}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default PendingPayments;
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    padding: 5,
  },
  verticalDivider: {
    width: 1,
    height: '100%',
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
  searchWrap: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 5,
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
  cardOptionsBtn: {
    width: 45,
    height: 45,
    borderRadius: 75,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
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
    flex: 1,
  },
  modalSaveBtnText: {
    color: '#3cb371',
  },
  modalContent: {
    padding: 10,
    height: height - 100,
  },
  modalSectionTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  justifyBetween: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  modalActionsWrap: {
    width: '90%',
    height: 140,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingLeft: 20,
  },
  cancelSaveItemBtn: {
    borderWidth: 2,
    borderColor: '#3CB371',
    backgroundColor: '#fff',
  },
  cancelSaveItemBtnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 8,
    color: '#3CB371',
  },
  saveItemBtn: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 8,
  },
  detailCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    borderColor: '#3cb371',
    borderBottomWidth: 1,
  },
  detailIcon: {
    marginRight: 10,
  },
  detailValue: {
    fontWeight: 'bold',
  },
  unpaidDetailsWrap: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  unpaidCard: {
    marginHorizontal: 10,
  },
  unpaidValue: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'right',
  },
  unpaidRedValue: {
    color: 'red',
  },
});
