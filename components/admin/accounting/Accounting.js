import React,{useState} from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Modal, TextInput, ScrollView } from "react-native";
import { assets, vehicles } from "../../../tables/AccountingTables";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Picker} from '@react-native-picker/picker';

const Tab = createMaterialTopTabNavigator();
const {width, height} = Dimensions.get("window")

const ReportsScreen = () => {
    const [selectedReport, setSelectedReport] = useState('')
    const [selectedTimeline, setSelectedTimeline] = useState('');
    return(
        <ScrollView>
            <View style={styles.mainContainer}>
                <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:5}}>Accounting Reports</Text>
                
                <View style={{ width:'90%', height:100, marginVertical:30, borderRadius:10, backgroundColor:"#3CB371", flexDirection:'column', justifyContent:'space-around', paddingHorizontal:10, marginBottom:10}}>
                    <Text style={{textAlign:'center', fontWeight:"bold", fontSize:16, color:'#fff'}}>{selectedReport === '' ? 'Select the report you want to generate' : selectedReport}</Text>
                    <Picker
                        selectedValue={selectedReport}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedReport(itemValue)
                        }>
                        <Picker.Item label="Profit and Loss" value="Profit and Loss" />
                        <Picker.Item label="Trial Balance" value="Trial Balance" />
                        <Picker.Item label="Ledger Transactions" value="Ledger Transactions" />
                    </Picker>
                </View>
                <View style={{ width:'90%', height:100, marginTop:30, borderRadius:10, backgroundColor:"#3CB371", flexDirection:'column', justifyContent:'space-around', paddingHorizontal:10, marginBottom:10}}>
                    <Text style={{textAlign:'center', fontWeight:"bold", fontSize:16, color:'#fff'}}>{selectedTimeline === '' ? 'Select the timeline you want to generate from' : selectedTimeline}</Text>
                    <Picker
                        selectedValue={selectedTimeline}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedTimeline(itemValue)
                        }>
                        <Picker.Item label="Past Day" value="Past Day" />
                        <Picker.Item label="Past Week" value="Past Week" />
                        <Picker.Item label="Past Month" value="Past Month" />
                        <Picker.Item label="Past Year" value="Past Year" />
                    </Picker>
                </View>
                {selectedTimeline && selectedReport && <View style={{width:'100%', height:40, marginVertical:30, flexDirection:'row', justifyContent:'flex-end', alignItems:'center', paddingHorizontal:20}}>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Generate Report</Text>
                    </TouchableOpacity>
                </View>}
                
            </View>
        </ScrollView>
    )
    
}

