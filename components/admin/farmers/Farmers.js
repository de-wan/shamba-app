import React,{useState, useEffect} from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Modal, TextInput, ScrollView, Image } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get("window")

const Farmers = () => {
    const [addRoutesModal, setAddRoutesModal] = useState(false)
    const [farmers, setFarmers] = useState([])
    const [farmerModal, setFarmerModal] = useState(false)
    const [token, setToken] = useState('')

	const fetchToken = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@storage_Key')
            let user =(JSON.parse(jsonValue))
            setToken(user.token)
        } catch(e) {
           console.log(e)
        }
    }
	const fetchFarmers = async() => {
        fetchToken()
		await fetch(
			'https://erp.shambarecords.com/api/v1/get-farmers', {
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
			console.log(data.data)
			setFarmers(data.data)
		})
		.catch(err => console.log(`err: ${err}`))
	}
    useEffect(() => {
		fetchToken()
	},[])
	useEffect(() => {
		fetchFarmers()
	},[token])

    return(
        <View style={styles.mainContainer}>
            <Modal
                animationType="slide"
                visible={addRoutesModal}
                onRequestClose={() => {
                    setAddRoutesModal(!addRoutesModal);
                }}
            >
                <View>
                    <Text style={styles.title}>Add a route</Text> 
                    <View style={{width:"90%", height: 80, marginTop:50, paddingLeft:20}}>
                        <Text>Name of route:</Text> 
                        <TextInput style={styles.inputField} placeholder='Nanyuki' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 140, flexDirection:"row",justifyContent:"space-between", marginVertical:20,  paddingLeft:20}}>
                        <TouchableOpacity 
                            onPress={() => setAddRoutesModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 8}}>Add Route</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setAddRoutesModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 8}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
				animationType="slide"
                visible={farmerModal}
                onRequestClose={() => {
                    setFarmerModal(!farmerModal);
                }}
			>
				<ScrollView>
					<View style={{width:'100%', backgroundColor:"#3CB371"}}>
						<TouchableOpacity onPress={() => setFarmerModal(false)}>
							<AntDesign name='arrowleft' size={22} color='#fff'/> 
						</TouchableOpacity>
					</View>
					<View style={{backgroundColor:"#3CB371",alignItems:'center',paddingBottom:10}}>
						<Image source={require("../../../assets/images/avatar.png")} style={{height:150,width:150,marginBottom:10,borderRadius:75}}/>
						<Text style={{ fontSize:14, fontWeight:'bold', marginBottom:5, color:'#fff'}}>MaryAnn Kamau</Text>
						<Text style={{ marginBottom:5, color:'#fff'}}>Email: maryann@gmail.com</Text>
						<Text style={{ marginBottom:5, color:'#fff'}}>Phone no: 0799533824</Text>
						<Text style={{ marginBottom:5, color:'#fff'}}>Route: Nanyuki</Text>
						<Text style={{ marginBottom:5, color:'#fff'}}>Member No: 22-0049</Text>
						<Text style={{ marginBottom:5, color:'#fff'}}>Bank Details: 3339409594021, Equity Bank, Nanyuki Branch</Text>
					</View>	
					<View style={{ alignItems:'center',marginBottom:10}}>
						<Text style={{fontSize:14, fontWeight:"bold", paddingTop:10}}>Collections this week:</Text>
						<View style={{height:30, width:'90%', backgroundColor:"#fff", borderRadius:10, paddingHorizontal:20, marginVertical:10, elevation: 20, shadowColor: '#000', flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
							<Text>Milk</Text>
							<Text>913 litres</Text>
						</View> 
						<Text style={{fontSize:14, fontWeight:"bold", paddingTop:10}}>Livestock and Crops:</Text>
						<View style={{height:130, width:'90%', backgroundColor:"#fff", borderRadius:10, paddingHorizontal:20, marginVertical:10, elevation: 20, shadowColor: '#000', flexDirection:"column",justifyContent:"space-around"}}>
							<View style={{height:30, width:'100%', flexDirection:"row",justifyContent:"space-between"}}>
								<Text>Dairy cows</Text>
								<Text>17</Text>
							</View>
							<View style={{height:30, width:'100%', flexDirection:"row",justifyContent:"space-between"}}>
								<Text>Maize</Text>
								<Text>261 bags</Text>
							</View>
							<View style={{height:30, width:'100%', flexDirection:"row",justifyContent:"space-between"}}>
								<Text>Spinach</Text>
								<Text>37 bags</Text>
							</View>
							<View style={{height:30, width:'100%', flexDirection:"row",justifyContent:"space-between"}}>
								<Text>Tomatoes</Text>
								<Text>100 crates</Text>
							</View>
						</View> 
						<Text style={{fontSize:14, fontWeight:"bold", paddingTop:10}}>Wallet</Text>
						<View style={{height:130, width:'90%', backgroundColor:"#fff", borderRadius:10, paddingHorizontal:20, marginVertical:10, elevation: 20, shadowColor: '#000', flexDirection:"column",justifyContent:"space-around"}}>
							<View style={{height:30, width:'100%', flexDirection:"row",justifyContent:"space-between"}}>
								<Text>Total payments:</Text>
								<Text>Ksh 17,350</Text>
							</View>
							<View style={{height:30, width:'100%', flexDirection:"row",justifyContent:"space-between"}}>
								<Text>Made Payments</Text>
								<Text>Ksh 11,050</Text>
							</View>
							<View style={{height:30, width:'100%', flexDirection:"row",justifyContent:"space-between"}}>
								<Text>Pending Payment</Text>
								<Text>Ksh 6,300</Text>
							</View>
						</View> 
						<Text style={{fontSize:14, fontWeight:"bold", paddingTop:10}}>7 day vet/agronomist schedules</Text>
						<View style={{height:150, width:'90%', backgroundColor:"#fff", borderRadius:10, paddingHorizontal:20, marginVertical:10, elevation: 20, shadowColor: '#000', flexDirection:"column",justifyContent:"space-around"}}>
							<View style={{height:50, width:'100%', flexDirection:"row",justifyContent:"space-between"}}>
								<Text style={{width:"45%"}}>Dr. Ngugi(Vet)</Text>
								<View style={{width:"55%", flexDirection:"column", alignItems:'flex-end'}}>
									<Text>12-10-2022</Text>
									<Text>Reason: Artificial Insemination</Text>
								</View>
							</View>
							<View style={{height:50, width:'100%', flexDirection:"row",justifyContent:"space-between"}}>
								<Text style={{width:"45%"}}>Dr. Teresia(Agronomist)</Text>
								<View style={{width:"55%", flexDirection:"column", alignItems:'flex-end'}}>
									<Text>17-10-2022</Text>
									<Text>Reason: Crop Irrigation</Text>
								</View>
							</View>
						</View> 
					</View>
				</ScrollView>
			</Modal>

            <View style={{width:'95%',  display:'flex',flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingLeft:10}}>
                <TextInput style={[styles.inputField, {width:'84%', marginTop:0}]} placeholder='Search'/>
                <TouchableOpacity style={{width:45, height:45, borderRadius:75, backgroundColor:"#3cb371", display:'flex', justifyContent:'center', alignItems:'center', marginRight:10}}>
                    <MaterialIcons name='search' size={24} color='#fff'/>
                </TouchableOpacity>
            </View>
            <View style={{width:'90%', display:'flex',flexDirection:'row', justifyContent:'space-between',alignItems:'center', marginTop:10}}>
                <TouchableOpacity
                    style={[styles.button, {width:100}]}
                >
                    <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, {width:100}]}
                >
                    <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Route</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, {width:100}]}
                >
                    <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Gender</Text>
                </TouchableOpacity>
            </View>

            <View style={{width:'100%',justifyContent:"center", alignItems:'flex-end', paddingRight:20, paddingVertical:10}}>
                <TouchableOpacity
                    onPress={() => setAddRoutesModal(true)}
                    style={styles.button}
                >
                    <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Add Farmer</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{width:'100%', flexDirection:"column", alignItems:'center', justifyContent:"center", paddingLeft:10}}>
                {farmers?.map((farmer) => (
                    <View style={{height:90,width:'94%', borderColor:"#3cb371", borderBottomWidth:1, borderRadius:10, marginBottom:15, flexDirection:"row",justifyContent:"space-between", alignItems:'center'}} key={farmer.email}>
                        <View style={{width:240,display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:"center"}}>
                            <Image source={require("../../../assets/images/avatar.png")} style={{height:45,width:45,borderRadius:65, marginRight:10}}/> 
                            <View style={{height:110, width:140, flexDirection:"column",justifyContent:"space-around", alignItems:"center", paddingVertical:20}}>
                                <View style={{width:200, flexDirection:"row",justifyContent:'flex-start', alignItems:"center"}}>
                                    <Text style={{textAlign:"center",color:"#000",fontWeight:"bold", fontSize:14}}>{farmer.first_name} {farmer.other_names}</Text> 
                                </View>
                                <View style={{width:200, flexDirection:"row",justifyContent:"space-between", alignItems:"center", paddingRight:10}}>
                                    <Text>Location</Text>
                                    <Text>{farmer.location}</Text>
                                </View>
                                <View style={{width:200, flexDirection:"row",justifyContent:"space-between", alignItems:"center", paddingRight:10}}>
                                    <Text>email</Text>
                                    <Text>{farmer.email}</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => setFarmerModal(true)} style={{width:30, height:30, borderRadius:75, borderColor:"#3cb371", borderWidth:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <MaterialIcons name='keyboard-arrow-right' size={24} color='#3cb371'/>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
export default Farmers;

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
    tableHeader: {
		backgroundColor: '#DCDCDC',
	},
})