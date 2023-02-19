import React, {useState} from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions , TouchableOpacity, Modal, TextInput} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

const Vet = () => {
    const [bookVetModal, setBookVetModal] = useState(false)

    return(
        <View>
            <Modal
                animationType="slide"
                visible={bookVetModal}
                onRequestClose={() => {
                    setBookVetModal(!bookVetModal);
                }}
            >
                <ScrollView>
                    <Text style={styles.title}>Book Vet</Text> 
                    <View style={{width:"90%", height: 80, marginTop:5, paddingLeft:20}}>
                        <Text>Agronomist or Vet:</Text> 
                        <TextInput style={styles.inputField} placeholder='Vet' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Select service needed:</Text> 
                        <TextInput style={styles.inputField} placeholder='Vaccination'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Affected number/size:</Text> 
                        <TextInput style={styles.inputField} placeholder='200 chicken, 2 acres'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Your location:</Text> 
                        <TextInput style={styles.inputField} placeholder='Nyandarua, Ol Kalou, Muchinga Ward'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Select date and time</Text> 
                        <TextInput style={styles.inputField} placeholder='24-09-2022, 11:00am'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Your phone number:</Text> 
                        <TextInput style={styles.inputField} placeholder='+254798040220'/>
                    </View>
                    
                    <View style={{width:"90%", height: 140, flexDirection:"row",justifyContent:"space-between", marginVertical:20,  paddingLeft:20}}>
                        <TouchableOpacity 
                            onPress={() => setBookVetModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 6}}>Book vet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setBookVetModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 6}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Modal>
            <View style={{backgroundColor:'#fff'}}>
                <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:5}}>Bookings</Text>
                <View style={{width:'100%', height:40, justifyContent:"center", alignItems:'flex-end', paddingRight:20}}>
                    <TouchableOpacity
                        onPress={() => setBookVetModal(true)}
                        style={[styles.button, {width:'96%'}]}
                    >
                        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Book Vet</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:'95%',  display:'flex', flexDirection:'row', justifyContent:'space-between',alignItems:'center', paddingLeft:10, marginVertical:10, marginLeft:5}}>
                    <TextInput style={[styles.inputField, {width:'84%', marginTop:0}]} placeholder='Search'/>
                    <TouchableOpacity style={{width:45, height:45, borderRadius:75, backgroundColor:"#3cb371", display:'flex', justifyContent:'center', alignItems:'center', marginRight:10}}>
                        <MaterialIcons name='search' size={24} color='#fff'/>
                    </TouchableOpacity>
                </View>
                
                <View style={{width:'95%', display:'flex',flexDirection:'row', justifyContent:'space-between',alignItems:'center', marginTop:15, marginHorizontal:10, paddingRight:10}}>
                    <TouchableOpacity
                        style={[styles.button, {width:80}]}
                    >
                        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Pending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, {width:80}]}
                    >
                        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Approved</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, {width:80}]}
                    >
                        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Resolved</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, {width:80}]}
                    >
                        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Cancelled</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView  contentContainerStyle={{width:'100%', flexDirection:"column", alignItems:'center', justifyContent:"center"}}>
                        <View style={{height:140, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                            <View style={{width:'15%'}}><Fontisto name='doctor' size={26}/></View>
                            <View style={{width:'50%', justifyContent:'flex-start'}}>
                                <Text style={{marginBottom:2}}>Assigned Vet: Dr.Matubia</Text>
                                <Text style={{marginBottom:2}}>Service: Vaccination</Text>
                                <Text style={{marginBottom:4}}>Date: 24-09-2022, 11:00am</Text>
                                <View style={{width:'60%', flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
                                    <Text>Status: </Text> 
                                    <View style={{width:70, height:25, backgroundColor:'#E55451', borderRadius:10}}>
                                        <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:4}}>Pending</Text>
                                    </View> 
                                </View>
                            </View>
                            <View style={{flexDirection:'column', width:'29%', height:'70%', justifyContent:'space-around', paddingLeft:10}}>
                                <TouchableOpacity
                                    style={[styles.button, {width:90, backgroundColor:'#E9AB17'}]}
                                >
                                    <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Reschedule</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.button, {width:90, backgroundColor:'#E55451'}]}
                                >
                                    <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Unschedule</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{height:140, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                            <View style={{width:'15%'}}><Fontisto name='doctor' size={26}/></View>
                            <View style={{width:'50%', justifyContent:'flex-start'}}>
                                <Text style={{marginBottom:2}}>Assigned Vet: Dr.Matubia</Text>
                                <Text style={{marginBottom:2}}>Service: Vaccination</Text>
                                <Text style={{marginBottom:4}}>Date: 24-09-2022, 11:00am</Text>
                                <View style={{width:'60%', flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
                                    <Text>Status: </Text> 
                                    <View style={{width:70, height:25, backgroundColor:'#E55451', borderRadius:10}}>
                                        <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:4}}>Pending</Text>
                                    </View> 
                                </View>
                            </View>
                            <View style={{flexDirection:'column', width:'29%', height:'70%', justifyContent:'space-around', paddingLeft:10}}>
                                <TouchableOpacity
                                    style={[styles.button, {width:90, backgroundColor:'#E9AB17'}]}
                                >
                                    <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Reschedule</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.button, {width:90, backgroundColor:'#E55451'}]}
                                >
                                    <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Unschedule</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{height:140, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                            <View style={{width:'15%'}}><Fontisto name='doctor' size={26}/></View>
                            <View style={{width:'50%', justifyContent:'flex-start'}}>
                                <Text style={{marginBottom:2}}>Assigned Vet: Dr.Matubia</Text>
                                <Text style={{marginBottom:2}}>Service: Vaccination</Text>
                                <Text style={{marginBottom:4}}>Date: 24-09-2022, 11:00am</Text>
                                <View style={{width:'60%', flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
                                    <Text>Status: </Text> 
                                    <View style={{width:70, height:25, backgroundColor:'#E55451', borderRadius:10}}>
                                        <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:4}}>Pending</Text>
                                    </View> 
                                </View>
                            </View>
                            <View style={{flexDirection:'column', width:'29%', height:'70%', justifyContent:'space-around', paddingLeft:10}}>
                                <TouchableOpacity
                                    style={[styles.button, {width:90, backgroundColor:'#E9AB17'}]}
                                >
                                    <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Reschedule</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.button, {width:90, backgroundColor:'#E55451'}]}
                                >
                                    <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Unschedule</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{height:140, borderColor:"#90ee91",borderBottomWidth:1, width:'100%', borderRadius:10, paddingHorizontal:10, marginBottom:5,  flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} >    
                            <View style={{width:'15%'}}><Fontisto name='doctor' size={26}/></View>
                            <View style={{width:'50%', justifyContent:'flex-start'}}>
                                <Text style={{marginBottom:2}}>Assigned Vet: Dr.Matubia</Text>
                                <Text style={{marginBottom:2}}>Service: Vaccination</Text>
                                <Text style={{marginBottom:4}}>Date: 24-09-2022, 11:00am</Text>
                                <View style={{width:'60%', flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
                                    <Text>Status: </Text> 
                                    <View style={{width:70, height:25, backgroundColor:'#E55451', borderRadius:10}}>
                                        <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:4}}>Pending</Text>
                                    </View> 
                                </View>
                            </View>
                            <View style={{flexDirection:'column', width:'29%', height:'70%', justifyContent:'space-around', paddingLeft:10}}>
                                <TouchableOpacity
                                    style={[styles.button, {width:90, backgroundColor:'#E9AB17'}]}
                                >
                                    <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Reschedule</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.button, {width:90, backgroundColor:'#E55451'}]}
                                >
                                    <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Unschedule</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                </ScrollView>
            </View>
        </View>    
    )
}
export default Vet;

const {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({
    dashContainer: {
        width:width,
        height:height,
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