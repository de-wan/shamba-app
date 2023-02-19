import { StyleSheet, ScrollView} from 'react-native';
import { DataTable } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'

const date = new Date();

export const man_products = [
    {
        id: `MAN-PROD-${Math.floor(Math.random() * 1000) + 1}`,
        name:"Cream Milk",
        raw_materials:"Milk (Grade-1)",
        unit:"Litres",
        available:5129,
        cost:170,
        profit: 112,
    },
    {
        id: `MAN-PROD-${Math.floor(Math.random() * 1000) + 1}`,
        name:"Yoghurt",
        raw_materials:"Milk (Grade-1)",
        unit:"Litres",
        available:5129,
        cost:180,
        profit: 93,
    },
    {
        id: `MAN-PROD-${Math.floor(Math.random() * 1000) + 1}`,
        name:"Long-life milk",
        raw_materials:"Milk (Grade-1 and Grade-11)",
        unit:"Litres",
        available:5129,
        cost:70,
        profit: 18,
    },
]
export const sales = [
    {
        id: `SALE-${Math.floor(Math.random() * 1000) + 1}`,
        product_name:"Long-life milk",
        buyer:"MaryAnn Kamau",
        unit:"Litres",
        quantity:10,
        selling_price: 70,
        discount:0,
        date:`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}, ${date.getHours()}:${date.getMinutes()}`,
        agent:'James Kiama'
    },
    {
        id: `SALE-${Math.floor(Math.random() * 1000) + 1}`,
        product_name:"Yoghurt",
        buyer:"John Kamau",
        unit:"Litres",
        quantity:4,
        selling_price: 180,
        discount:0,
        date:`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}, ${date.getHours()}:${date.getMinutes()}`,
        agent:'James Kiama'
    },
    {
        id: `SALE-${Math.floor(Math.random() * 1000) + 1}`,
        product_name:"Long-life milk",
        buyer:"MaryAnn Kamau",
        unit:"Litres",
        quantity:10,
        selling_price: 70,
        discount:0,
        date:`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}, ${date.getHours()}:${date.getMinutes()}`,
        agent:'James Kiama'
    },
    {
        id: `SALE-${Math.floor(Math.random() * 1000) + 1}`,
        product_name:"Long-life milk",
        buyer:"MaryAnn Kamau",
        unit:"Litres",
        quantity:10,
        selling_price: 70,
        discount:0,
        date:`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}, ${date.getHours()}:${date.getMinutes()}`,
        agent:'James Kiama'
    },
    
]

export function ManProductsTable() {
	return (
		<DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={{width:120}}>Id</DataTable.Title>
                <DataTable.Title style={{width:100}}>Name</DataTable.Title>
                <DataTable.Title style={{width:120}}>Raw Materials</DataTable.Title>
                <DataTable.Title style={{width:80}}>Units</DataTable.Title>
                <DataTable.Title style={{width:60}}>Available</DataTable.Title>
                <DataTable.Title style={{width:60}}>Selling price/Unit</DataTable.Title>
                <DataTable.Title style={{width:60}}>Profit</DataTable.Title>
                <DataTable.Title>Actions</DataTable.Title>
            </DataTable.Header>
            <ScrollView>	
                {man_products.map(product =>( 
                    <DataTable.Row key={product.id}>
                        <DataTable.Cell style={{width:120}}>{product.id}</DataTable.Cell>
                        <DataTable.Cell style={{width:100}}>{product.name}</DataTable.Cell>
                        <DataTable.Cell style={{width:120}}>{product.raw_materials}</DataTable.Cell>
                        <DataTable.Cell style={{width:80}}>{product.unit}</DataTable.Cell>
                        <DataTable.Cell style={{width:60}}>{product.available}</DataTable.Cell>
                        <DataTable.Cell style={{width:60}}>{product.cost}</DataTable.Cell>
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

export function SalesTable() {
	return (
		<DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={{width:100}}>Id</DataTable.Title>
                <DataTable.Title style={{width:120}}>Product Bought</DataTable.Title>
                <DataTable.Title style={{width:100}}>Buyer's Name</DataTable.Title>
                <DataTable.Title style={{width:80}}>Unit</DataTable.Title>
                <DataTable.Title style={{width:80}}>Quantity</DataTable.Title>
                <DataTable.Title style={{width:60}}>Selling price/unit</DataTable.Title>
                <DataTable.Title style={{width:60}}>Discount</DataTable.Title>
                <DataTable.Title style={{width:60}}>Total Amount</DataTable.Title>
                <DataTable.Title style={{width:120}}>Date</DataTable.Title>
                <DataTable.Title style={{width:60}}>Agent</DataTable.Title>
                <DataTable.Title style={{width:60}}>Actions</DataTable.Title>
            </DataTable.Header>
            <ScrollView>	
                {sales.map(sale =>( 
                    <DataTable.Row key={sale.id}>
                        <DataTable.Cell style={{width:100}}>{sale.id}</DataTable.Cell>
                        <DataTable.Cell style={{width:120}}>{sale.product_name}</DataTable.Cell>
                        <DataTable.Cell style={{width:100}}>{sale.buyer}</DataTable.Cell>
                        <DataTable.Cell style={{width:80}}>{sale.unit}</DataTable.Cell>
                        <DataTable.Cell style={{width:60}}>{sale.quantity}</DataTable.Cell>
                        <DataTable.Cell style={{width:80}}>{sale.selling_price}</DataTable.Cell>
                        <DataTable.Cell style={{width:80}}>{sale.discount}</DataTable.Cell>
                        <DataTable.Cell style={{width:80}}>{sale.selling_price * sale.quantity}</DataTable.Cell>
                        <DataTable.Cell style={{width:120}}>{sale.date}</DataTable.Cell>
                        <DataTable.Cell style={{width:60}}>{sale.agent}</DataTable.Cell>
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
