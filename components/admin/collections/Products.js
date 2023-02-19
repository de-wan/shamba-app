import React, {useState, useEffect} from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions , TouchableOpacity, Modal, TextInput, Image} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Products = () => {
    const [addProductModal, setAddProductModal] = useState(false)
    const [token, setToken] = useState('')
    const [products, setProducts] = useState([])
    const [id, setId] = useState('')

    const fetchToken = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@storage_Key')
            let user =(JSON.parse(jsonValue))
            setToken(user.token)
            setId(user.id)
        } catch(e) {
           console.log(e)
        }
    }
    const fetchProducts = () => {
		fetch(
			`https://erp.shambarecords.com/api/v1/products/${id}`, {
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
			setProducts(data.data)
		})
		.catch(err => console.log(`err: ${err}`))
	}
    useEffect(() => {
        fetchToken()
    },[])
    useEffect(() => {
        fetchProducts()
    },[token, id])
    console.log(id)
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
                    <View style={{width:'100%', backgroundColor:"#3CB371"}}>
						<TouchableOpacity onPress={() => setAddProductModal(false)}>
							<AntDesign name='arrowleft' size={22} color='#fff'/> 
						</TouchableOpacity>
					</View>
                    <Text style={styles.title}>Add a product</Text> 
                    <View style={{width:"90%", height: 80, marginTop:5, paddingLeft:20}}>
                        <Text>Name of product:</Text> 
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
                <Text style={{width:'100%', textAlign:"center",fontSize:16, fontWeight:"bold"}}>Products</Text>
                <View style={{width:'100%', height:60, justifyContent:"center", alignItems:'flex-end', paddingRight:20}}>
                    <TouchableOpacity
                        onPress={() => setAddProductModal(true)}
                        style={styles.button}
                    >
                        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 6}}>Add Products</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{width:'100%', minHeight:200, flexDirection:'row', justifyContent:'space-around', paddingRight:10, flexWrap:'wrap'}}>
                    {products?.map(product => (
                        <View style={{ width:'45%', height:165, backgroundColor:"#fff", borderRadius:10,  elevation: 10, shadowColor: '#454545', flexDirection:"column",alignItems:"center", justifyContent:'space-around', paddingHorizontal:10, marginBottom:20}} key={product.id}>
                            <Image source={require("../../../assets/images/milk.jpeg")} style={{height:60,width:60, marginRight:10}}/> 
                            <Text style={{textAlign:'center'}}>{product.name}</Text>
                            <Text style={{textAlign:'center', fontWeight:"bold", fontSize:18}}>248 litres</Text>
                            <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                                <Text>Suppliers</Text>
                                <Text>30 farmers</Text>
                            </View>
                            <View style={{width:'100%', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                                <Text>Selling price</Text>
                                <Text>Ksh. 60/unit</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );

}
export default Products;

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
    }
})