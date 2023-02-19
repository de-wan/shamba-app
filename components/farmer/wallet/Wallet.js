import React, { useState } from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions, TouchableOpacity, Modal, TextInput } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

const Tab = createMaterialTopTabNavigator();

const CreditScreen = () => {
    const [expectedYield, setExpectedYield] = useState(null)
    const [expectedAmt, setExpectedAmt] = useState(null)
    const calculateAmt = () => {
        console.log(expectedYield)
        setExpectedAmt(expectedYield * 60)
    }
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <Text style={{ width: '100%', textAlign: "center", fontSize: 16, fontWeight: "bold", marginVertical: 10 }}>Credit Score</Text>
            <View style={{ width: '90%', height: 90, borderRadius: 10, backgroundColor: "#3CB371", flexDirection: 'column', justifyContent: 'space-around', paddingHorizontal: 10, marginBottom: 20, marginLeft: 18 }}>
                <Text style={{ textAlign: 'center', fontWeight: "bold", color: '#fff', fontSize: 18 }}>Total Credit Score</Text>
                <Text style={{ textAlign: 'center', color: '#fff' }}>KSh 959,500</Text>
            </View>

            <View style={{ width: '100%', marginTop: 10 }}>
                <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 18 }}>Calculate expected amount:</Text>
                <View style={{ width: "90%", height: 80, marginTop: 10, paddingLeft: 20 }}>
                    <Text>Select product:</Text>
                    <TextInput style={styles.inputField} placeholder='Milk' />
                </View>
                <View style={{ width: "90%", height: 80, marginTop: 10, paddingLeft: 20 }}>
                    <Text>Enter total expected yields:</Text>
                    <TextInput style={styles.inputField} placeholder='200' onChangeText={expectedValue => setExpectedYield(expectedValue)} />
                </View>
                {expectedYield !== null && <View style={{ width: '100%', height: 40, justifyContent: "center", alignItems: 'flex-end', paddingRight: 20 }}>
                    <TouchableOpacity
                        onPress={calculateAmt}
                        style={[styles.button, { width: 100 }]}
                    >
                        <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 14, paddingTop: 6 }}>Calculate</Text>
                    </TouchableOpacity>
                </View>}
                {expectedAmt !== null && <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Expected Amount: {expectedAmt}</Text>}
            </View>
        </View>
    )
}

