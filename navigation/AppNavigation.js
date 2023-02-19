import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import BottomNavigation from './BottomNavigation';

import Farmers from '../components/admin/farmers/Farmers';
import Collections from '../components/admin/collections';
import Wallet from '../components/admin/wallet/Wallet';
import FarmManagement from '../components/admin/farm/FarmManagement';
import Manufacturing from '../components/admin/manufacturing/Manufacturing';
import Accounting from '../components/admin/accounting/Accounting';

import CustomMenu from '../components/CustomMenu';

const Drawer = createDrawerNavigator();

const AppNavigation = () => {
  return (
    <Drawer.Navigator 
        drawerContent = {props => <CustomMenu {...props}/>}
        screenOptions={{headerShown:"false", drawerActiveBackgroundColor:"#3CB371", drawerActiveTintColor:"#fff" }}
    >
        <Drawer.Screen name="Dashboard" component={BottomNavigation} options={{
            drawerIcon : ({color}) => (
                <Ionicons name='home-outline' color={color} size={22} />
            )
        }}
        />
        <Drawer.Screen name="Farmers" component={Farmers} options={{
            drawerIcon : ({color}) => (
                <Ionicons name='person-outline' color={color} size={22} />
            )
        }}/>
        <Drawer.Screen name="Collections" component={Collections} options={{
            drawerIcon : ({color}) => (
                <MaterialIcons name='collections' size={22} color={color}/>
            )
        }}/>
        <Drawer.Screen name="Farm Management" component={FarmManagement} options={{
            drawerIcon : ({color}) => (
                <MaterialCommunityIcons name='cow' color={color} size={22} />
            )
        }}/>
        <Drawer.Screen name="Manufacturing and Sales" component={Manufacturing} options={{
            drawerIcon : ({color}) => (
                <Foundation name='graph-trend' color={color} size={22} />
            )
        }}/>
        <Drawer.Screen name="Wallet" component={Wallet} options={{
            drawerIcon : ({color}) => (
                <Ionicons name='wallet-outline' color={color} size={22} />
            )
        }}/>
        <Drawer.Screen name="Accounting" component={Accounting} options={{
            drawerIcon : ({color}) => (
                <MaterialCommunityIcons name='table-account' color={color} size={22} />
            )
        }}/>
    </Drawer.Navigator>
  );
};

export default AppNavigation;