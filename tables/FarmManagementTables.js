import { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Modal, View, Text, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { DataTable } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'

export const livestock = [
    {
        id: `LIV-${Math.floor(Math.random() * 1000) + 1}`,
        name:"Dairy Cattle",
        registeredNo:"894",
        products: 'Milk, Beef' ,
        variations: 'Friesian, Jersey, Guernsey',
        vet:'Dr.Njagi'
    },
    {
        id: `LIV-${Math.floor(Math.random() * 1000) + 1}`,
        name:"Goats",
        registeredNo:"176",
        products: 'Milk, Meat' ,
        variations: 'Somali',
        vet:'Dr.Kamau'
    },
    {
        id: `LIV-${Math.floor(Math.random() * 1000) + 1}`,
        name:"Sheep",
        registeredNo:"594",
        products: 'Meat, Wool' ,
        variations: 'Dorper',
        vet:'Dr.Kamau'
    },
    {
        id: `LIV-${Math.floor(Math.random() * 1000) + 1}`,
        name:"Chicken",
        registeredNo:"10,942",
        products: 'Eggs, Meat' ,
        variations: 'Sasso, KARI, Broilers',
        vet:'Dr.Njagi'
    },
]
export const crops = [
    {
        id: `CROP-${Math.floor(Math.random() * 1000) + 1}`,
        name:"Maize",
        agronomist:'Dr.Matubia',
        variations:'H511, H622, H632'
    },
    {
        id: `CROP-${Math.floor(Math.random() * 1000) + 1}`,
        name:"Tomatoes",
        agronomist:'Dr.Matubia',
        variations:'Elgon, Nyota F1'
    },
    {
        id: `CROP-${Math.floor(Math.random() * 1000) + 1}`,
        name:"Beans",
        agronomist:'Dr.Matubia',
        variations:'Yellow, Rosecoco'
    },
]
export const diseases = [
    {
        id:`DIS-${Math.floor(Math.random() * 1000) + 1}`,
        name: 'Foot and Mouth',
        category:'Viral',
        foundIn:'Animals'
    },
    {
        id:`DIS-${Math.floor(Math.random() * 1000) + 1}`,
        name: 'Blight',
        category:'Fungal',
        foundIn:'Crops'
    },
    {
        id:`DIS-${Math.floor(Math.random() * 1000) + 1}`,
        name: 'Powdery Mildew',
        category:'Fungal',
        foundIn:'Crops'
    },
    {
        id:`DIS-${Math.floor(Math.random() * 1000) + 1}`,
        name: 'Valley Fever',
        category:'Viral',
        foundIn:'Animals'
    },
    {
        id:`DIS-${Math.floor(Math.random() * 1000) + 1}`,
        name: 'Foot and Mouth',
        category:'Viral',
        foundIn:'Animals'
    },
]

export function LivestockTable() {
	return (
		<DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={{width:80}}>Livestock Id</DataTable.Title>
                <DataTable.Title style={{width:100}}>Name</DataTable.Title>
                <DataTable.Title style={{width:80}}>Registered Animals</DataTable.Title>
                <DataTable.Title style={{width:120}}>Produced Products</DataTable.Title>
                <DataTable.Title style={{width:150}}>Variations</DataTable.Title>
                <DataTable.Title style={{width:100}}>Vet(s)</DataTable.Title>
                <DataTable.Title style={{width:80}}>Actions</DataTable.Title>
            </DataTable.Header>
            <ScrollView>	
                {livestock.map(livestock =>( 
                    <DataTable.Row key={livestock.id}>
                        <DataTable.Cell style={{width:80}}>{livestock.id}</DataTable.Cell>
                        <DataTable.Cell style={{width:100}}>{livestock.name}</DataTable.Cell>
                        <DataTable.Cell style={{width:80}}>{livestock.registeredNo}</DataTable.Cell>
                        <DataTable.Cell style={{width:120}}>{livestock.products}</DataTable.Cell>
                        <DataTable.Cell style={{width:150}}>{livestock.variations}</DataTable.Cell>
                        <DataTable.Cell style={{width:100}}>{livestock.vet}</DataTable.Cell>
                        <DataTable.Cell style={{width:80, flexDirection:"column", justifyContent:"space-around"}}>
                            <AntDesign name='edit' size={22}/>
							<AntDesign name='delete' size={22}/>
                        </DataTable.Cell>
                    </DataTable.Row>
                ))}
            </ScrollView>
		</DataTable>
	);
};
export function CropTable() {
    const [calendarModal, setCalendarModal] = useState(false)
	return (
		<DataTable style={styles.container}>
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
                        <View style={{height:160, width:'90%', backgroundColor:"#fff", borderRadius:10, paddingHorizontal:20, marginVertical:10, elevation: 20, shadowColor: '#000', flexDirection:"column",alignItems:"center"}}>
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
                        <View style={{height:160, width:'90%', backgroundColor:"#fff", borderRadius:10, paddingHorizontal:20, marginVertical:10, elevation: 20, shadowColor: '#000', flexDirection:"column",alignItems:"center"}}>
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
                        <View style={{height:160, width:'90%', backgroundColor:"#fff", borderRadius:10, paddingHorizontal:20, marginVertical:10, elevation: 20, shadowColor: '#000', flexDirection:"column",alignItems:"center"}}>
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
                        <View style={{height:160, width:'90%', backgroundColor:"#fff", borderRadius:10, paddingHorizontal:20, marginVertical:10, elevation: 20, shadowColor: '#000', flexDirection:"column",alignItems:"center"}}>
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
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={{width:80}}>Crop Id</DataTable.Title>
                <DataTable.Title style={{width:80}}>Name</DataTable.Title>
                <DataTable.Title style={{width:80}}>Agronomist</DataTable.Title>
                <DataTable.Title style={{width:150}}>Variations</DataTable.Title>
                <DataTable.Title style={{width:150}}>Calendar</DataTable.Title>
                <DataTable.Title style={{width:160}}>Actions</DataTable.Title>
            </DataTable.Header>
            <ScrollView>	
                {crops.map(crop =>( 
                    <DataTable.Row key={crop.id}>
                        <DataTable.Cell style={{width:80}}>{crop.id}</DataTable.Cell>
                        <DataTable.Cell style={{width:80}}>{crop.name}</DataTable.Cell>
                        <DataTable.Cell style={{width:80}}>{crop.agronomist}</DataTable.Cell>
                        <DataTable.Cell style={{width:150}}>{crop.variations}</DataTable.Cell>
                        <DataTable.Cell style={{width:160, flexDirection:"column", justifyContent:"space-around"}}>
                            <TouchableOpacity style={{width:130, height:35, backgroundColor:'#f00', borderRadius:10}} onPress={() => setCalendarModal(true)}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:8}}>View Calendar</Text>
                            </TouchableOpacity>
                            <AntDesign name='edit' size={22}/>
							<AntDesign name='delete' size={22}/>
                        </DataTable.Cell>
                    </DataTable.Row>
                ))}
            </ScrollView>
		</DataTable>
	);
};
export function DiseaseTable() {
    const [reportDiseaseModal, setReportDiseaseModal] = useState(false)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

	return (
		<DataTable style={styles.container}>
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
                        <Text>Location:</Text> 
                        <TextInput style={styles.inputField} placeholder='Nyandarua, Ol Kalou, Nyamakima ward' autofocus={true}/>
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
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 8}}>Add Route</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => setReportDiseaseModal(false)} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 8}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={{width:100}}>Disease Id</DataTable.Title>
                <DataTable.Title style={{width:120}}>Name</DataTable.Title>
                <DataTable.Title style={{width:100}}>Category</DataTable.Title>
                <DataTable.Title style={{width:100}}>Found In</DataTable.Title>
                <DataTable.Title style={{width:180}}>Actions</DataTable.Title>
            </DataTable.Header>
            <ScrollView>	
                {diseases.map(disease =>( 
                    <DataTable.Row key={disease.id}>
                        <DataTable.Cell style={{width:100}}>{disease.id}</DataTable.Cell>
                        <DataTable.Cell style={{width:120}}>{disease.name}</DataTable.Cell>
                        <DataTable.Cell style={{width:100}}>{disease.category}</DataTable.Cell>
                        <DataTable.Cell style={{width:100}}>{disease.foundIn}</DataTable.Cell>
                        <DataTable.Cell style={{width:120, flexDirection:"column", justifyContent:"space-around"}}>
                            <TouchableOpacity style={{width:120, height:35, backgroundColor:'#f00', borderRadius:10}} onPress={() => setReportDiseaseModal(true)}>
                                <Text style={{fontSize:12, color:'#fff', textAlign:"center", paddingTop:8}}>Report</Text>
                            </TouchableOpacity>
                        </DataTable.Cell>
                        <DataTable.Cell style={{width:60, flexDirection:"column", justifyContent:"space-around"}}>
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
        fontSize: 16,
        fontWeight:"600",
        marginVertical:10,
        textAlign:"center"
    },
});