const WalletScreen = () => {
    const [withdrawModal, setWithdrawModal] = useState(false)
    const [topUpModal, setTopUpModal] = useState(false)

    return (
        <View>
            <Modal
                animationType="slide"
                visible={withdrawModal}
                onRequestClose={() => {
                    setWithdrawModal(!withdrawModal);
                }}
            >
                <ScrollView>
                    <Text style={styles.title}>Withdraw</Text>
                    <View style={{ width: "90%", height: 80, marginTop: 5, paddingLeft: 20 }}>
                        <Text>Enter amount:</Text>
                        <TextInput style={styles.inputField} placeholder='4,900' autofocus={true} />
                    </View>
                    <View style={{ width: "90%", height: 80, marginTop: 5, paddingLeft: 20 }}>
                        <Text>Select withdraw to:</Text>
                        <TextInput style={styles.inputField} placeholder='Equity Bank' />
                    </View>
                    <View style={{ width: "90%", height: 80, marginTop: 10, paddingLeft: 20 }}>
                        <Text>Enter account number/phone number</Text>
                        <TextInput style={styles.inputField} placeholder='1234 5678 9012 3456' />
                    </View>
                    <View style={{ width: "90%", height: 80, marginTop: 10, paddingLeft: 20 }}>
                        <Text>Name of recipient</Text>
                        <TextInput style={styles.inputField} placeholder='Jane Doe' />
                    </View>
                    <View style={{ width: "90%", height: 140, flexDirection: "row", justifyContent: "space-between", marginVertical: 20, paddingLeft: 20 }}>
                        <TouchableOpacity
                            onPress={() => setWithdrawModal(false)}
                            style={styles.button} >
                            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 16, paddingTop: 6 }}>Withdraw</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setWithdrawModal(false)}
                            style={styles.button} >
                            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 16, paddingTop: 6 }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Modal>
            <Modal
                animationType="slide"
                visible={topUpModal}
                onRequestClose={() => {
                    setTopUpModal(!topUpModal);
                }}
            >
                <ScrollView>
                    <Text style={styles.title}>TopUp </Text>
                    <View style={{ width: "90%", height: 80, marginTop: 5, paddingLeft: 20 }}>
                        <Text>Enter amount:</Text>
                        <TextInput style={styles.inputField} placeholder='4,900' autofocus={true} />
                    </View>
                    <View style={{ width: "90%", height: 80, marginTop: 5, paddingLeft: 20 }}>
                        <Text>Select topup from:</Text>
                        <TextInput style={styles.inputField} placeholder='Equity Bank' />
                    </View>
                    <View style={{ width: "90%", height: 80, marginTop: 10, paddingLeft: 20 }}>
                        <Text>Enter account number/phone number</Text>
                        <TextInput style={styles.inputField} placeholder='1234 5678 9012 3456' />
                    </View>
                    <View style={{ width: "90%", height: 80, marginTop: 10, paddingLeft: 20 }}>
                        <Text>Name of account holder</Text>
                        <TextInput style={styles.inputField} placeholder='Jane Doe' />
                    </View>
                    <View style={{ width: "90%", height: 140, flexDirection: "row", justifyContent: "space-between", marginVertical: 20, paddingLeft: 20 }}>
                        <TouchableOpacity
                            onPress={() => setTopUpModal(false)}
                            style={styles.button} >
                            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 16, paddingTop: 6 }}>TopUp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setTopUpModal(false)}
                            style={styles.button} >
                            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 16, paddingTop: 6 }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Modal>
            <View>
                <Text style={{ width: '100%', textAlign: "center", fontSize: 16, fontWeight: "bold", marginVertical: 5 }}>Your wallet</Text>
                <View style={{ width: '90%', height: 150, borderRadius: 10, backgroundColor: "#3CB371", flexDirection: 'column', justifyContent: 'space-around', paddingHorizontal: 10, marginBottom: 10, marginLeft: 20 }}>
                    <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ color: '#fff' }}>Current Balance</Text>
                        <Text style={{ color: '#fff' }}>Ksh 61,648</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ color: '#fff' }}>Pending payment</Text>
                        <Text style={{ color: '#fff' }}>40,880</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ color: '#fff' }}>Expected payment</Text>
                        <Text style={{ color: '#fff' }}>10,300</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => setTopUpModal(true)}
                            style={[styles.button, { backgroundColor: '#E9AB17' }]}
                        >
                            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 16, paddingTop: 6 }}>TopUp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setWithdrawModal(true)}
                            style={[styles.button, { backgroundColor: '#E9AB17' }]}
                        >
                            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 16, paddingTop: 6 }}>Withdraw</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ width: '100%', textAlign: "center", fontSize: 16, fontWeight: "bold", marginVertical: 5 }}>Recent transactions</Text>
                <View style={{ width: '95%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, marginVertical: 10, marginLeft: 5 }}>
                    <TextInput style={[styles.inputField, { width: '84%', marginTop: 0 }]} placeholder='Search' />
                    <TouchableOpacity style={{ width: 45, height: 45, borderRadius: 75, backgroundColor: "#3cb371", display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                        <MaterialIcons name='search' size={24} color='#fff' />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '95%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 15, marginHorizontal: 10, paddingRight: 10 }}>
                    <TouchableOpacity
                        style={[styles.button, { width: 100 }]}
                    >
                        <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 14, paddingTop: 6 }}>TopUp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { width: 100 }]}
                    >
                        <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 14, paddingTop: 6 }}>Withdraw</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={{ width: '100%', marginBottom: 20 }}>
                    <View style={{ height: 100, borderColor: "#90ee91", borderBottomWidth: 1, width: '100%', borderRadius: 10, paddingHorizontal: 10, marginBottom: 5, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }} >
                        <View style={{ width: '15%' }}><Ionicons name='wallet-outline' size={26} /></View>
                        <View style={{ width: '55%', justifyContent: 'flex-start' }}>
                            <Text style={{ fontWeight: "bold" }}>Transaction No: QIW2905850</Text>
                            <Text>Date: 19-03-2022;1439hrs</Text>
                            <Text>Top Up</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '30%', justifyContent: 'flex-start', paddingLeft: 20 }}>
                            <Text style={{ color: '#3CB371', fontWeight: 'bold', fontSize: 18 }}>Ksh 1,000</Text>
                        </View>
                    </View>
                    <View style={{ height: 100, borderColor: "#90ee91", borderBottomWidth: 1, width: '100%', borderRadius: 10, paddingHorizontal: 10, marginBottom: 5, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }} >
                        <View style={{ width: '15%' }}><Ionicons name='wallet-outline' size={26} /></View>
                        <View style={{ width: '55%', justifyContent: 'flex-start' }}>
                            <Text style={{ fontWeight: "bold" }}>Transaction No: QIW2905850</Text>
                            <Text>Date: 19-03-2022;1439hrs</Text>
                            <Text>Withdraw</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '30%', justifyContent: 'flex-start', paddingLeft: 20 }}>
                            <Text style={{ color: '#3CB371', fontWeight: 'bold', fontSize: 18 }}>Ksh 1,000</Text>
                        </View>
                    </View>
                    <View style={{ height: 100, borderColor: "#90ee91", borderBottomWidth: 1, width: '100%', borderRadius: 10, paddingHorizontal: 10, marginBottom: 5, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }} >
                        <View style={{ width: '15%' }}><Ionicons name='wallet-outline' size={26} /></View>
                        <View style={{ width: '55%', justifyContent: 'flex-start' }}>
                            <Text style={{ fontWeight: "bold" }}>Transaction No: QIW2905850</Text>
                            <Text>Date: 19-03-2022;1439hrs</Text>
                            <Text>Top Up</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '30%', justifyContent: 'flex-start', paddingLeft: 20 }}>
                            <Text style={{ color: '#3CB371', fontWeight: 'bold', fontSize: 18 }}>Ksh 1,000</Text>
                        </View>
                    </View>
                    <View style={{ height: 100, borderColor: "#90ee91", borderBottomWidth: 1, width: '100%', borderRadius: 10, paddingHorizontal: 10, marginBottom: 5, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }} >
                        <View style={{ width: '15%' }}><Ionicons name='wallet-outline' size={26} /></View>
                        <View style={{ width: '55%', justifyContent: 'flex-start' }}>
                            <Text style={{ fontWeight: "bold" }}>Transaction No: QIW2905850</Text>
                            <Text>Date: 19-03-2022;1439hrs</Text>
                            <Text>Withdraw</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '30%', justifyContent: 'flex-start', paddingLeft: 20 }}>
                            <Text style={{ color: '#3CB371', fontWeight: 'bold', fontSize: 18 }}>Ksh 1,000</Text>
                        </View>
                    </View>

                </ScrollView>
            </View>
        </View>
    )
}

