import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../components/farmer/dashboard/Dashboard';
import CustomMenu from '../components/CustomMenu';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import ProductManagement from '../components/farmer/product_management/ProductMangement';
import FarmManagement from '../components/farmer/farm_management/FarmManagement';
import Vet from '../components/farmer/vet/Vet';
import Wallet from '../components/farmer/wallet/Wallet';
import FinancialProducts from '../components/farmer/financial_prod/FinancialProd';
import Insurance from '../components/farmer/insurance/Insurance.';

const FarmerNav = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator 
            drawerContent = {props => <CustomMenu {...props}/>}
            screenOptions={{headerShown:"false", drawerActiveBackgroundColor:"#3CB371", drawerActiveTintColor:"#fff" }}
        >
            <Drawer.Screen name="Dashboard" component={Dashboard} options={{
                drawerIcon : ({color}) => (
                    <Ionicons name='home-outline' color={color} size={22} />
                )
            }}
            />
            <Drawer.Screen name="Product Management" component={ProductManagement} options={{
                drawerIcon : ({color}) => (
                    <MaterialIcons name='collections' size={22} color={color}/>
                )
            }}
            />
            <Drawer.Screen name="Farm Management" component={FarmManagement} options={{
                drawerIcon : ({color}) => (
                    <MaterialCommunityIcons name='cow' color={color} size={22} />
                )
            }}/>
            <Drawer.Screen name="Vet and Extension services" component={Vet} options={{
                drawerIcon : ({color}) => (
                    <Fontisto name='doctor' color={color} size={22} />
                )
            }}/>
            <Drawer.Screen name="Wallet" component={Wallet} options={{
                drawerIcon : ({color}) => (
                    <Ionicons name='wallet-outline' color={color} size={22} />
                )
            }}/>
            <Drawer.Screen name="Financial Products" component={FinancialProducts} options={{
                drawerIcon : ({color}) => (
                    <FontAwesome5 name='money-bill-wave' color={color} size={22} />
                )
            }}/>
            <Drawer.Screen name="Insurance" component={Insurance} options={{
                drawerIcon : ({color}) => (
                    <Entypo name='shield' color={color} size={22} />
                )
            }}/>
            
        </Drawer.Navigator>
    );
};

export default FarmerNav;