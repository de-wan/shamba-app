import React,{useState} from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Modal, TextInput, ScrollView } from "react-native";
import { crops, diseases, livestock} from "../../../tables/FarmManagementTables";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import CheckBox from '@react-native-community/checkbox'

const {width, height} = Dimensions.get("window")
const Tab = createMaterialTopTabNavigator();

const LivestockScreen = () => {
    const [addLivestockModal, setAddLivestockModal] = useState(false)

    return(
        <View style={styles.mainContainer}>
            <Modal
                animationType="slide"
                visible={addLivestockModal}
                onRequestClose={() => {
                    setAddLivestockModal(!addLivestockModal);
                }}
            >
                <View>
                    <Text style={styles.title}>Add Livestock/poultry</Text> 
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Name of livestock:</Text> 
                        <TextInput style={styles.inputField} placeholder='Dairy Cattle' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Number of animals:</Text> 
                        <TextInput style={styles.inputField} placeholder='894' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Products produced</Text> 
                        <TextInput style={styles.inputField} placeholder='Milk, Beef' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Variations:</Text> 
                        <TextInput style={styles.inputField} placeholder='Friesian, Jersey, Guernsey' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 140, flexDirection:"row",justifyContent:"space-between", marginVertical:20,  paddingLeft:20}}>
                        <TouchableOpacity 
                            onPress={() => setAddLivestockModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 8}}>Add Livestock</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setAddLivestockModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 8}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:10}}>Livestock</Text>
            <View style={{ width:'90%', height:90, borderRadius:10, backgroundColor:"#3CB371", flexDirection:'column', justifyContent:'space-around', paddingHorizontal:10, marginBottom:20}}>
                <Text style={{textAlign:'center', color:'#fff'}}>Total Livestock/Poultry Breeds</Text>
                <Text style={{textAlign:'center', fontWeight:"bold", color:'#fff', fontSize:18}}>7</Text>
            </View>
            <View style={{width:'100%', height:40, justifyContent:"center", alignItems:'flex-end', paddingRight:20}}>
                <TouchableOpacity
                    onPress={() => setAddLivestockModal(true)}
                    style={styles.button}
                >
                    <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Add Livestock</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{width:'100%', flexDirection:"column", alignItems:'center', justifyContent:"center"}}>
                {livestock.map(livestock => (
                    <View style={{height:140, borderColor:"#90ee91",borderBottomWidth:1, width:'95%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                        <View style={{width:'10%'}}><MaterialCommunityIcons name='cow' size={22}/></View>
                        <View style={{width:'50%', justifyContent:'flex-start'}}>
                            <Text style={{fontWeight:'bold'}}>{livestock.name}</Text>
                            <Text>Registration No: {livestock.registeredNo}</Text>
                            <Text>Breed: {livestock.variations}</Text>
                            <Text>Product Grade: Grade 1</Text>
                            <Text>Expected yield/month: 249</Text>
                        </View>
                        <View style={{flexDirection:'column', width:'30%', height:'90%',justifyContent:'space-around'}}>
                            <TouchableOpacity style={{width:100, height:30, backgroundColor:'#E55451', borderRadius:20, marginTop:10}}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:5}}>View Calendar</Text>
                            </TouchableOpacity>
                            <View style={{flexDirection:"row", justifyContent:'space-between', paddingRight:5}}>
                                <AntDesign name='edit' size={22} color='#3CB371'/>
                                <AntDesign name='delete' size={22} color='#E55451'/>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const CropScreen = () => {
    const [addCropModal, setAddCropModal] = useState(false)
    const [calendarModal, setCalendarModal] = useState(false)

    return(
        <View style={styles.mainContainer}>
            <Modal
                animationType="slide"
                visible={addCropModal}
                onRequestClose={() => {
                    setAddCropModal(!addCropModal);
                }}
            >
                <ScrollView>
                    <Text style={styles.title}>Add Crop</Text> 
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Name of Crop:</Text> 
                        <TextInput style={styles.inputField} placeholder='Dairy Cattle' autofocus={true}/>
                    </View>
                    <Text style={{fontSize:12, color:'#f00', textAlign:"center", marginVertical:10}}>All estimations are done for 1 acre of land</Text>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Duration of land preparation(weeks):</Text> 
                        <TextInput style={styles.inputField} placeholder='2'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Labor needed during land preparation:</Text> 
                        <TextInput style={styles.inputField} placeholder='4 people'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Cost during land preparation(Ksh):</Text> 
                        <TextInput style={styles.inputField} placeholder='9,500'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Duration of planting(weeks):</Text> 
                        <TextInput style={styles.inputField} placeholder='1'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Labor needed during planting:</Text> 
                        <TextInput style={styles.inputField} placeholder='2 people'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Cost during planting(Ksh):</Text> 
                        <TextInput style={styles.inputField} placeholder='10,940'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Duration of weeding(weeks):</Text> 
                        <TextInput style={styles.inputField} placeholder='1'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Labor needed during weeding:</Text> 
                        <TextInput style={styles.inputField} placeholder='2 people'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Cost of weeding(Ksh):</Text> 
                        <TextInput style={styles.inputField} placeholder='1,200'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Duration of harvesting(weeks):</Text> 
                        <TextInput style={styles.inputField} placeholder='1'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Labor needed during harvesting:</Text> 
                        <TextInput style={styles.inputField} placeholder='3 people'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Cost of harvesting(Ksh):</Text> 
                        <TextInput style={styles.inputField} placeholder='9,500'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Required farm inputs:</Text> 
                        <TextInput style={styles.inputField} placeholder='Manure, Seeds, Water, Machinery'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Total amount(Ksh):</Text> 
                        <TextInput style={styles.inputField} placeholder='41,000'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Total Duration(weeks):</Text> 
                        <TextInput style={styles.inputField} placeholder='18 weeks'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Expected Yields(per crop):</Text>
                        <TextInput style={styles.inputField} placeholder='17'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Agronomist(s) In-Charge</Text> 
                        <TextInput style={styles.inputField} placeholder='Dr.Njagi'/>
                    </View>
                    <View style={{width:"90%", height: 140, flexDirection:"row",justifyContent:"space-between", marginVertical:20,  paddingLeft:20}}>
                        <TouchableOpacity 
                            onPress={() => setAddCropModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 8}}>Add Crop</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setAddCropModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 8}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Modal>
            <Modal
				animationType="slide"
                visible={calendarModal}
                onRequestClose={() => {
                    setCalendarModal(!calendarModal);
                }}
			>
                <TouchableOpacity onPress={() => setCalendarModal(false)}>
                    <AntDesign name='arrowleft' size={22}/> 
                </TouchableOpacity>
                <ScrollView>
                    <Text style={{textAlign:'center'}}>Crop Calendar</Text>
                    <Text style={styles.title}>Maize (H511, H622, H632)</Text>
                    <View style={{width:'100%', alignItems:"center"}}>
                        <View style={{height:220, width:'90%', backgroundColor:"#fff", borderRadius:10, paddingHorizontal:20, marginVertical:10, elevation: 20, shadowColor: '#000', flexDirection:"column",alignItems:"center"}}>
                            <Text style={styles.title}>Land Preparation</Text>
                            <View style={{width:'90%', height:30, flexDirection:'row', justifyContent:"space-between"}}>
                                <Text>Duration</Text>
                                <Text>2 weeks</Text>
                            </View>
                            <View style={{width:'90%', height:30, flexDirection:'row', justifyContent:"space-between"}}>
                                <Text>Labour</Text>
                                <Text>4 people</Text>
                            </View>
                            <View style={{width:'90%', height:30, flexDirection:'row', justifyContent:"space-between"}}>
                                <Text>Cost</Text>
                                <Text>8,900</Text>
                            </View>
                            <View style={{width:'90%', height:30, flexDirection:'row', justifyContent:"space-between"}}>
                                <Text>Farm Inputs</Text>
                                <Text>Machinery, Manure</Text>
                            </View>
                            <View style={{width:'90%', height:30, flexDirection:'row', justifyContent:"space-between"}}>
                                <Text>Month</Text>
                                <Text>April</Text>
                            </View>
                        </View> 
                        <View style={{height:220, width:'90%', backgroundColor:"#fff", borderRadius:10, paddingHorizontal:20, marginVertical:10, elevation: 20, shadowColor: '#000', flexDirection:"column",alignItems:"center"}}>
                            <Text style={styles.title}>Planting</Text>
                            <View style={{width:'90%', height:30, flexDirection:'row', justifyContent:"space-between"}}>
                                <Text>Duration</Text>
                                <Text>2 weeks</Text>
                            </View>
                            <View style={{width:'90%', height:30, flexDirection:'row', justifyContent:"space-between"}}>
                                <Text>Labour</Text>
                                <Text>4 people</Text>
                            </View>
                            <View style={{width:'90%', height:30, flexDirection:'row', justifyContent:"space-between"}}>
                                <Text>Cost</Text>
                                <Text>10,550</Text>
                            </View>
                            <View style={{width:'90%', height:30, flexDirection:'row', justifyContent:"space-between"}}>
                                <Text>Farm Inputs</Text>
                                <Text>Seeds, Machinery</Text>
                            </View>
                            <View style={{width:'90%', height:30, flexDirection:'row', justifyContent:"space-between"}}>
                                <Text>Month</Text>
                                <Text>May</Text>
                            </View>
                        </View> 
                        <View style={{height:220, width:'90%', backgroundColor:"#fff", borderRadius:10, paddingHorizontal:20, marginVertical:10, elevation: 20, shadowColor: '#000', flexDirection:"column",alignItems:"center"}}>
                            <Text style={styles.title}>Weeding</Text>
                            <View style={{width:'90%', height:30, flexDirection:'row', justifyContent:"space-between"}}>
                                <Text>Duration</Text>
                                <Text>1 week</Text>
                            </View>
                            <View style={{width:'90%', height:30, flexDirection:'row', justifyContent:"space-between"}}>
                                <Text>Labour</Text>
                                <Text>2 people</Text>
                            </View>
                            <View style={{width:'90%', height:30, flexDirection:'row', justifyContent:"space-between"}}>
                                <Text>Cost</Text>
                                <Text>4,500</Text>
                            </View>
                            <View style={{width:'90%', height:30, flexDirection:'row', justifyContent:"space-between"}}>
                                <Text>Farm Inputs</Text>
                                <Text>Fertilizer</Text>
                            </View>
                            <View style={{width:'90%', height:30, flexDirection:'row', justifyContent:"space-between"}}>
                                <Text>Month</Text>
                                <Text>June</Text>
                            </View>
                        </View> 
                        <View style={{height:220, width:'90%', backgroundColor:"#fff", borderRadius:10, paddingHorizontal:20, marginVertical:10, elevation: 20, shadowColor: '#000', flexDirection:"column",alignItems:"center"}}>
                            <Text style={styles.title}>Harvesting, Drying and Storage</Text>
                            <View style={{width:'90%', height:30, flexDirection:'row', justifyContent:"space-between"}}>
                                <Text>Duration</Text>
                                <Text>2 weeks</Text>
                            </View>
                            <View style={{width:'90%', height:30, flexDirection:'row', justifyContent:"space-between"}}>
                                <Text>Labour</Text>
                                <Text>3 people</Text>
                            </View>
                            <View style={{width:'90%', height:30, flexDirection:'row', justifyContent:"space-between"}}>
                                <Text>Cost</Text>
                                <Text>11,000</Text>
                            </View>
                            <View style={{width:'90%', height:30, flexDirection:'row', justifyContent:"space-between"}}>
                                <Text>Farm Inputs</Text>
                                <Text>Machinery</Text>
                            </View>
                            <View style={{width:'90%', height:30, flexDirection:'row', justifyContent:"space-between"}}>
                                <Text>Month</Text>
                                <Text>August</Text>
                            </View>
                        </View>
                    </View> 
                </ScrollView>
			</Modal>
            <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:10}}>Crops</Text>
            <View style={{ width:'90%', height:90, borderRadius:10, backgroundColor:"#3CB371", flexDirection:'column', justifyContent:'space-around', paddingHorizontal:10,marginBottom:20}}>
                <Text style={{textAlign:'center', color:'#fff'}}>Registered crops</Text>
                <Text style={{textAlign:'center', fontWeight:"bold", color:'#fff', fontSize:18}}>29</Text>
            </View>
            <View style={{width:'100%', height:40, justifyContent:"center", alignItems:'flex-end', paddingRight:20}}>
                <TouchableOpacity
                    onPress={() => setAddCropModal(true)}
                    style={styles.button}
                >
                    <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Add Crop</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{width:'100%', flexDirection:"column", alignItems:'center', justifyContent:"center"}}>
                {crops.map(crop => (
                    <View style={{height:140, borderColor:"#90ee91",borderBottomWidth:1, width:'95%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                        <View style={{width:'10%'}}><MaterialCommunityIcons name='grass' size={22}/></View>
                        <View style={{width:'50%', justifyContent:'flex-start'}}>
                            <Text style={{fontWeight:'bold'}}>{crop.name}</Text>
                            <Text>Agronomist: {crop.agronomist}</Text>
                            <Text>Variations: {crop.variations}</Text>
                            <Text>Expected Yields: 240 units</Text>
                        </View>
                        <View style={{width:'40%', height:'85%',flexDirection:"column", justifyContent:"space-between", paddingLeft:10}}>
                            <TouchableOpacity style={{width:100, height:30, backgroundColor:'#E55451', borderRadius:20, marginTop:20}} onPress={() => setCalendarModal(true)}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:5}}>View Calendar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:100, height:30, backgroundColor:'#E55451', borderRadius:20}} onPress={() => setCalendarModal(true)}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:5}}>Production Cost</Text>
                            </TouchableOpacity>
                            <View style={{flexDirection:'row', justifyContent:'space-between', paddingRight:30}}>
                                <AntDesign name='edit' size={20} color='#3CB371'/>
                                <AntDesign name='delete' size={20} color='#E55451'/>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>    
    )
}

