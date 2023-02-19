import React from 'react'
import {useState} from 'react'
import { View, Text, StyleSheet, Dimensions , TouchableOpacity, Modal, ScrollView, TextInput} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const Insurance = () => {
    const navigation = useNavigation()
    const [payModal, setPayModal] = useState(false) 
    const [expectedType, setExpectedType] = useState('')
    const [expectedAmt, setExpectedAmt] = useState(null)

    return(
        <View style={{backgroundColor:'#fff'}}>
            <Modal
                animationType="slide"
                visible={payModal}
                onRequestClose={() => {
                    setPayModal(!payModal);
                }}
            >
                <ScrollView>
                    <Text style={styles.title}>Pay Insurance </Text> 
                    <View style={{width:"90%", height: 80, marginTop:5, paddingLeft:20}}>
                        <Text>Select payment type:</Text> 
                        <TextInput style={styles.inputField} placeholder='Annual'  onChangeText={expectedValue => setExpectedType(expectedValue)}/>
                    </View>
                    {expectedAmt !== null && <Text style={{textAlign:'center', fontWeight:'bold'}}>Total Amount: {expectedAmt}</Text>}
                    <View style={{width:"100%", height: 140, flexDirection:"row",justifyContent:"space-between", marginVertical:20,  paddingHorizontal:20}}>
                        {expectedType !== '' && <TouchableOpacity 
                            onPress={() => setExpectedAmt('Ksh 2,000')} 
                            style={[styles.button, {width:120}]} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 6}}>See Amount</Text>
                        </TouchableOpacity>}
                        <TouchableOpacity 
                            onPress={() => setPayModal(false)} 
                            style={[styles.button, {width:80}]} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 6}}>Pay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setPayModal(false)} 
                            style={[styles.button, {width:80}]} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 6}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Modal>
            <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold", marginVertical:5}}>Insurance</Text>
            <Text style={{width:'100%', textAlign:"center",fontSize:14, fontWeight:"bold", marginVertical:5}}>You are using the standard plan</Text>
            <View style={{ width:'90%', height:200, borderRadius:10, backgroundColor:"#3CB371", flexDirection:'column', justifyContent:'space-around', paddingHorizontal:10, marginBottom:10, marginLeft:20}}>
                <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                    <Text style={{color:'#fff'}}>Personal</Text>
                    <Entypo name='check' size={22} color='#fff'/>
                </View>
                <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                    <Text style={{color:'#fff'}}>Personal and family</Text>
                    <FontAwesome name='remove' size={22} color='#fff'/>
                </View>
                <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                    <Text style={{color:'#fff'}}>Personal, family and livestock</Text>
                    <FontAwesome name='remove' size={22} color='#fff'/>
                </View>
            </View>
            <View style={{width:'100%', display:'flex',flexDirection:'row', alignItems:"center", justifyContent:'space-around', marginBottom:15}}>
                <TouchableOpacity onPress={() => navigation.navigate('Wallet', {screen: 'Bills'})} style={{width:120, height:40, backgroundColor:"#3CB371", borderRadius:10,  elevation: 10, shadowColor: '#454545', flexDirection:"column",alignItems:"center", justifyContent:'space-around'}}>
                    <Text style={{fontSize:14, color:'#fff', fontWeight:'bold'}}>Upgrade Plan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:120, height:40, backgroundColor:"#3CB371", borderRadius:10,  elevation: 10, shadowColor: '#454545', flexDirection:"column",alignItems:"center", justifyContent:'space-around'}} onPress={() => setPayModal(true)}>
                    <Text style={{fontSize:14, color:'#fff', fontWeight:'bold'}}>Pay</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Insurance;
const {width} = Dimensions.get("window")
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