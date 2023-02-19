import React, {useState, useEffect} from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions , TouchableOpacity, Modal, TextInput, Image} from "react-native";
import { man_products, sales } from '../../../tables/ManufacturingTables';
import Foundation from 'react-native-vector-icons/Foundation'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const ManufacturingScreen = () => {
    const [addProductModal, setAddProductModal] = useState(false)
    
    return(
        <View>
            <Modal
                animationType="slide"
                visible={addProductModal}
                onRequestClose={() => {
                    setAddProductModal(!addProductModal);
                }}
            >
                <ScrollView>
                    <Text style={styles.title}>Add a manufactured product</Text> 
                    <View style={{width:"90%", height: 80, marginTop:5, paddingLeft:20}}>
                        <Text>Name of product:</Text> 
                        <TextInput style={styles.inputField} placeholder='Cream Milk' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Raw materials used:</Text> 
                        <TextInput style={styles.inputField} placeholder='Milk'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Available amount:</Text> 
                        <TextInput style={styles.inputField} placeholder='1200'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Units:</Text> 
                        <TextInput style={styles.inputField} placeholder='litres'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Selling price/unit:</Text> 
                        <TextInput style={styles.inputField} placeholder='70'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Profit/unit:</Text> 
                        <TextInput style={styles.inputField} placeholder='18'/>
                    </View>
                    <View style={{width:"90%", height: 140, flexDirection:"row",justifyContent:"space-between", marginVertical:20,  paddingLeft:20}}>
                        <TouchableOpacity 
                            onPress={() => setAddProductModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 8}}>Add Product</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setAddProductModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 8}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Modal>
            <View style={styles.dashContainer}>
                <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:10}}>Manufactured Products</Text>
                <View style={{ width:'90%', height:90, borderRadius:10, backgroundColor:"#3CB371", flexDirection:'column', justifyContent:'space-around', paddingHorizontal:10,marginBottom:20}}>
                    <Text style={{textAlign:'center', fontWeight:"bold", color:'#fff', fontSize:18}}>8</Text>
                    <Text style={{textAlign:'center', color:'#fff'}}>Total Manufactured Products</Text>
                </View>
                <View style={{width:'100%', height:40, justifyContent:"center", alignItems:'flex-end', paddingRight:20}}>
                    <TouchableOpacity
                        onPress={() => setAddProductModal(true)}
                        style={styles.button}
                    >
                        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Add Product</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:'100%', marginTop:10}}>
                    {man_products.map(prod => (
                        <View style={{height:100, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}}>
                            <Image source={require("../../../assets/images/milk.jpeg")} style={{height:60,width:60, marginRight:10}}/> 
                            <View style={{width:'55%', height:'100%', paddingVertical:5, display:'flex', alignItems:'flex-start', justifyContent:'space-around'}}>
                                <Text style={{fontWeight:'bold', textAlign:'center'}}>{prod.name}</Text>
                                <Text style={{textAlign:'center'}}>Available Amount: {prod.available}litres</Text>
                                <Text style={{textAlign:'center'}}>Profit/Unit: Ksh{prod.profit}</Text>
                            </View>
                            <View style={{flexDirection:'row', width:'20%', justifyContent:'space-around'}}>
                                <AntDesign name='edit' size={22} color='#3CB371'/>
                                <AntDesign name='delete' size={22} color='#E55451'/>
                            </View>
                        </View>
                    ))} 
                </View>
            </View>
        </View>
    )
}