const PurchaseScreen = () => {
    const [viewAllModal, setViewAllModal] = useState(false)
    const [purchaseModal, setPurchaseModal] = useState(false)
    const [expectedQuantity, setExpectedQuantity] = useState(null)
    const [expectedAmt, setExpectedAmt] = useState(null)

    const purchase = () => {
        setExpectedAmt(expectedQuantity * 60)
    }

    return (
        <View>
            <Modal
                animationType="slide"
                visible={viewAllModal}
                onRequestClose={() => {
                    setViewAllModal(!viewAllModal);
                }}
            >
                <View style={{ width: "100%", height: 30, display: 'flex', justifyContent: "flex-start" }}>
                    <TouchableOpacity
                        onPress={() => setViewAllModal(false)}
                    >
                        <Entypo name='chevron-left' size={24} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <Text style={styles.title}>Your Purchases</Text>
                    <View style={{ height: 100, borderColor: "#90ee91", borderBottomWidth: 1, width: '100%', borderRadius: 10, paddingHorizontal: 10, marginBottom: 5, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }} >
                        <View style={{ width: '15%' }}><Entypo name='shopping-bag' size={26} /></View>
                        <View style={{ width: '55%', justifyContent: 'flex-start' }}>
                            <Text style={{ fontWeight: "bold" }}>Fertilizer</Text>
                            <Text>Quantity: 6kgs</Text>
                            <Text>Total Amount: Ksh 360</Text>
                        </View>
                        <View style={{ flexDirection: 'column', width: '30%', height: '80%', justifyContent: 'space-between', paddingLeft: 20 }}>
                            <TouchableOpacity style={{ width: 90, height: 30, backgroundColor: '#E9AB17', borderRadius: 20, marginTop: 10 }}>
                                <Text style={{ fontSize: 12, color: '#fff', textAlign: "center", paddingTop: 5 }}>Delivered</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ height: 100, borderColor: "#90ee91", borderBottomWidth: 1, width: '100%', borderRadius: 10, paddingHorizontal: 10, marginBottom: 5, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }} >
                        <View style={{ width: '15%' }}><Entypo name='shopping-bag' size={26} /></View>
                        <View style={{ width: '55%', justifyContent: 'flex-start' }}>
                            <Text style={{ fontWeight: "bold" }}>Cream Milk</Text>
                            <Text>Quantity: 2 litres</Text>
                            <Text>Total Amount: Ksh 180</Text>
                        </View>
                        <View style={{ flexDirection: 'column', width: '30%', height: '80%', justifyContent: 'space-between', paddingLeft: 20 }}>
                            <TouchableOpacity style={{ width: 90, height: 30, backgroundColor: '#E55451', borderRadius: 20, marginTop: 10 }}>
                                <Text style={{ fontSize: 12, color: '#fff', textAlign: "center", paddingTop: 5 }}>Pending</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 90, height: 30, backgroundColor: '#E55451', borderRadius: 20, marginTop: 10 }}>
                                <Text style={{ fontSize: 12, color: '#fff', textAlign: "center", paddingTop: 5 }}>Withdraw</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ height: 100, borderColor: "#90ee91", borderBottomWidth: 1, width: '100%', borderRadius: 10, paddingHorizontal: 10, marginBottom: 5, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }} >
                        <View style={{ width: '15%' }}><Entypo name='shopping-bag' size={26} /></View>
                        <View style={{ width: '55%', justifyContent: 'flex-start' }}>
                            <Text style={{ fontWeight: "bold" }}>Milk</Text>
                            <Text>Quantity: 10 litres</Text>
                            <Text>Total Amount: Ksh 600</Text>
                        </View>
                        <View style={{ flexDirection: 'column', width: '30%', height: '80%', justifyContent: 'space-between', paddingLeft: 20 }}>
                            <TouchableOpacity style={{ width: 90, height: 30, backgroundColor: '#E9AB17', borderRadius: 20, marginTop: 10 }}>
                                <Text style={{ fontSize: 12, color: '#fff', textAlign: "center", paddingTop: 5 }}>Delivered</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Modal>
            <Modal
                animationType="slide"
                visible={purchaseModal}
                onRequestClose={() => {
                    setPurchaseModal(!purchaseModal);
                }}
            >
                <ScrollView>
                    <Text style={styles.title}>Fertilizer </Text>
                    <View style={{ width: "90%", height: 80, marginTop: 5, paddingLeft: 20 }}>
                        <Text>Enter quantity:</Text>
                        <TextInput style={styles.inputField} placeholder='10' onChangeText={expectedValue => setExpectedQuantity(expectedValue)} />
                    </View>
                    {expectedAmt !== null && <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Total Amount: {expectedAmt}</Text>}
                    <View style={{ width: "100%", height: 140, flexDirection: "row", justifyContent: "space-between", marginVertical: 20, paddingHorizontal: 20 }}>
                        {expectedQuantity !== null && <TouchableOpacity
                            onPress={purchase}
                            style={[styles.button, { width: 120 }]} >
                            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 16, paddingTop: 6 }}>See Amount</Text>
                        </TouchableOpacity>}
                        {expectedQuantity !== null && <TouchableOpacity
                            onPress={() => setPurchaseModal(false)}
                            style={[styles.button, { width: 80 }]} >
                            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 16, paddingTop: 6 }}>Pay</Text>
                        </TouchableOpacity>}
                        <TouchableOpacity
                            onPress={() => setPurchaseModal(false)}
                            style={[styles.button, { width: 80 }]} >
                            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 16, paddingTop: 6 }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Modal>
            <View>
                <Text style={{ width: '100%', textAlign: "center", fontSize: 16, fontWeight: "bold", marginVertical: 5 }}>Purchases</Text>
                <View style={{ width: '90%', height: 150, borderRadius: 10, backgroundColor: "#3CB371", flexDirection: 'column', justifyContent: 'space-around', paddingHorizontal: 10, marginBottom: 10, marginLeft: 20 }}>
                    <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ color: '#fff' }}>Total Purchases</Text>
                        <Text style={{ color: '#fff' }}>3</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ color: '#fff' }}>Pending Purchases</Text>
                        <Text style={{ color: '#fff' }}>1</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => setViewAllModal(true)}
                            style={[styles.button, { backgroundColor: '#E9AB17' }]}
                        >
                            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 16, paddingTop: 6 }}>View Purchases</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ width: '100%', textAlign: "center", fontSize: 16, fontWeight: "bold", marginVertical: 5 }}>Items</Text>
                <View style={{ width: '95%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, marginVertical: 10, marginLeft: 5 }}>
                    <TextInput style={[styles.inputField, { width: '84%', marginTop: 0 }]} placeholder='Search' />
                    <TouchableOpacity style={{ width: 45, height: 45, borderRadius: 75, backgroundColor: "#3cb371", display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                        <MaterialIcons name='search' size={24} color='#fff' />
                    </TouchableOpacity>
                </View>

                <ScrollView style={{ width: '100%', marginBottom: 20 }}>
                    <View style={{ height: 90, borderColor: "#90ee91", borderBottomWidth: 1, width: '100%', borderRadius: 10, paddingHorizontal: 10, marginBottom: 5, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }} >
                        <View style={{ width: '15%' }}><Entypo name='shopping-bag' size={26} /></View>
                        <View style={{ width: '55%', justifyContent: 'flex-start' }}>
                            <Text style={{ fontWeight: "bold" }}>CAN Fertilizer</Text>
                            <Text>Ksh 80/unit</Text>
                        </View>
                        <TouchableOpacity style={{ width: 90, height: 30, backgroundColor: '#E55451', borderRadius: 20, marginTop: 10 }} onPress={() => setPurchaseModal(true)}>
                            <Text style={{ fontSize: 12, color: '#fff', textAlign: "center", paddingTop: 5 }}>Purchase</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 90, borderColor: "#90ee91", borderBottomWidth: 1, width: '100%', borderRadius: 10, paddingHorizontal: 10, marginBottom: 5, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }} >
                        <View style={{ width: '15%' }}><Entypo name='shopping-bag' size={26} /></View>
                        <View style={{ width: '55%', justifyContent: 'flex-start' }}>
                            <Text style={{ fontWeight: "bold" }}>Cream Milk</Text>
                            <Text>Ksh 90/unit</Text>
                        </View>
                        <TouchableOpacity style={{ width: 90, height: 30, backgroundColor: '#E55451', borderRadius: 20, marginTop: 10 }} onPress={() => setPurchaseModal(true)}>
                            <Text style={{ fontSize: 12, color: '#fff', textAlign: "center", paddingTop: 5 }}>Purchase</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 90, borderColor: "#90ee91", borderBottomWidth: 1, width: '100%', borderRadius: 10, paddingHorizontal: 10, marginBottom: 5, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }} >
                        <View style={{ width: '15%' }}><Entypo name='shopping-bag' size={26} /></View>
                        <View style={{ width: '55%', justifyContent: 'flex-start' }}>
                            <Text style={{ fontWeight: "bold" }}>Milk(Grade 1)</Text>
                            <Text>Ksh 60/unit</Text>
                        </View>
                        <TouchableOpacity style={{ width: 90, height: 30, backgroundColor: '#E55451', borderRadius: 20, marginTop: 10 }} onPress={() => setPurchaseModal(true)}>
                            <Text style={{ fontSize: 12, color: '#fff', textAlign: "center", paddingTop: 5 }}>Purchase</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const PaymentScreen = () => {
    const [addBillModal, setAddBillModal] = useState(false)
    const [upgradeModal, setUpgradeModal] = useState(false)
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <Modal
                animationType="slide"
                visible={addBillModal}
                onRequestClose={() => {
                    setAddBillModal(!addBillModal);
                }}
            >
                <ScrollView>
                    <Text style={styles.title}>Bill</Text>
                    <View style={{ width: "90%", height: 80, marginTop: 5, paddingLeft: 20 }}>
                        <Text>Name of bill:</Text>
                        <TextInput style={styles.inputField} placeholder='Electricity' autofocus={true} />
                    </View>
                    <View style={{ width: "90%", height: 80, marginTop: 5, paddingLeft: 20 }}>
                        <Text>Choose payment plan:</Text>
                        <TextInput style={styles.inputField} placeholder='Monthly' />
                    </View>
                    <View style={{ width: "90%", height: 80, marginTop: 10, paddingLeft: 20 }}>
                        <Text>Amount to pay</Text>
                        <TextInput style={styles.inputField} placeholder='1,200' />
                    </View>
                    <View style={{ width: "90%", height: 80, marginTop: 10, paddingLeft: 20 }}>
                        <Text>Choose bank name</Text>
                        <TextInput style={styles.inputField} placeholder='Equity bank' />
                    </View>
                    <View style={{ width: "90%", height: 80, marginTop: 10, paddingLeft: 20 }}>
                        <Text>Account number of the recepient</Text>
                        <TextInput style={styles.inputField} placeholder='1234 5678 9012' />
                    </View>
                    <View style={{ width: "90%", height: 140, flexDirection: "row", justifyContent: "space-between", marginVertical: 20, paddingLeft: 20 }}>
                        <TouchableOpacity
                            onPress={() => setAddBillModal(false)}
                            style={styles.button} >
                            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 16, paddingTop: 6 }}>Add Bill</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setAddBillModal(false)}
                            style={styles.button} >
                            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 16, paddingTop: 6 }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Modal>
            <Modal
                animationType="slide"
                visible={upgradeModal}
                onRequestClose={() => {
                    setUpgradeModal(!upgradeModal);
                }}
            >
                <ScrollView>
                    <Text style={styles.title}>Bill</Text>
                    <View style={{ width: "90%", height: 80, marginTop: 5, paddingLeft: 20 }}>
                        <Text>Select package(monthly charges will be deducted from e-wallet):</Text>
                        <TextInput style={styles.inputField} placeholder='Standard Plan(Ksh 120)' autofocus={true} />
                    </View>

                    <View style={{ width: "90%", height: 140, flexDirection: "row", justifyContent: "space-between", marginVertical: 20, paddingLeft: 20 }}>
                        <TouchableOpacity
                            onPress={() => setUpgradeModal(false)}
                            style={styles.button} >
                            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 16, paddingTop: 6 }}>Upgrade</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setUpgradeModal(false)}
                            style={styles.button} >
                            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 16, paddingTop: 6 }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Modal>
            <Text style={{ width: '100%', textAlign: "center", fontSize: 16, fontWeight: "bold", marginVertical: 10 }}>Automate Bill Payments</Text>
            <View style={{ width: '100%', height: 40, justifyContent: "center", alignItems: 'flex-end', paddingRight: 20 }}>
                <TouchableOpacity
                    onPress={() => setAddBillModal(true)}
                    style={styles.button}
                >
                    <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 14, paddingTop: 6 }}>Add Bill</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{ width: '100%', flexDirection: "column", alignItems: 'center', justifyContent: "center" }}>
                <View style={{ width: '90%', height: 250, borderRadius: 10, backgroundColor: "#3CB371", flexDirection: 'column', justifyContent: 'space-around', paddingHorizontal: 10, marginBottom: 10, marginLeft: 20 }}>
                    <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ width: 200, display: 'flex', flexDirection: 'row' }}>
                            <Entypo name='check' size={22} color='#fff' />
                            <Text style={{ color: '#fff', marginLeft: 5 }}>Free plan(Ksh 0/pm)</Text>
                        </View>
                        <TouchableOpacity style={{ width: 90, height: 30, backgroundColor: '#E55451', borderRadius: 20, marginTop: 10 }}>
                            <Text style={{ fontSize: 12, color: '#fff', textAlign: "center", paddingTop: 5 }}>View</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ color: '#fff' }}>Standard plan(Ksh 120/pm)</Text>
                        <TouchableOpacity style={{ width: 90, height: 30, backgroundColor: '#E55451', borderRadius: 20, marginTop: 10 }}>
                            <Text style={{ fontSize: 12, color: '#fff', textAlign: "center", paddingTop: 5 }}>View</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ color: '#fff' }}>Premium plan(Ksh 200/pm)</Text>
                        <TouchableOpacity style={{ width: 90, height: 30, backgroundColor: '#E55451', borderRadius: 20, marginTop: 10 }}>
                            <Text style={{ fontSize: 12, color: '#fff', textAlign: "center", paddingTop: 5 }}>View</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ color: '#fff' }}>Professional plan(Ksh 300/pm)</Text>
                        <TouchableOpacity style={{ width: 90, height: 30, backgroundColor: '#E55451', borderRadius: 20, marginTop: 10 }}>
                            <Text style={{ fontSize: 12, color: '#fff', textAlign: "center", paddingTop: 5 }}>View</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', justifyContent: "center", alignItems: "center", marginBottom: 10 }}>
                        <TouchableOpacity
                            onPress={() => setUpgradeModal(true)}
                            style={[styles.button, { backgroundColor: '#E9AB17' }]}
                        >
                            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 16, paddingTop: 6 }}>Upgrade</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 100, borderColor: "#90ee91", borderBottomWidth: 1, width: '95%', borderRadius: 10, paddingHorizontal: 10, marginBottom: 5, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }} >
                    <View style={{ width: '10%' }}><Ionicons name='wallet-outline' size={26} /></View>
                    <View style={{ width: '60%', justifyContent: 'flex-start', marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>Electricity</Text>
                        <Text>Type: Monthly</Text>
                        <Text>Amount: Ksh 1,200</Text>
                    </View>
                    <View style={{ width: '30%', height: '100%', flexDirection: "column", justifyContent: "space-around" }}>
                        <TouchableOpacity style={{ width: 90, height: 30, backgroundColor: '#E55451', borderRadius: 20, marginTop: 10 }}>
                            <Text style={{ fontSize: 12, color: '#fff', textAlign: "center", paddingTop: 5 }}>View</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20 }}>
                            <AntDesign name='edit' size={20} color='#3CB371' />
                            <AntDesign name='delete' size={20} color='#E55451' />
                        </View>
                    </View>
                </View>
                <View style={{ height: 100, borderColor: "#90ee91", borderBottomWidth: 1, width: '95%', borderRadius: 10, paddingHorizontal: 10, marginBottom: 5, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }} >
                    <View style={{ width: '10%' }}><Ionicons name='wallet-outline' size={26} /></View>
                    <View style={{ width: '60%', justifyContent: 'flex-start', marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>Water</Text>
                        <Text>Type: Monthly</Text>
                        <Text>Amount: Ksh 1,200</Text>
                    </View>
                    <View style={{ width: '30%', height: '100%', flexDirection: "column", justifyContent: "space-around" }}>
                        <TouchableOpacity style={{ width: 90, height: 30, backgroundColor: '#E55451', borderRadius: 20, marginTop: 10 }}>
                            <Text style={{ fontSize: 12, color: '#fff', textAlign: "center", paddingTop: 5 }}>View</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20 }}>
                            <AntDesign name='edit' size={20} color='#3CB371' />
                            <AntDesign name='delete' size={20} color='#E55451' />
                        </View>
                    </View>
                </View>
                <View style={{ height: 100, borderColor: "#90ee91", borderBottomWidth: 1, width: '95%', borderRadius: 10, paddingHorizontal: 10, marginBottom: 5, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }} >
                    <View style={{ width: '10%' }}><Ionicons name='wallet-outline' size={26} /></View>
                    <View style={{ width: '60%', justifyContent: 'flex-start', marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>Parking fees</Text>
                        <Text>Type: Daily</Text>
                        <Text>Amount: Ksh 200</Text>
                    </View>
                    <View style={{ width: '30%', height: '100%', flexDirection: "column", justifyContent: "space-around" }}>
                        <TouchableOpacity style={{ width: 90, height: 30, backgroundColor: '#E55451', borderRadius: 20, marginTop: 10 }}>
                            <Text style={{ fontSize: 12, color: '#fff', textAlign: "center", paddingTop: 5 }}>View</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20 }}>
                            <AntDesign name='edit' size={20} color='#3CB371' />
                            <AntDesign name='delete' size={20} color='#E55451' />
                        </View>
                    </View>
                </View>
                <View style={{ height: 100, borderColor: "#90ee91", borderBottomWidth: 1, width: '95%', borderRadius: 10, paddingHorizontal: 10, marginBottom: 5, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }} >
                    <View style={{ width: '10%' }}><Ionicons name='wallet-outline' size={26} /></View>
                    <View style={{ width: '60%', justifyContent: 'flex-start', marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>Car Loan</Text>
                        <Text>Type: Monthly</Text>
                        <Text>Amount: Ksh 2,500</Text>
                    </View>
                    <View style={{ width: '30%', height: '100%', flexDirection: "column", justifyContent: "space-around" }}>
                        <TouchableOpacity style={{ width: 90, height: 30, backgroundColor: '#E55451', borderRadius: 20, marginTop: 10 }}>
                            <Text style={{ fontSize: 12, color: '#fff', textAlign: "center", paddingTop: 5 }}>View</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20 }}>
                            <AntDesign name='edit' size={20} color='#3CB371' />
                            <AntDesign name='delete' size={20} color='#E55451' />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const Wallet = () => {
    return (
        <View style={{ flex: 1, height: height }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#fff',
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarStyle: { backgroundColor: '#3CB371' },
                }}
            >
                <Tab.Screen name="Your Wallet" component={WalletScreen} />
                <Tab.Screen name="Credit" component={CreditScreen} />
                <Tab.Screen name="Purchases" component={PurchaseScreen} />
                <Tab.Screen name="Bills" component={PaymentScreen} />
            </Tab.Navigator>
        </View>
    )
}
export default Wallet;

const { width, height } = Dimensions.get("window")
const styles = StyleSheet.create({
    dashContainer: {
        width: width,
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    button: {
        width: 140,
        height: 35,
        backgroundColor: "#3CB371",
        borderRadius: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        paddingBottom: 5,
        marginVertical: 10,
        textAlign: 'center',
    },
    inputField: {
        width: "100%",
        height: 45,
        textAlign: "left",
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000"
    },
})