const AccountingScreen = () => {
    const [addAssetsModal, setAddAssetsModal] = useState(false)

    return(
        <ScrollView>
            <Modal
                animationType="slide"
                visible={addAssetsModal}
                onRequestClose={() => {
                    setAddAssetsModal(!addAssetsModal);
                }}
            >
                <View>
                    <Text style={styles.title}>Add Asset</Text> 
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Name of Asset:</Text> 
                        <TextInput style={styles.inputField} placeholder='Land' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Amount(quantity) available:</Text> 
                        <TextInput style={styles.inputField} placeholder='11 Acres'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Enter ledger code</Text> 
                        <TextInput style={styles.inputField} placeholder='10001'/>
                    </View>
                    <View style={{width:"90%", height: 140, flexDirection:"row",justifyContent:"space-between", marginVertical:20,  paddingLeft:20}}>
                        <TouchableOpacity 
                            onPress={() => setAddAssetsModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 8}}>Add Asset</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setAddAssetsModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 8}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={styles.mainContainer}>
                <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:5}}>Assets</Text>
                <View style={{width:'95%',  display:'flex',flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingLeft:10, marginBottom:10}}>
                    <TextInput style={[styles.inputField, {width:'84%', marginTop:0}]} placeholder='Search'/>
                    <TouchableOpacity style={{width:45, height:45, borderRadius:75, backgroundColor:"#3cb371", display:'flex', justifyContent:'center', alignItems:'center', marginRight:10}}>
                        <MaterialIcons name='search' size={24} color='#fff'/>
                    </TouchableOpacity>
                </View>
                <View style={{ width:'90%', height:100, borderRadius:10, backgroundColor:"#3CB371", flexDirection:'column', justifyContent:'space-around', paddingHorizontal:10, marginBottom:10}}>
                    <Text style={{textAlign:'center', fontWeight:"bold", fontSize:16, color:'#fff'}}>Assets</Text>
                    <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                        <Text style={{color:'#fff'}}>Registered Number</Text>
                        <Text style={{color:'#fff'}}>24</Text>
                    </View>
                    <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                        <Text style={{color:'#fff'}}>Total</Text>
                        <Text style={{color:'#fff'}}>Ksh. 37.2 Million</Text>
                    </View>
                </View>
                <View style={{width:'100%', height:40, flexDirection:'row', justifyContent:'flex-end', alignItems:'center', paddingHorizontal:20}}>
                    <TouchableOpacity
                        onPress={() => setAddAssetsModal(true)}
                        style={styles.button}
                    >
                        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Add Asset</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{width:width, marginBottom:10}}>
                    {assets.map(asset => (
                        <View style={{height:70, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                            <View style={{width:'15%'}}><MaterialIcons name='landscape' size={26}/></View>
                            <View style={{width:'55%', justifyContent:'flex-start'}}>
                                <Text style={{fontSize:16,fontWeight:'bold'}}>{asset.name}</Text>
                                <Text>{asset.quantity}</Text>
                            </View>
                            <View style={{width:'30%', height:'100%',flexDirection:"row", paddingTop:15}}>
                                <AntDesign name='edit' size={20} color='#3CB371' style={{marginRight:10}}/>
                                <AntDesign name='delete' size={20} color='#E55451'/>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    )
    
}

const VehicleScreen = () => {
    const [addVehicleModal, setAddVehicleModal] = useState(false)
    const [bookVehicleModal, setBookVehicleModal] = React.useState(false)

    return(
        <ScrollView>
            <Modal
                animationType="slide"
                visible={addVehicleModal}
                onRequestClose={() => {
                    setAddVehicleModal(!addVehicleModal);
                }}
            >
                <ScrollView>
                    <Text style={styles.title}>Add Vehicle</Text> 
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Vehicle registration number:</Text> 
                        <TextInput style={styles.inputField} placeholder='KCD 094U' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Vehicle Type:</Text> 
                        <TextInput style={styles.inputField} placeholder='Pick-up'/>
                    </View>
                    <View style={{width:"90%", height: 100, marginTop:10, paddingLeft:20}}>
                        <Text>Who is tranport provider(if none write the name of the cooperative):</Text> 
                        <TextInput style={styles.inputField} placeholder='Milk cooperative'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Driver's name:</Text> 
                        <TextInput style={styles.inputField} placeholder='Joe Mwangi'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Driver's id:</Text> 
                        <TextInput style={styles.inputField} placeholder='32503904'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Vehicle weight(in tonnes):</Text> 
                        <TextInput style={styles.inputField} placeholder='0.8'/>
                    </View>
                    <View style={{width:"90%", height: 140, flexDirection:"row",justifyContent:"space-between", marginVertical:20,  paddingLeft:20}}>
                        <TouchableOpacity 
                            onPress={() => setAddVehicleModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 8}}>Add Vehicle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setAddVehicleModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 8}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Modal>
            <Modal
                animationType="slide"
                visible={bookVehicleModal}
                onRequestClose={() => {
                    setBookVehicleModal(!bookVehicleModal);
                }}
            >
                <View>
                    <Text style={styles.title}>Make a booking.</Text> 
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Starting date:</Text> 
                        <TextInput style={styles.inputField} placeholder='Dairy Cattle' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Expected ending date:</Text> 
                        <TextInput style={styles.inputField} placeholder='894' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Purpose</Text> 
                        <TextInput style={styles.inputField} placeholder='Milk, Beef' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Signing off agent's name:</Text> 
                        <TextInput style={styles.inputField} placeholder='Friesian, Jersey, Guernsey' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Signing off agent's name:</Text> 
                        <TextInput style={styles.inputField} placeholder='Dr.Njagi' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 140, flexDirection:"row",justifyContent:"space-between", marginVertical:20,  paddingLeft:20}}>
                        <TouchableOpacity 
                            onPress={() => setBookVehicleModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 8}}>Add Livestock</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setBookVehicleModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 8}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={styles.mainContainer}>
                <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:5}}>Vehicles (logistics)</Text>
                <View style={{width:'95%',  display:'flex',flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingLeft:10, marginBottom:10}}>
                    <TextInput style={[styles.inputField, {width:'84%', marginTop:0}]} placeholder='Search'/>
                    <TouchableOpacity style={{width:45, height:45, borderRadius:75, backgroundColor:"#3cb371", display:'flex', justifyContent:'center', alignItems:'center', marginRight:10}}>
                        <MaterialIcons name='search' size={24} color='#fff'/>
                    </TouchableOpacity>
                </View>
                <View style={{ width:'90%', height:100, borderRadius:10, backgroundColor:"#3CB371", flexDirection:'column', justifyContent:'space-around', paddingHorizontal:10, marginBottom:10}}>
                    <Text style={{textAlign:'center', fontWeight:"bold", fontSize:18, color:'#fff'}}>Vehicles</Text>
                    <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                        <Text style={{color:'#fff'}}>Registered Number</Text>
                        <Text style={{color:'#fff'}}>60</Text>
                    </View>
                    <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                        <Text style={{color:'#fff'}}>Number of types</Text>
                        <Text style={{color:'#fff'}}>4</Text>
                    </View>
                </View>
                <View  style={{width:'100%', height:40, flexDirection:'row', justifyContent:"flex-end", alignItems:'center', paddingHorizontal:20}}>
                    <TouchableOpacity
                        onPress={() => setAddVehicleModal(true)}
                        style={styles.button}
                    >
                        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Add Vehicle</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{width:width, marginBottom:10}}>
                    {vehicles.map(vehicle => (
                        <View style={{height:100, borderColor:"#90ee91",borderBottomWidth:1, width:'95%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                            <View style={{width:'15%'}}><MaterialCommunityIcons name='truck-cargo-container' size={26}/></View>
                            <View style={{width:'50%', justifyContent:'flex-start'}}>
                                <Text style={{fontSize:18, fontWeight:'bold'}}>{vehicle.ledger_code}</Text>
                                <Text>Driver: {vehicle.driver}</Text>
                                <Text>Driver Id: {vehicle.driver_id}</Text>
                                <View style={{width:'80%', flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
                                    <Text>Status: </Text> 
                                    {vehicle.status === 'Booked' ? 
                                        <View style={{width:80, height:25, backgroundColor:'#E55451', borderRadius:10}}>
                                            <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:4}}>{vehicle.status}</Text>
                                        </View> : 
                                        <TouchableOpacity style={{width:80, height:25, backgroundColor:'#E9AB17', borderRadius:10}} onPress={() => setBookVehicleModal(true)}>
                                            <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:4}}>{vehicle.status}</Text>
                                        </TouchableOpacity>
                                    }
                                </View>
                            </View>
                            <View style={{flexDirection:'row', width:'20%', justifyContent:'space-around'}}>
                                <TouchableOpacity onPress={() => setFarmerModal(true)} style={{width:25, height:25, borderRadius:75, borderColor:"#3cb371", borderWidth:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
                                    <MaterialIcons name='keyboard-arrow-right' size={24} color='#3cb371'/>
                                </TouchableOpacity>
                                <AntDesign name='delete' size={22} color='#E55451'/>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    )
}

const Accounting = () => {
    return(
        <View style={{flex:1, height:height}}>
            <Tab.Navigator
                screenOptions={{
                  tabBarActiveTintColor: '#fff',
                  tabBarLabelStyle: { fontSize: 12 },
                  tabBarStyle: { backgroundColor: '#3CB371' },
                }}
            >
                <Tab.Screen name="Accounting Reports" component={ReportsScreen} />
                <Tab.Screen name="Assets" component={AccountingScreen} />
                <Tab.Screen name="Vehicles" component={VehicleScreen} />
            </Tab.Navigator>
        </View>
    )
}
export default Accounting;

const styles = StyleSheet.create({
    mainContainer:{
        width:width,
        flex:1,
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor:"#fff",
    },
    button: {
        width: 120,
        height: 35,
        backgroundColor:"#3CB371",
        borderRadius:20,
    },
    inputField: {
        width: "100%",
        height: 45,
        textAlign:"left",
        padding:10,
        marginTop:20,
        borderRadius:10,
        borderWidth: 1,
        borderColor:"#000"
    },
    title : {
        fontSize: 20,
        fontWeight:"600",
        paddingBottom:5,
        marginVertical:10,
        textAlign:'center',
    },
})