const SalesScreen = () => {
    const [addSalesModal, setAddSalesModal] = useState(false)
    const [token, setToken] = useState('')
    const [pendingSales, setPendingSales] = useState([])

    const fetchToken = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@storage_Key')
            let user =(JSON.parse(jsonValue))
            setToken(user.token)
        } catch(e) {
           console.log(e)
        }
    }
    const fetchPendingSales = async() => {
		await fetch(
			'https://erp.shambarecords.com/api/v1/pending_sales', {
				method:'GET',
				headers:{
					'Accept':'application/json',
					'Content-Type':'application/json',
					'Authorization': `Bearer ${token}`
				}
			}
		)
		.then(response => response.json())
		.then(data => {
			setPendingSales(data.data)
		})
		.catch(err => console.log(`err: ${err}`))
	}
    useEffect(() => {
        fetchToken()
    },[])
    useEffect(() => {
        fetchPendingSales()
    },[token])

    return(
        <View>
            <Modal
                animationType="slide"
                visible={addSalesModal}
                onRequestClose={() => {
                    setAddSalesModal(!addSalesModal);
                }}
            >
                <ScrollView>
                    <Text style={styles.title}>Add a sale</Text> 
                    <View style={{width:"90%", height: 80, marginTop:5, paddingLeft:20}}>
                        <Text>Name of the buyer:</Text> 
                        <TextInput style={styles.inputField} placeholder='MaryAnn Kamau' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Product:</Text> 
                        <TextInput style={styles.inputField} placeholder='Cream Milk'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Quantity Bought:</Text> 
                        <TextInput style={styles.inputField} placeholder='8'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Units:</Text> 
                        <TextInput style={styles.inputField} placeholder='litres'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Selling Price/Unit(Ksh):</Text> 
                        <TextInput style={styles.inputField} placeholder='170'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Total Discount(Ksh):</Text> 
                        <TextInput style={styles.inputField} placeholder='30'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Date and time of purchase:</Text> 
                        <TextInput style={styles.inputField} placeholder='2022-10-21, 08:14AM'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Agent:</Text> 
                        <TextInput style={styles.inputField} placeholder='James'/>
                    </View>
                    <View style={{width:"90%", height: 140, flexDirection:"row",justifyContent:"space-between", marginVertical:20,  paddingLeft:20}}>
                        <TouchableOpacity 
                            onPress={() => setAddSalesModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 6}}>Add Sale</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setAddSalesModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 6}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Modal>
            <View>
                <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:5}}>Recent Sales</Text>
                <View style={{width:'95%',  display:'flex', flexDirection:'row', justifyContent:'space-between',alignItems:'center', paddingLeft:10, marginVertical:10, marginLeft:5}}>
                    <TextInput style={[styles.inputField, {width:'84%', marginTop:0}]} placeholder='Search'/>
                    <TouchableOpacity style={{width:45, height:45, borderRadius:75, backgroundColor:"#3cb371", display:'flex', justifyContent:'center', alignItems:'center', marginRight:10}}>
                        <MaterialIcons name='search' size={24} color='#fff'/>
                    </TouchableOpacity>
                </View>
                <View style={{width:'95%', display:'flex',flexDirection:'row', justifyContent:'space-between',alignItems:'center', marginTop:15, marginHorizontal:10, paddingRight:10}}>
                    <TouchableOpacity
                        style={[styles.button, {width:100}]}
                    >
                        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Past Day</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, {width:100}]}
                    >
                        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Past Week</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, {width:100}]}
                    >
                        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Past Month</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:'100%', height:40, justifyContent:"center", alignItems:'flex-end', paddingRight:20}}>
                    <TouchableOpacity
                        onPress={() => setAddSalesModal(true)}
                        style={[styles.button, {width:100}]}
                    >
                        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Add Sale</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{width:'100%', marginBottom:20}}>
                    {pendingSales?.map(sale => (
                        <View style={{height:100, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                            <View style={{width:'15%'}}><Foundation name='graph-trend' size={26}/></View>
                            <View style={{width:'55%', justifyContent:'flex-start'}}>
                                <Text style={{fontWeight:"bold"}}>{sale.invoice_number}</Text>
                                <Text>Served By: {sale.served_by}</Text>
                                <Text>Date: {sale.date}</Text>
                            </View>
                            <View style={{flexDirection:'row', width:'30%', justifyContent:'flex-start', paddingLeft:20}}>
                                <Text style={{color:'#3CB371', fontWeight:'bold', fontSize:18}}>Ksh {sale.amount * sale.quantity}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>    
    )
}
const Manufacturing = () => {
    return(
        <View style={{flex:1, height:height}}>
            <Tab.Navigator
                screenOptions={{
                  tabBarActiveTintColor: '#fff',
                  tabBarLabelStyle: { fontSize: 12 },
                  tabBarStyle: { backgroundColor: '#3CB371' },
                }}
            >
                <Tab.Screen name="Manufacturing Products" component={ManufacturingScreen} />
                <Tab.Screen name="Sales" component={SalesScreen} />
            </Tab.Navigator>
        </View>
    )
}
export default Manufacturing;

const {width, height} = Dimensions.get("window")
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