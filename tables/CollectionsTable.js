import { StyleSheet, ScrollView} from 'react-native';
import { DataTable } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'

const date = new Date();

export const products = [
    {
        id: 1,
        name:"Milk (Grade-1)",
        unit:"Litres",
        available:5129,
        suppliers:251,
        cost:70,
        profit: 18,
    },
    {
        id: 2,
        name:"Milk (Grade-2)",
        unit:"Litres",
        available:22950,
        suppliers:1711,
        cost:60,
        profit: 12,
    },
]
export const collections = [
    {
        id: `BATCH-${Math.floor(Math.random() * 10000) + 1}`,
        name:"Milk",
        supplier:"MaryAnn Kamau",
        farmerNo: `22-${Math.floor(Math.random() * 10000) + 1}`,
        quality:"Grade-1",
        unit:"Litres",
        quantity:92,
        date:`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}, ${date.getHours()}:${date.getMinutes()}`,
        agent:'James Kiama'
    },
    {
        id: `BATCH-${Math.floor(Math.random() * 10000) + 1}`,
        name:"Milk",
        supplier:"MaryAnn Kamau",
        farmerNo: `22-${Math.floor(Math.random() * 10000) + 1}`,
        quality:"Grade-1",
        unit:"Litres",
        quantity:92,
        date:`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}, ${date.getHours()}:${date.getMinutes()}`,
        agent:'James Kiama'
    },
    {
        id: `BATCH-${Math.floor(Math.random() * 10000) + 1}`,
        name:"Milk",
        supplier:"MaryAnn Kamau",
        farmerNo: `22-${Math.floor(Math.random() * 10000) + 1}`,
        quality:"Grade-1",
        unit:"Litres",
        quantity:92,
        date:`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}, ${date.getHours()}:${date.getMinutes()}`,
        agent:'James Kiama'
    },
    {
        id: `BATCH-${Math.floor(Math.random() * 10000) + 1}`,
        name:"Milk",
        supplier:"MaryAnn Kamau",
        farmerNo: `22-${Math.floor(Math.random() * 10000) + 1}`,
        quality:"Grade-1",
        unit:"Litres",
        quantity:92,
        date:`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}, ${date.getHours()}:${date.getMinutes()}`,
        agent:'James Kiama'
    },
    {
        id: `BATCH-${Math.floor(Math.random() * 10000) + 1}`,
        name:"Milk",
        supplier:"MaryAnn Kamau",
        farmerNo: `22-${Math.floor(Math.random() * 10000) + 1}`,
        quality:"Grade-1",
        unit:"Litres",
        quantity:92,
        date:`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}, ${date.getHours()}:${date.getMinutes()}`,
        agent:'James Kiama'
    },
    {
        id: `BATCH-${Math.floor(Math.random() * 10000) + 1}`,
        name:"Milk",
        supplier:"MaryAnn Kamau",
        farmerNo: `22-${Math.floor(Math.random() * 10000) + 1}`,
        quality:"Grade-1",
        unit:"Litres",
        quantity:92,
        date:`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}, ${date.getHours()}:${date.getMinutes()}`,
        agent:'James Kiama'
    },
    {
        id: `BATCH-${Math.floor(Math.random() * 10000) + 1}`,
        name:"Milk",
        supplier:"MaryAnn Kamau",
        farmerNo: `22-${Math.floor(Math.random() * 10000) + 1}`,
        quality:"Grade-1",
        unit:"Litres",
        quantity:92,
        date:`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}, ${date.getHours()}:${date.getMinutes()}`,
        agent:'James Kiama'
    },
    {
        id: `BATCH-${Math.floor(Math.random() * 10000) + 1}`,
        name:"Milk",
        supplier:"MaryAnn Kamau",
        farmerNo: `22-${Math.floor(Math.random() * 10000) + 1}`,
        quality:"Grade-1",
        unit:"Litres",
        quantity:92,
        date:`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}, ${date.getHours()}:${date.getMinutes()}`,
        agent:'James Kiama'
    },
]

export function ProductsTable() {
	return (
		<DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={{width:30}}>Id</DataTable.Title>
                <DataTable.Title style={{width:100}}>Name</DataTable.Title>
                <DataTable.Title style={{width:60}}>Unit</DataTable.Title>
                <DataTable.Title style={{width:80}}>Available</DataTable.Title>
                <DataTable.Title style={{width:100}}>No of suppliers</DataTable.Title>
                <DataTable.Title style={{width:100}}>Selling price/Unit</DataTable.Title>
                <DataTable.Title style={{width:60}}>Profit</DataTable.Title>
                <DataTable.Title>Actions</DataTable.Title>
            </DataTable.Header>
            <ScrollView>	
                {products.map(product =>( 
                    <DataTable.Row key={product.id}>
                        <DataTable.Cell style={{width:30}}>{product.id}</DataTable.Cell>
                        <DataTable.Cell style={{width:100}}>{product.name}</DataTable.Cell>
                        <DataTable.Cell style={{width:60}}>{product.unit}</DataTable.Cell>
                        <DataTable.Cell style={{width:80}}>{product.available}</DataTable.Cell>
                        <DataTable.Cell style={{width:100}}>{product.suppliers}</DataTable.Cell>
                        <DataTable.Cell style={{width:100}}>{product.cost}</DataTable.Cell>
                        <DataTable.Cell style={{width:60}}>{product.profit}</DataTable.Cell>
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

export function CollectionsTable() {
	return (
		<DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={{width:100}}>Batch No</DataTable.Title>
                <DataTable.Title style={{width:60}}>Name</DataTable.Title>
                <DataTable.Title style={{width:80}}>Quality</DataTable.Title>
                <DataTable.Title style={{width:80}}>Supplier</DataTable.Title>
                <DataTable.Title style={{width:80}}>Farmer No</DataTable.Title>
                <DataTable.Title style={{width:60}}>Quantity</DataTable.Title>
                <DataTable.Title style={{width:120}}>Date</DataTable.Title>
                <DataTable.Title style={{width:60}}>Agent</DataTable.Title>
                <DataTable.Title style={{width:60}}>Actions</DataTable.Title>
            </DataTable.Header>
            <ScrollView>	
                {collections.map(collection =>( 
                    <DataTable.Row key={collection.id}>
                        <DataTable.Cell style={{width:100}}>{collection.id}</DataTable.Cell>
                        <DataTable.Cell style={{width:60}}>{collection.name}</DataTable.Cell>
                        <DataTable.Cell style={{width:80}}>{collection.quality}</DataTable.Cell>
                        <DataTable.Cell style={{width:80}}>{collection.supplier}</DataTable.Cell>
                        <DataTable.Cell style={{width:80}}>{collection.farmerNo}</DataTable.Cell>
                        <DataTable.Cell style={{width:60}}>{collection.quantity}</DataTable.Cell>
                        <DataTable.Cell style={{width:120}}>{collection.date}</DataTable.Cell>
                        <DataTable.Cell style={{width:60}}>{collection.agent}</DataTable.Cell>
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
});
