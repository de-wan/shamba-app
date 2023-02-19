import React, {useState} from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions , TouchableOpacity, Modal, TextInput, Image} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const DashboardScreen = () => {
    return(
        <View style={styles.mainContainer}>
            <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:10}}>Collected Products</Text>
            <View style={{ width:'90%', height:90, borderRadius:10, backgroundColor:"#3CB371", flexDirection:'column', justifyContent:'space-around', paddingHorizontal:10, marginBottom:20, marginLeft:20}}>
                <Text style={{textAlign:'center', color:'#fff'}}>Total Collected Products</Text>
                <Text style={{textAlign:'center', fontWeight:"bold", color:'#fff', fontSize:18}}>3</Text>
            </View>
            <ScrollView contentContainerStyle={{width:'100%', flexDirection:"column", alignItems:'center', justifyContent:"center"}}>
                <Text style={{width:'100%', textAlign:"center",fontSize:14, fontWeight:"bold", marginVertical:10}}>Total collections in January</Text>
                <View style={{height:90, borderColor:"#90ee91",borderBottomWidth:1, width:'95%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                    <View style={{width:'10%'}}><MaterialIcons name='collections' size={22}/></View>
                    <View style={{width:'40%', justifyContent:'flex-start'}}>
                        <Text style={{fontWeight:'bold'}}>Milk</Text>
                        <Text>Grade I</Text>
                    </View>
                    <View style={{flexDirection:'column', width:'40%', height:'90%',justifyContent:'space-around'}}>
                        <Text>Total Amount</Text> 
                        <Text style={{fontWeight:'bold', color:'#3CB371'}}>2,000 litres</Text>
                    </View>
                </View>
                <View style={{height:90, borderColor:"#90ee91",borderBottomWidth:1, width:'95%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                    <View style={{width:'10%'}}><MaterialIcons name='collections' size={22}/></View>
                    <View style={{width:'40%', justifyContent:'flex-start'}}>
                        <Text style={{fontWeight:'bold'}}>Milk</Text>
                        <Text>Grade II</Text>
                    </View>
                    <View style={{flexDirection:'column', width:'40%', height:'90%',justifyContent:'space-around'}}>
                        <Text>Total Amount</Text> 
                        <Text style={{fontWeight:'bold', color:'#3CB371'}}>1,499 litres</Text>
                    </View>
                </View>
                <View style={{height:90, borderColor:"#90ee91",borderBottomWidth:1, width:'95%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                    <View style={{width:'10%'}}><MaterialIcons name='collections' size={22}/></View>
                    <View style={{width:'40%', justifyContent:'flex-start'}}>
                        <Text style={{fontWeight:'bold'}}>Coffee</Text>
                        <Text>Arabica</Text>
                    </View>
                    <View style={{flexDirection:'column', width:'40%', height:'90%',justifyContent:'space-around'}}>
                        <Text>Total Amount</Text> 
                        <Text style={{fontWeight:'bold', color:'#3CB371'}}>2000 Kgs</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const Products = () => {
    const [addProductModal, setAddProductModal] = useState(false)

    return(
        <ScrollView>
            <Modal
                animationType="slide"
                visible={addProductModal}
                onRequestClose={() => {
                    setAddProductModal(!addProductModal);
                }}
            >
                <ScrollView>
                    <Text style={styles.title}>Add a product</Text> 
                    <View style={{width:'100%', backgroundColor:"#3CB371"}}>
						<TouchableOpacity onPress={() => setAddProductModal(false)}>
							<AntDesign name='arrowleft' size={22} color='#fff'/> 
						</TouchableOpacity>
					</View>
                    <View style={{width:"90%", height: 80, marginTop:5, paddingLeft:20}}>
                        <Text>Name of product:</Text> 
                        <TextInput style={styles.inputField} placeholder='Milk' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:5, paddingLeft:20}}>
                        <Text>Product ID:</Text> 
                        <TextInput style={styles.inputField} placeholder='Milk' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Standard Quality:</Text> 
                        <TextInput style={styles.inputField} placeholder='Grade-1'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Unit:</Text> 
                        <TextInput style={styles.inputField} placeholder='litres'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Expected daily quantity:</Text> 
                        <TextInput style={styles.inputField} placeholder='23'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Price/unit:</Text> 
                        <TextInput style={styles.inputField} placeholder='2022-10-21, 08:14AM'/>
                    </View>
                    
                    <View style={{width:"90%", height: 140, flexDirection:"row",justifyContent:"space-between", marginVertical:20,  paddingLeft:20}}>
                        <TouchableOpacity 
                            onPress={() => setAddProductModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 6}}>Add Product</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setAddProductModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 6}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Modal>
            <View style={styles.dashContainer}>
                <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:5}}>Your products</Text>
                <View style={{width:'100%', height:60, justifyContent:"center", alignItems:'flex-end', paddingRight:20}}>
                    <TouchableOpacity
                        onPress={() => setAddProductModal(true)}
                        style={styles.button}
                    >
                        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Add Products</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:'100%', minHeight:200, flexDirection:'row', justifyContent:'space-around', paddingRight:10, flexWrap:'wrap'}}>
                    <View style={{ width:'45%', height:165, backgroundColor:"#fff", borderRadius:10,  elevation: 10, shadowColor: '#454545', flexDirection:"column",alignItems:"center", justifyContent:'space-around', paddingHorizontal:10, marginBottom:20}}>
                        <Image source={require("../../../assets/images/milk.jpeg")} style={{height:60,width:60, marginRight:10}}/> 
                        <Text style={{textAlign:'center'}}>Milk</Text>
                        <Text style={{textAlign:'center', fontWeight:"bold", fontSize:18}}>248 litres</Text>
                        <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                            <Text>Grade:</Text>
                            <Text>Grade 1</Text>
                        </View>
                        <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                            <Text>Total Collection</Text>
                            <Text>9,650</Text>
                        </View>
                    </View>
                    <View style={{ width:'45%', height:165, backgroundColor:"#fff", borderRadius:10,  elevation: 10, shadowColor: '#454545', flexDirection:"column",alignItems:"center", justifyContent:'space-around', paddingHorizontal:10, marginBottom:20}}>
                        <Image source={require("../../../assets/images/milk.jpeg")} style={{height:60,width:60, marginRight:10}}/> 
                        <Text style={{textAlign:'center'}}>Milk</Text>
                        <Text style={{textAlign:'center', fontWeight:"bold", fontSize:18}}>248 litres</Text>
                        <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                            <Text>Grade:</Text>
                            <Text>Grade 1</Text>
                        </View>
                        <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                            <Text>Total Collection</Text>
                            <Text>9,650</Text>
                        </View>
                    </View>
                    <View style={{ width:'45%', height:165, backgroundColor:"#fff", borderRadius:10,  elevation: 10, shadowColor: '#454545', flexDirection:"column",alignItems:"center", justifyContent:'space-around', paddingHorizontal:10, marginBottom:20}}>
                        <Image source={require("../../../assets/images/milk.jpeg")} style={{height:60,width:60, marginRight:10}}/> 
                        <Text style={{textAlign:'center'}}>Milk</Text>
                        <Text style={{textAlign:'center', fontWeight:"bold", fontSize:18}}>248 litres</Text>
                        <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                            <Text>Grade:</Text>
                            <Text>Grade 1</Text>
                        </View>
                        <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                            <Text>Total Collection</Text>
                            <Text>9,650</Text>
                        </View>
                    </View>
                    <View style={{ width:'45%', height:165, backgroundColor:"#fff", borderRadius:10,  elevation: 10, shadowColor: '#454545', flexDirection:"column",alignItems:"center", justifyContent:'space-around', paddingHorizontal:10, marginBottom:20}}>
                        <Image source={require("../../../assets/images/milk.jpeg")} style={{height:60,width:60, marginRight:10}}/> 
                        <Text style={{textAlign:'center'}}>Milk</Text>
                        <Text style={{textAlign:'center', fontWeight:"bold", fontSize:18}}>248 litres</Text>
                        <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                            <Text>Grade:</Text>
                            <Text>Grade 1</Text>
                        </View>
                        <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                            <Text>Total Collection</Text>
                            <Text>9,650</Text>
                        </View>
                    </View>
                </View>
            </View>  
        </ScrollView>  
    )
}
const Collections = () => {
    return(
        <ScrollView>
            <View style={styles.dashContainer}>
                <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:5}}>Collections</Text>
                <View style={{width:'95%',  display:'flex',flexDirection:'row', justifyContent:'space-between',alignItems:'center', paddingLeft:10}}>
                    <TextInput style={[styles.inputField, {width:'84%', marginTop:0}]} placeholder='Search'/>
                    <TouchableOpacity style={{width:45, height:45, borderRadius:75, backgroundColor:"#3cb371", display:'flex', justifyContent:'center', alignItems:'center', marginRight:10}}>
                        <MaterialIcons name='search' size={24} color='#fff'/>
                    </TouchableOpacity>
                </View>
                <View style={{width:'90%', display:'flex',flexDirection:'row', justifyContent:'space-between',alignItems:'center', marginTop:15}}>
                    <TouchableOpacity
                        style={[styles.button, {width:100}]}
                    >
                        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>All</Text>
                    </TouchableOpacity>
                    
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
                </View>
                <View style={{width:'100%', height:60, justifyContent:"center", alignItems:'flex-end', paddingRight:20}}>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Download</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={{width:'100%', flexDirection:"column", alignItems:'center', justifyContent:"center"}}>
                    <View style={{height:100, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginLeft:5, marginBottom:15,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                        <MaterialIcons name='collections' size={22}/>
                        <View>
                            <Text style={{fontWeight:'bold', fontSize:18}}>BATCH-1234</Text>
                            <Text>2022-11-28; 21:57</Text>
                            <Text>Agent: James Kiama</Text>
                        </View>
                        <View style={{width:150}}>
                            <Text>92 litres</Text>
                            <Text>Expected Pay: Ksh 4,600</Text>
                        </View>
                    </View>
                    <View style={{height:100, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginLeft:5, marginBottom:15,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                        <MaterialIcons name='collections' size={22}/>
                        <View>
                            <Text style={{fontWeight:'bold', fontSize:18}}>BATCH-1234</Text>
                            <Text>2022-11-28; 21:57</Text>
                            <Text>Agent: James Kiama</Text>
                        </View>
                        <View style={{width:150}}>
                            <Text>92 litres</Text>
                            <Text>Expected Pay Ksh 4,600</Text>
                        </View>
                    </View>
                    <View style={{height:100, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginLeft:5, marginBottom:15,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                        <MaterialIcons name='collections' size={22}/>
                        <View>
                            <Text style={{fontWeight:'bold', fontSize:18}}>BATCH-1234</Text>
                            <Text>2022-11-28; 21:57</Text>
                            <Text>Agent: James Kiama</Text>
                        </View>
                        <View style={{width:150}}>
                            <Text>92 litres</Text>
                            <Text>Expected Pay Ksh 4,600</Text>
                        </View>
                    </View>
                    <View style={{height:100, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginLeft:5, marginBottom:15,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                        <MaterialIcons name='collections' size={22}/>
                        <View>
                            <Text style={{fontWeight:'bold', fontSize:18}}>BATCH-1234</Text>
                            <Text>2022-11-28; 21:57</Text>
                            <Text>Agent: James Kiama</Text>
                        </View>
                        <View style={{width:150}}>
                            <Text>92 litres</Text>
                            <Text>Expected Pay Ksh 4,600</Text>
                        </View>
                    </View>
                    <View style={{height:100, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginLeft:5, marginBottom:15,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                        <MaterialIcons name='collections' size={22}/>
                        <View>
                            <Text style={{fontWeight:'bold', fontSize:18}}>BATCH-1234</Text>
                            <Text>2022-11-28; 21:57</Text>
                            <Text>Agent: James Kiama</Text>
                        </View>
                        <View style={{width:150}}>
                            <Text>92 litres</Text>
                            <Text>Expected Pay Ksh 4,600</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>  
        </ScrollView>  
    )
}

const ProductManagement = () => {
    return(
        <View style={{flex:1, height:height}}>
            <Tab.Navigator
                screenOptions={{
                  tabBarActiveTintColor: '#fff',
                  tabBarLabelStyle: { fontSize: 12 },
                  tabBarStyle: { backgroundColor: '#3CB371' },
                }}
            >
                <Tab.Screen name="Dashboard" component={DashboardScreen} />
                <Tab.Screen name="Products" component={Products} />
                <Tab.Screen name="Collections" component={Collections} />
            </Tab.Navigator>
        </View>
    )
}
export default ProductManagement;

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