const DiseaseScreen = () => {
    const [addDiseaseModal, setAddDiseaseModal] = useState(false)
    const [reportDiseaseModal, setReportDiseaseModal] = useState(false)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return(
        <ScrollView>
            <Modal
                animationType="slide"
                visible={addDiseaseModal}
                onRequestClose={() => {
                    setAddDiseaseModal(!addDiseaseModal);
                }}
            >
                <View>
                    <Text style={styles.title}>Add Disease</Text> 
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Name of Disease:</Text> 
                        <TextInput style={styles.inputField} placeholder='Foot and Mouth' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Signs and symptoms:</Text> 
                        <TextInput style={styles.inputField} placeholder='Reduced milk yields, sores on feet' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Add a picture:</Text> 
                        <TextInput style={styles.inputField} placeholder='Browse image'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Found in:</Text> 
                        <TextInput style={styles.inputField} placeholder='Cows'/>
                    </View>
                    <View style={{width:"90%", height: 140, flexDirection:"row",justifyContent:"space-between", marginVertical:20,  paddingLeft:20}}>
                        <TouchableOpacity 
                            onPress={() => setAddDiseaseModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 8}}>Add Disease</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setAddDiseaseModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 8}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                visible={reportDiseaseModal}
                onRequestClose={() => {
                    setReportDiseaseModal(!reportDiseaseModal);
                }}
            >
                <View>
                    <Text style={styles.title}>Report Disease</Text> 
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Pin your location:</Text> 
                        <TextInput style={styles.inputField} placeholder='Nyandarua, Ol Kalou, Nyamakima ward' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Level of severity:</Text> 
                        <TextInput style={styles.inputField} placeholder='Mild'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text>Send an alert to the Agronomist/Vet in-charge</Text>
                    </View>
                    <View style={{width:"90%", height: 140, flexDirection:"row",justifyContent:"space-between", marginVertical:20,  paddingLeft:20}}>
                        <TouchableOpacity 
                            onPress={() => setReportDiseaseModal(false)} 
                            style={[styles.button, {width:140}]} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 8}}>Report Disease</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setReportDiseaseModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 8}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={styles.mainContainer}>                
                <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginBottom:10}}>Disease</Text>
                <View style={{ width:'90%', height:90, borderRadius:10, backgroundColor:"#3CB371", flexDirection:'column', justifyContent:'space-around', paddingHorizontal:10}}>
                    <Text style={{textAlign:'center', color:'#fff'}}>Reported Diseases in your area</Text>
                    <Text style={{textAlign:'center', fontWeight:"bold", color:'#fff', fontSize:18}}>5</Text>
                </View>
                <View style={{width:'100%', height:40, justifyContent:"center", alignItems:'flex-end', paddingRight:20}}>
                    <TouchableOpacity
                        onPress={() => setAddDiseaseModal(true)}
                        style={styles.button}
                    >
                        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Add Disease</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={{width:'100%', flexDirection:"column", alignItems:'center', justifyContent:"center"}}>
                    {diseases.map(disease => (
                        <View style={{height:140, borderColor:"#90ee91",borderBottomWidth:1, width:'95%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                            <View style={{width:'10%'}}><FontAwesome5 name='pastafarianism' size={22}/></View>
                            <View style={{width:'60%', justifyContent:'flex-start', marginLeft:10}}>
                                <Text style={{fontWeight:'bold'}}>{disease.name}</Text>
                                <Text>Category: {disease.category}</Text>
                                <Text>Found In: {disease.foundIn}</Text>
                                <Text>Symptoms: Sores on feet, shivering</Text>
                                <Text style={{fontWeight:'bold'}}>View image</Text>
                            </View>
                            <View style={{width:'30%', height:'100%',flexDirection:"column", justifyContent:"space-around"}}>
                                <TouchableOpacity style={{width:90, height:30, backgroundColor:'#E55451', borderRadius:20, marginTop:10}} onPress={() => setReportDiseaseModal(true)}>
                                    <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:5}}>Report</Text>
                                </TouchableOpacity>
                                <View style={{flexDirection:'row', justifyContent:'space-between', paddingRight:20}}>
                                    <AntDesign name='edit' size={20} color='#3CB371'/>
                                    <AntDesign name='delete' size={20} color='#E55451'/>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    )
}

const FarmManagement = () => {
    return(
        <View style={{flex:1, height:height}}>
            <Tab.Navigator
                screenOptions={{
                  tabBarActiveTintColor: '#fff',
                  tabBarLabelStyle: { fontSize: 12 },
                  tabBarStyle: { backgroundColor: '#3CB371' },
                }}
            >
                <Tab.Screen name="Livestock" component={LivestockScreen} />
                <Tab.Screen name="Crop" component={CropScreen} />
                <Tab.Screen name="Disease" component={DiseaseScreen} />
            </Tab.Navigator>
        </View>
    )
}
export default FarmManagement;

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