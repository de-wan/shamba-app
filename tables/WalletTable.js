import { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Modal, View, Text, TextInput} from 'react-native';
import { DataTable } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'

export const pendingPayments = [
    {
        farmerId: `22-${Math.floor(Math.random() * 1000) + 1}`,
        name:"MaryAnn Kamau",
        route:"Othaya",
        pendingAmount: '8,950' ,
    },
    {
        farmerId: `22-${Math.floor(Math.random() * 1000) + 1}`,
        name:"Joshua Kiptang'at",
        route:"Othaya",
        pendingAmount: '8,000' ,
    },
    {        
        farmerId: `22-${Math.floor(Math.random() * 1000) + 1}`,
        name:"Johnson Mwangi",
        route:"Othaya",
        pendingAmount: '7,600' ,
    },
    {
        farmerId: `22-${Math.floor(Math.random() * 1000) + 1}`,
        name:"MaryAnn Kamau",
        route:"Othaya",
        pendingAmount: '8,950' ,
    },
    {
        farmerId: `22-${Math.floor(Math.random() * 1000) + 1}`,
        name:"MaryAnn Kamau",
        route:"Othaya",
        pendingAmount: '8,950' ,
    },
    {
        farmerId: `22-${Math.floor(Math.random() * 1000) + 1}`,
        name:"MaryAnn Kamau",
        route:"Othaya",
        pendingAmount: '8,950' ,
    },
    {
        farmerId: `22-${Math.floor(Math.random() * 1000) + 1}`,
        name:"MaryAnn Kamau",
        route:"Othaya",
        pendingAmount: '8,950' ,
    },
]

export function WalletTable() {
    const [makePaymentModal, setMakePaymentModal] = useState(false)

	return (
		<DataTable style={styles.container}>
            <Modal
				animationType="slide"
                visible={makePaymentModal}
                onRequestClose={() => {
                    setMakePaymentModal(!makePaymentModal);
                }}
			>
                <TouchableOpacity onPress={() => setMakePaymentModal(false)}>
                    <AntDesign name='arrowleft' size={22}/> 
                </TouchableOpacity>
				<View>
                    <Text style={styles.title}>Make a payment</Text> 
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Amount to pay(Ksh):</Text> 
                        <TextInput style={styles.inputField} placeholder='5,000' autofocus={true}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginTop:10, paddingLeft:20}}>
                        <Text>Full name of the person making the payment:</Text> 
                        <TextInput style={styles.inputField} placeholder='Jackson Mutuma' autofocus={true}/>
                    </View>
                    
                    <View style={{width:"90%", height: 140, flexDirection:"row",justifyContent:"space-between", marginVertical:20,  paddingLeft:20}}>
                        <TouchableOpacity 
                            onPress={() => setMakePaymentModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 8}}>Make payment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setMakePaymentModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:14, paddingTop: 8}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>	
			</Modal>
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={{width:60}}>Farmer No</DataTable.Title>
                <DataTable.Title style={{width:130}}>Name</DataTable.Title>
                <DataTable.Title style={{width:80}}>Pending(Ksh)</DataTable.Title>
                <DataTable.Title style={{width:100}}>Actions</DataTable.Title>
            </DataTable.Header>
            <ScrollView>	
                {pendingPayments.map(pending =>( 
                    <DataTable.Row key={pending.id}>
                        <DataTable.Cell style={{width:60}}>{pending.farmerId}</DataTable.Cell>
                        <DataTable.Cell style={{width:130}}>{pending.name}</DataTable.Cell>
                        <DataTable.Cell style={{width:80}}>{pending.pendingAmount}</DataTable.Cell>
                        
                        <DataTable.Cell style={{width:100, flexDirection:"column", justifyContent:"space-around"}}>
                            <TouchableOpacity style={{width:100, height:35, backgroundColor:'#f00', borderRadius:10}} onPress={() => setMakePaymentModal(true)}><Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:8}}>Make Payment</Text></TouchableOpacity>
                        </DataTable.Cell>
                    </DataTable.Row>
                ))}
            </ScrollView>
		</DataTable>
	);
};
const styles = StyleSheet.create({
	container: {
		padding: 15,
		height: 300,
	},
	tableHeader: {
		backgroundColor: '#DCDCDC',
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
});
