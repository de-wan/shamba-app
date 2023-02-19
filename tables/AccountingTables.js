import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal} from 'react-native';
import { DataTable } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'

const date = new Date();

export const assets = [
    {
        id: 1,
        name:"Cash at Bank",
        quantity:'Ksh 19.4 million',
        ledger_code:10001,
    },
    {
        id: 2,
        name:"Cash at Hand",
        quantity:'Ksh 0.45 million',
        ledger_code:10002,
    },
    {
        id: 3,
        name:"Pick_ups",
        quantity:'11',
        ledger_code:10003,
    },
    {
        id: 4,
        name:"Trucks",
        quantity:'19',
        ledger_code:10004,
    },
    {
        id: 5,
        name:"Land",
        quantity:'13 acres',
        ledger_code:10005,
    },
]
export const vehicles = [
    {
        id: `KCD-${Math.floor(Math.random() * 1000) + 1}`,
        type:"Truck",
        transport_provider:'Milk Cooperative',
        driver:"MaryAnn Kamau",
        driver_id: `2289639`,
        weight:"0.8",
        status:"Booked",
    },
    {
        id: `KCD-${Math.floor(Math.random() * 1000) + 1}`,
        type:"Pick-up",
        transport_provider:'Milk Cooperative',
        driver:"Joe Mwangi",
        driver_id: `3289639`,
        weight:"0.3",
        status:"Not Booked",
    },
    {
        id: `KCD-${Math.floor(Math.random() * 1000) + 1}`,
        type:"Truck",
        transport_provider:'Milk Cooperative',
        driver:"MaryAnn Kamau",
        driver_id: `2289639`,
        weight:"0.8",
        status:"Booked",
    },
    {
        id: `KCD-${Math.floor(Math.random() * 1000) + 1}`,
        type:"Pick-up",
        transport_provider:'Milk Cooperative',
        driver:"Joe Mwangi",
        driver_id: `3289639`,
        weight:"0.3",
        status:"Not Booked",
    },
    {
        id: `KCD-${Math.floor(Math.random() * 1000) + 1}`,
        type:"Truck",
        transport_provider:'Milk Cooperative',
        driver:"MaryAnn Kamau",
        driver_id: `2289639`,
        weight:"0.8",
        status:"Booked",
    },
    {
        id: `KCD-${Math.floor(Math.random() * 1000) + 1}`,
        type:"Pick-up",
        transport_provider:'Milk Cooperative',
        driver:"Joe Mwangi",
        driver_id: `3289639`,
        weight:"0.3",
        status:"Not Booked",
    }
]

export function AssetsTable() {
	return (
		<DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={{width:30}}>Id</DataTable.Title>
                <DataTable.Title style={{width:130}}>Name</DataTable.Title>
                <DataTable.Title style={{width:120}}>Quantity</DataTable.Title>
                <DataTable.Title style={{width:80}}>Ledger Code</DataTable.Title>
                <DataTable.Title style={{width:60}}>Actions</DataTable.Title>
            </DataTable.Header>
            <ScrollView>	
                {assets.map(asset =>( 
                    <DataTable.Row key={asset.id}>
                        <DataTable.Cell style={{width:30}}>{asset.id}</DataTable.Cell>
                        <DataTable.Cell style={{width:130}}>{asset.name}</DataTable.Cell>
                        <DataTable.Cell style={{width:120}}>{asset.quantity}</DataTable.Cell>
                        <DataTable.Cell style={{width:80}}>{asset.ledger_code}</DataTable.Cell>
                        <DataTable.Cell style={{width:60, flexDirection:"row", justifyContent:"space-around"}}>
                            <AntDesign name='edit' size={22}/>
                            <AntDesign name='delete' size={22}/>
                        </DataTable.Cell>
                    </DataTable.Row>
                ))}
            </ScrollView>
		</DataTable>
	);
};

export function VehiclesTable() {
    const [bookVehicleModal, setBookVehicleModal] = React.useState(false)
	return (
		<DataTable style={styles.container}>
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
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={{width:120}}>Vehicle No</DataTable.Title>
                <DataTable.Title style={{width:120}}>Vehicle Type</DataTable.Title>
                <DataTable.Title style={{width:120}}>Transport Provider</DataTable.Title>
                <DataTable.Title style={{width:120}}>Driver Name</DataTable.Title>
                <DataTable.Title style={{width:120}}>Driver Id</DataTable.Title>
                <DataTable.Title style={{width:120}}>Vehicle Weight</DataTable.Title>
                <DataTable.Title style={{width:130}}>Status</DataTable.Title>
                <DataTable.Title style={{width:60}}>Actions</DataTable.Title>
            </DataTable.Header>
            <ScrollView>	
                {vehicles.map(vehicle =>( 
                    <DataTable.Row key={vehicle.id}>
                        <DataTable.Cell style={{width:120}}>{vehicle.id}</DataTable.Cell>
                        <DataTable.Cell style={{width:120}}>{vehicle.type}</DataTable.Cell>
                        <DataTable.Cell style={{width:80}}>{vehicle.transport_provider}</DataTable.Cell>
                        <DataTable.Cell style={{width:80}}>{vehicle.driver}</DataTable.Cell>
                        <DataTable.Cell style={{width:80}}>{vehicle.driver_id}</DataTable.Cell>
                        <DataTable.Cell style={{width:60}}>{vehicle.weight}</DataTable.Cell>
                        <DataTable.Cell style={{width:130}}>
                            {vehicle.status === 'Booked' ? 
                            <View style={{width:120, height:35, backgroundColor:'#f00', borderRadius:10}}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:8}}>{vehicle.status}</Text>
                            </View> : 
                            <TouchableOpacity style={{width:120, height:35, backgroundColor:'#ffcc33', borderRadius:10}} onPress={() => setBookVehicleModal(true)}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:8}}>{vehicle.status}</Text>
                            </TouchableOpacity>
                            }
                        </DataTable.Cell>
                        <DataTable.Cell style={{width:60, flexDirection:"row", justifyContent:"space-around"}}>
                            <AntDesign name='edit' size={22}/>
                            <AntDesign name='delete' size={22}/>
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
    button: {
        width: 120,
        height: 35,
        backgroundColor:"#3CB371",
        borderRadius:20,
    }
});
