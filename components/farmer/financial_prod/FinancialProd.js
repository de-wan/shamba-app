import React, {useState} from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions , TouchableOpacity, Modal, TextInput} from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { LoansSavingsPie } from '../../../charts/Chart';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();
const {width, height} = Dimensions.get("window")

const DashboardScreen = () => {
    const navigation = useNavigation()
    return(
        <View>
            <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:5}}>Financial Summary</Text>
            <View style={{ width:'90%', height:100, borderRadius:10, backgroundColor:"#3CB371", flexDirection:'column', justifyContent:'space-around', paddingHorizontal:10, marginBottom:10, marginLeft:20}}>
                <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                    <Text style={{color:'#fff'}}>Total Loan Plans</Text>
                    <Text style={{color:'#fff'}}>3</Text>
                </View>
                <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                    <Text style={{color:'#fff'}}>Total Savings Plan</Text>
                    <Text style={{color:'#fff'}}>2</Text>
                </View>
            </View>
            <View style={{width:350, height:100, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginVertical:10, marginHorizontal:20}}>
                <TouchableOpacity onPress={() => navigation.navigate('Financial Products', {screen: 'Loans'})} style={{width:120, height:'90%', backgroundColor:"#fff", borderRadius:10,  elevation: 10, shadowColor: '#454545', flexDirection:"column",alignItems:"center", justifyContent:'space-around'}}>
                    <Ionicons name='wallet-outline' size={35} color="#3CB371"/>
                    <Text style={{fontSize:14}}>Total Loan</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Financial Products', {screen: 'Savings'})} style={{width:120, height:'90%', backgroundColor:"#fff", borderRadius:10,  elevation: 20, shadowColor: '#454545', flexDirection:"column",alignItems:"center", justifyContent:'space-around'}}>
                    <Ionicons name='wallet-outline' size={35} color="#3CB371"/>
                    <Text style={{fontSize:14}}>Total Savings</Text>
                </TouchableOpacity>
            </View>  
            <Text style={{width:'100%', textAlign:"center",fontSize:14, fontWeight:"bold", marginVertical:5}}>Loans vs Savings</Text>
            <View style={{width:370, height:280}}>
                <LoansSavingsPie/>
            </View>
        </View>    
    )
}
const LoanScreen = () => {
    const [addLoanModal, setAddLoanModal] = useState(false)
    const [payLoanModal, setPayLoanModal] = useState(false)
    const [viewPaymentModal, setViewPaymentModal] = useState(false)

    return(
        <View>
            <Modal
                animationType="slide"
                visible={addLoanModal}
                onRequestClose={() => {
                    setAddLoanModal(!addLoanModal);
                }}
            >
                <ScrollView>
                    <Text style={styles.title}>Apply for loan</Text> 
                    <View style={{width:"90%", height: 80, marginTop:5, paddingLeft:20}}>
                        <Text>Enter amount:</Text> 
                        <TextInput style={styles.inputField} placeholder='4,900' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:5, paddingLeft:20}}>
                        <Text>Enter purpose:</Text> 
                        <TextInput style={styles.inputField} placeholder='Equity Bank'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Enter your account number</Text> 
                        <TextInput style={styles.inputField} placeholder='1234 5678 9012 3456'/>
                    </View>
                    <View style={{width:"90%", height: 140, flexDirection:"row",justifyContent:"space-between", marginVertical:20,  paddingLeft:20}}>
                        <TouchableOpacity 
                            onPress={() => setAddLoanModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 6}}>Apply loan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setAddLoanModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 6}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Modal>
            <Modal
                animationType="slide"
                visible={viewPaymentModal}
                onRequestClose={() => {
                    setViewPaymentModal(!viewPaymentModal);
                }}
            >
                <ScrollView>
                    <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:5}}>Car Loan(8% interest rate p.a)</Text>
                    <View style={{ width:'90%', height:100, borderRadius:10, backgroundColor:"#3CB371", flexDirection:'column', justifyContent:'space-around', paddingHorizontal:10, marginBottom:10, marginLeft:20}}>
                        <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                            <Text style={{color:'#fff'}}>Total loan amount(including interest)</Text>
                            <Text style={{color:'#fff', fontWeight:'bold'}}>Ksh. 280,000</Text>
                        </View>
                        <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                            <Text style={{color:'#fff'}}>Paid loan amount</Text>
                            <Text style={{color:'#fff', fontWeight:'bold'}}>Ksh. 100,000</Text>
                        </View>
                        <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                            <Text style={{color:'#fff'}}>Pending loan amount</Text>
                            <Text style={{color:'#fff', fontWeight:'bold'}}>Ksh. 180,000</Text>
                        </View>
                    </View>
                    <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:5}}>Payment Details</Text>
                    <View style={{width:'100%', height:40, justifyContent:"center", alignItems:'flex-end', paddingRight:20}}>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Download</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:'95%',  display:'flex', flexDirection:'row', justifyContent:'space-between',alignItems:'center', paddingLeft:10, marginVertical:10, marginLeft:5}}>
                        <TextInput style={[styles.inputField, {width:'84%', marginTop:0}]} placeholder='Search'/>
                        <TouchableOpacity style={{width:45, height:45, borderRadius:75, backgroundColor:"#3cb371", display:'flex', justifyContent:'center', alignItems:'center', marginRight:10}}>
                            <MaterialIcons name='search' size={24} color='#fff'/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{width:'100%', marginBottom:20}}>
                        <View style={{height:140, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                            <View style={{width:'15%'}}><Ionicons name='wallet-outline' size={26}/></View>
                            <View style={{width:'55%', justifyContent:'flex-start'}}>
                                <Text>Transaction Number: QWER78923</Text>
                                <Text>Date: 2022-12-30; 1932hrs</Text>
                            </View>
                            <View style={{flexDirection:'column', width:'30%',height:'80%', justifyContent:'space-between', paddingLeft:20}}>
                                <Text style={{color:'#3cb371', fontSize:18, fontWeight:'bold'}}>Ksh 3,750</Text>
                            </View>
                        </View>
                        <View style={{height:140, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                            <View style={{width:'15%'}}><Ionicons name='wallet-outline' size={26}/></View>
                            <View style={{width:'55%', justifyContent:'flex-start'}}>
                                <Text>Transaction Number: QWER78923</Text>
                                <Text>Date: 2022-12-30; 1932hrs</Text>
                            </View>
                            <View style={{flexDirection:'column', width:'30%',height:'80%', justifyContent:'space-between', paddingLeft:20}}>
                                <Text style={{color:'#3cb371', fontSize:18, fontWeight:'bold'}}>Ksh 3,750</Text>
                            </View>
                        </View>
                        <View style={{height:140, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                            <View style={{width:'15%'}}><Ionicons name='wallet-outline' size={26}/></View>
                            <View style={{width:'55%', justifyContent:'flex-start'}}>
                                <Text>Transaction Number: QWER78923</Text>
                                <Text>Date: 2022-12-30; 1932hrs</Text>
                            </View>
                            <View style={{flexDirection:'column', width:'30%',height:'80%', justifyContent:'space-between', paddingLeft:20}}>
                                <Text style={{color:'#3cb371', fontSize:18, fontWeight:'bold'}}>Ksh 3,750</Text>
                            </View>
                        </View>
                        <View style={{height:140, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                            <View style={{width:'15%'}}><Ionicons name='wallet-outline' size={26}/></View>
                            <View style={{width:'55%', justifyContent:'flex-start'}}>
                                <Text>Transaction Number: QWER78923</Text>
                                <Text>Date: 2022-12-30; 1932hrs</Text>
                            </View>
                            <View style={{flexDirection:'column', width:'30%',height:'80%', justifyContent:'space-between', paddingLeft:20}}>
                                <Text style={{color:'#3cb371', fontSize:18, fontWeight:'bold'}}>Ksh 3,750</Text>
                            </View>
                        </View>
                    </ScrollView>
                </ScrollView>
            </Modal>
            <Modal
                animationType="slide"
                visible={payLoanModal}
                onRequestClose={() => {
                    setPayLoanModal(!payLoanModal);
                }}
            >
                <View>
                    <Text style={styles.title}>Pay loan(amount is from your e-wallet)</Text> 
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Enter amount:</Text> 
                        <TextInput style={styles.inputField} placeholder='10,000' autofocus={true}/>
                    </View>
                    
                    <View style={{width:"90%", height: 140, flexDirection:"row",justifyContent:"space-between", marginVertical:20,  paddingLeft:20}}>
                        <TouchableOpacity 
                            onPress={() => setPayLoanModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 8}}>Pay loan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setPayLoanModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 8}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View>
                <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:5}}>Your Loan Products</Text>
                <View style={{ width:'90%', height:100, borderRadius:10, backgroundColor:"#3CB371", flexDirection:'column', justifyContent:'space-around', paddingHorizontal:10, marginBottom:10, marginLeft:20}}>
                    <View style={{width:'100%', height:'100%', flexDirection:"column",justifyContent:"space-around", alignItems:"center"}}>
                        <Text style={{color:'#fff'}}>Total loan amount</Text>
                        <Text style={{color:'#fff', fontWeight:'bold'}}>Ksh. 280,000</Text>
                    </View>
                </View>
                <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:5}}>Loan</Text>
                <View style={{width:'100%', height:40, justifyContent:"center", alignItems:'flex-end', paddingRight:20}}>
                    <TouchableOpacity
                        onPress={() => setAddLoanModal(true)}
                        style={styles.button}
                    >
                        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Request Loan</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:'95%',  display:'flex', flexDirection:'row', justifyContent:'space-between',alignItems:'center', paddingLeft:10, marginVertical:10, marginLeft:5}}>
                    <TextInput style={[styles.inputField, {width:'84%', marginTop:0}]} placeholder='Search'/>
                    <TouchableOpacity style={{width:45, height:45, borderRadius:75, backgroundColor:"#3cb371", display:'flex', justifyContent:'center', alignItems:'center', marginRight:10}}>
                        <MaterialIcons name='search' size={24} color='#fff'/>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{width:'100%', marginBottom:20}}>
                    <View style={{height:180, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                        <View style={{width:'15%'}}><Ionicons name='wallet-outline' size={26}/></View>
                        <View style={{width:'55%', justifyContent:'flex-start'}}>
                            <Text style={{fontWeight:"bold"}}>Car Loan</Text>
                            <Text>Payment plan: Monthly</Text>
                            <Text>Total Amount: Ksh 900,000</Text>
                            <Text>Pending Amount: Ksh 450,220</Text>
                            <Text>Pending Intervals: 45 months</Text>
                        </View>
                        <View style={{flexDirection:'column', width:'30%',height:'80%', justifyContent:'space-between', paddingLeft:20}}>
                            <TouchableOpacity style={{width:90, height:30, backgroundColor:'#E55451', borderRadius:20, marginTop:10}} onPress={() => setViewPaymentModal(true)}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:5}}>View Payments</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:90, height:30, backgroundColor:'#E55451', borderRadius:20, marginTop:10}} onPress={() => setPayLoanModal(true)}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:5}}>Pay Loan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:90, height:40, backgroundColor:'#E55451', borderRadius:20, marginTop:10}}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:5}}>Request terms change</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{height:180, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                        <View style={{width:'15%'}}><Ionicons name='wallet-outline' size={26}/></View>
                        <View style={{width:'55%', justifyContent:'flex-start'}}>
                            <Text style={{fontWeight:"bold"}}>Car Loan</Text>
                            <Text>Payment plan: Monthly</Text>
                            <Text>Total Amount: Ksh 900,000</Text>
                            <Text>Pending Amount: Ksh 450,220</Text>
                            <Text>Pending Intervals: 45 months</Text>
                        </View>
                        <View style={{flexDirection:'column', width:'30%',height:'80%', justifyContent:'space-between', paddingLeft:20}}>
                            <TouchableOpacity style={{width:90, height:30, backgroundColor:'#E55451', borderRadius:20, marginTop:10}} onPress={() => setViewPaymentModal(true)}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:5}}>View Payments</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:90, height:30, backgroundColor:'#E55451', borderRadius:20, marginTop:10}} onPress={() => setPayLoanModal(true)}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:5}}>Pay Loan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:90, height:40, backgroundColor:'#E55451', borderRadius:20, marginTop:10}}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:5}}>Request terms change</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{height:180, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                        <View style={{width:'15%'}}><Ionicons name='wallet-outline' size={26}/></View>
                        <View style={{width:'55%', justifyContent:'flex-start'}}>
                            <Text style={{fontWeight:"bold"}}>Car Loan</Text>
                            <Text>Payment plan: Monthly</Text>
                            <Text>Total Amount: Ksh 900,000</Text>
                            <Text>Pending Amount: Ksh 450,220</Text>
                            <Text>Pending Intervals: 45 months</Text>
                        </View>
                        <View style={{flexDirection:'column', width:'30%',height:'80%', justifyContent:'space-between', paddingLeft:20}}>
                            <TouchableOpacity style={{width:90, height:30, backgroundColor:'#E55451', borderRadius:20, marginTop:10}} onPress={() => setViewPaymentModal(true)}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:5}}>View Payments</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:90, height:30, backgroundColor:'#E55451', borderRadius:20, marginTop:10}} onPress={() => setPayLoanModal(true)}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:5}}>Pay Loan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:90, height:40, backgroundColor:'#E55451', borderRadius:20, marginTop:10}}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:5}}>Request terms change</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{height:180, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                        <View style={{width:'15%'}}><Ionicons name='wallet-outline' size={26}/></View>
                        <View style={{width:'55%', justifyContent:'flex-start'}}>
                            <Text style={{fontWeight:"bold"}}>Car Loan</Text>
                            <Text>Payment plan: Monthly</Text>
                            <Text>Total Amount: Ksh 900,000</Text>
                            <Text>Pending Amount: Ksh 450,220</Text>
                            <Text>Pending Intervals: 45 months</Text>
                        </View>
                        <View style={{flexDirection:'column', width:'30%',height:'80%', justifyContent:'space-between', paddingLeft:20}}>
                            <TouchableOpacity style={{width:90, height:30, backgroundColor:'#E55451', borderRadius:20, marginTop:10}} onPress={() => setViewPaymentModal(true)}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:5}}>View Payments</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:90, height:30, backgroundColor:'#E55451', borderRadius:20, marginTop:10}} onPress={() => setPayLoanModal(true)}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:5}}>Pay Loan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:90, height:40, backgroundColor:'#E55451', borderRadius:20, marginTop:10}}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:5}}>Request terms change</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </View>
        </View>    
    )
}
const SavingScreen = () => {
    const [addSavingModal, setAddSavingModal] = useState(false)
    const [withdrawModal, setWithdrawModal] = useState(false)
    const [viewSavingModal, setViewSavingModal] = useState(false)

    return(
        <View>
            <Modal
                animationType="slide"
                visible={addSavingModal}
                onRequestClose={() => {
                    setAddSavingModal(!addSavingModal);
                }}
            >
                <ScrollView>
                    <Text style={styles.title}>Add a savings plan</Text> 
                    <View style={{width:"90%", height: 80, marginTop:5, paddingLeft:20}}>
                        <Text>Enter amount:</Text> 
                        <TextInput style={styles.inputField} placeholder='4,900' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:5, paddingLeft:20}}>
                        <Text>Enter purpose:</Text> 
                        <TextInput style={styles.inputField} placeholder='School fees'/>
                    </View>
                    
                    <View style={{width:"90%", height: 140, flexDirection:"row",justifyContent:"space-between", marginVertical:20,  paddingLeft:20}}>
                        <TouchableOpacity 
                            onPress={() => setAddSavingModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 6}}>Add Plan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setAddSavingModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 6}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Modal>
            <Modal
                animationType="slide"
                visible={withdrawModal}
                onRequestClose={() => {
                    setWithdrawModal(!withdrawModal);
                }}
            >
                <View>
                    <Text style={styles.title}>Withdraw(amount to your e-wallet)</Text> 
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Enter amount:</Text> 
                        <TextInput style={styles.inputField} placeholder='10,000' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 140, flexDirection:"row",justifyContent:"space-between", marginVertical:20,  paddingLeft:20}}>
                        <TouchableOpacity 
                            onPress={() => setWithdrawModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 8}}>Withdraw</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setWithdrawModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 8}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                visible={viewSavingModal}
                onRequestClose={() => {
                    setViewSavingModal(!viewSavingModal);
                }}
            >
                <ScrollView>
                    <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:5}}>School Fees(8% interest rate p.a)</Text>
                    <View style={{ width:'90%', height:100, borderRadius:10, backgroundColor:"#3CB371", flexDirection:'column', justifyContent:'space-around', paddingHorizontal:10, marginBottom:10, marginLeft:20}}>
                        <View style={{width:'100%', flexDirection:"column",justifyContent:"space-between", alignItems:"center"}}>
                            <Text style={{color:'#fff'}}>Total amount(including interest)</Text>
                            <Text style={{color:'#fff', fontWeight:'bold'}}>Ksh. 20,000</Text>
                        </View>
                    </View>
                    <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:5}}>Transaction Details</Text>
                    <View style={{width:'100%', height:40, justifyContent:"center", alignItems:'flex-end', paddingRight:20}}>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Download</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:'95%',  display:'flex', flexDirection:'row', justifyContent:'space-between',alignItems:'center', paddingLeft:10, marginVertical:10, marginLeft:5}}>
                        <TextInput style={[styles.inputField, {width:'84%', marginTop:0}]} placeholder='Search'/>
                        <TouchableOpacity style={{width:45, height:45, borderRadius:75, backgroundColor:"#3cb371", display:'flex', justifyContent:'center', alignItems:'center', marginRight:10}}>
                            <MaterialIcons name='search' size={24} color='#fff'/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{width:'100%', marginBottom:20}}>
                        <View style={{height:140, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                            <View style={{width:'15%'}}><Ionicons name='wallet-outline' size={26}/></View>
                            <View style={{width:'55%', justifyContent:'flex-start'}}>
                                <Text>Transaction Number: QWER78923</Text>
                                <Text>Date: 2022-12-30; 1932hrs</Text>
                                <Text>Deposit</Text>
                            </View>
                            <View style={{flexDirection:'column', width:'30%',height:'80%', justifyContent:'space-between', paddingLeft:20}}>
                                <Text style={{color:'#3cb371', fontSize:18, fontWeight:'bold'}}>Ksh 3,750</Text>
                            </View>
                        </View>
                        <View style={{height:140, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                            <View style={{width:'15%'}}><Ionicons name='wallet-outline' size={26}/></View>
                            <View style={{width:'55%', justifyContent:'flex-start'}}>
                                <Text>Transaction Number: QWER78923</Text>
                                <Text>Date: 2022-12-30; 1932hrs</Text>
                                <Text>Withdraw</Text>
                            </View>
                            <View style={{flexDirection:'column', width:'30%',height:'80%', justifyContent:'space-between', paddingLeft:20}}>
                                <Text style={{color:'#3cb371', fontSize:18, fontWeight:'bold'}}>Ksh 3,750</Text>
                            </View>
                        </View>
                        <View style={{height:140, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                            <View style={{width:'15%'}}><Ionicons name='wallet-outline' size={26}/></View>
                            <View style={{width:'55%', justifyContent:'flex-start'}}>
                                <Text>Transaction Number: QWER78923</Text>
                                <Text>Date: 2022-12-30; 1932hrs</Text>
                                <Text>Deposit</Text>
                            </View>
                            <View style={{flexDirection:'column', width:'30%',height:'80%', justifyContent:'space-between', paddingLeft:20}}>
                                <Text style={{color:'#3cb371', fontSize:18, fontWeight:'bold'}}>Ksh 3,750</Text>
                            </View>
                        </View>
                        <View style={{height:140, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                            <View style={{width:'15%'}}><Ionicons name='wallet-outline' size={26}/></View>
                            <View style={{width:'55%', justifyContent:'flex-start'}}>
                                <Text>Transaction Number: QWER78923</Text>
                                <Text>Date: 2022-12-30; 1932hrs</Text>
                                <Text>Withdraw</Text>
                            </View>
                            <View style={{flexDirection:'column', width:'30%',height:'80%', justifyContent:'space-between', paddingLeft:20}}>
                                <Text style={{color:'#3cb371', fontSize:18, fontWeight:'bold'}}>Ksh 3,750</Text>
                            </View>
                        </View>
                    </ScrollView>
                </ScrollView>
            </Modal>
            <View>
                <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:5}}>Your Saving Products</Text>
                <View style={{ width:'90%', height:100, borderRadius:10, backgroundColor:"#3CB371", flexDirection:'column', justifyContent:'space-around', paddingHorizontal:10, marginBottom:10, marginLeft:20}}>
                    <View style={{width:'100%', height:'100%', flexDirection:"column",justifyContent:"space-around", alignItems:"center"}}>
                        <Text style={{color:'#fff'}}>Total Savings amount</Text>
                        <Text style={{color:'#fff', fontWeight:'bold'}}>Ksh 215,000</Text>
                    </View>
                </View>
                <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:5}}>Savings</Text>
                <View style={{width:'100%', height:40, justifyContent:"center", alignItems:'flex-end', paddingRight:20}}>
                    <TouchableOpacity
                        onPress={() => setAddSavingModal(true)}
                        style={styles.button}
                    >
                        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Add Savings</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:'95%',  display:'flex', flexDirection:'row', justifyContent:'space-between',alignItems:'center', paddingLeft:10, marginVertical:10, marginLeft:5}}>
                    <TextInput style={[styles.inputField, {width:'84%', marginTop:0}]} placeholder='Search'/>
                    <TouchableOpacity style={{width:45, height:45, borderRadius:75, backgroundColor:"#3cb371", display:'flex', justifyContent:'center', alignItems:'center', marginRight:10}}>
                        <MaterialIcons name='search' size={24} color='#fff'/>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{width:'100%', marginBottom:20}}>
                    <View style={{height:100, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                        <View style={{width:'15%'}}><Ionicons name='wallet-outline' size={26}/></View>
                        <View style={{width:'55%', justifyContent:'flex-start'}}>
                            <Text style={{fontWeight:"bold"}}>School fees</Text>
                            <Text>Savings plan: Monthly</Text>
                            <Text>Interval Amount: Ksh 4,500</Text>
                        </View>
                        <View style={{flexDirection:'column', width:'30%',height:'80%', justifyContent:'space-between', paddingLeft:20}}>
                            <TouchableOpacity style={{width:90, height:30, backgroundColor:'#E55451', borderRadius:20, marginTop:10}} onPress={() => setViewSavingModal(true)}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:5}}>View</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:90, height:30, backgroundColor:'#E55451', borderRadius:20, marginTop:10}} onPress={() => setWithdrawModal(true)}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:5}}>Withdraw</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{height:100, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                        <View style={{width:'15%'}}><Ionicons name='wallet-outline' size={26}/></View>
                        <View style={{width:'55%', justifyContent:'flex-start'}}>
                            <Text style={{fontWeight:"bold"}}>Building</Text>
                            <Text>Savings plan: Monthly</Text>
                            <Text>Interval Amount: Ksh 4,500</Text>
                        </View>
                        <View style={{flexDirection:'column', width:'30%',height:'80%', justifyContent:'space-between', paddingLeft:20}}>
                            <TouchableOpacity style={{width:90, height:30, backgroundColor:'#E55451', borderRadius:20, marginTop:10}} onPress={() => setViewSavingModal(true)}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:5}}>View</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:90, height:30, backgroundColor:'#E55451', borderRadius:20, marginTop:10}} onPress={() => setWithdrawModal(true)}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:5}}>Withdraw</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>    
    )
}
const FinancialProducts = () => {
    return(
        <View style={{flex:1, height:height}}>
            <Tab.Navigator
                screenOptions={{                  tabBarActiveTintColor: '#fff',
                  tabBarLabelStyle: { fontSize: 12 },
                  tabBarStyle: { backgroundColor: '#3CB371' },
                }}
            >
                <Tab.Screen name="Dashboard" component={DashboardScreen} />
                <Tab.Screen name="Loans" component={LoanScreen} />
                <Tab.Screen name="Savings" component={SavingScreen} />
            </Tab.Navigator>
        </View>
    )
}
export default FinancialProducts;

const styles = StyleSheet.create({
    dashContainer: {
        width:width,
        flex:1,
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#fff",
    },
    button: {
        width: 140,
        height: 35,
        backgroundColor:"#3CB371",
        borderRadius:20,
    },
    title : {
        fontSize: 20,
        fontWeight:"600",
        paddingBottom:5,
        marginVertical:10,
        textAlign:'center',
    },
    inputField: {
        width: "100%",
        height: 45,
        textAlign:"left",
        padding:10,
        marginTop:10,
        borderRadius:10,
        borderWidth: 1,
        borderColor:"#000"
    },
})