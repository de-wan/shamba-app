import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomMenu from '../../components/CustomMenu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Farm from './farm/Farm';
import Profile from './profile/Profile';
import Analytics from './analytics/Analytics';
import { ThemeContext } from '../../context/ThemeContext';
import Crops from './crops/Crops';
import Livestock from './livestock/Livestock';
import Sales from './sales/Sales';
import YieldCalculator from './yield_calculator/YieldCalculator';
import Purchases from './purchases/Purchases';
import CropCalendar from './crop_calendar/CropCalendar';
import CalendarCenter from './calendar_center/CalendarCenter';
import VetNExtension from './vet_n_extension/VetNExtension';
import Disease from './disease/Disease';
import Insurance from './insurance/Insurance';
import Marketplace from './marketplace/Marketplace';
import IncomeVsExpense from './income_vs_expense/IncomeVsExpense';
import Wallet from '../shared/wallet/Wallet';

const BottomTabNavigator = () => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.app_bg,
    },
  });

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => {
          if (route.name === 'Analytics') {
            return <Feather name="pie-chart" size={22} color={color} />;
          } else if (route.name === 'Farm') {
            return (
              <MaterialCommunityIcons name="terrain" size={22} color={color} />
            );
          } else {
            return (
              <MaterialIcons name="person-outline" size={22} color={color} />
            );
          }
        },
        activeTintColor: theme.primary,
        tabBarActiveTintColor: theme.primary,
        inactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: theme.wb_color1,
        },
      })}
      sceneContainerStyle={styles.container}>
      <Tab.Screen name="Analytics" component={Analytics} />
      <Tab.Screen name="Farm" component={Farm} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const FarmerNav = () => {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.app_bg,
    },
  });

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomMenu {...props} />}
      screenOptions={() => ({
        drawerActiveBackgroundColor: theme.primary,
        drawerActiveTintColor: theme.wb_color1,
        sceneContainerStyle: styles.container,
        headerStyle: {
          backgroundColor: theme.primary,
        },
      })}
      initialRouteName="Dashboard">
      <Drawer.Screen
        name="Dashboard"
        component={BottomTabNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" color={color} size={22} />
          ),
        }}
      />
      <Drawer.Screen
        name="Crops"
        component={Crops}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons color={color} name="corn" size={22} />
          ),
        }}
      />
      <Drawer.Screen
        name="Livestock"
        component={Livestock}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons color={color} name="cow" size={22} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sales"
        component={Sales}
        options={{
          drawerIcon: ({ color }) => (
            <Entypo color={color} name="shop" size={22} />
          ),
        }}
      />
      <Drawer.Screen
        name="Yield Calculator"
        component={YieldCalculator}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons color={color} name="calculator" size={22} />
          ),
        }}
      />
      <Drawer.Screen
        name="Purchases"
        component={Purchases}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              name="shopping-outline"
              size={22}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Crop Calendar"
        component={CropCalendar}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              name="calendar-month"
              size={22}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Calendar Center"
        component={CalendarCenter}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              name="calendar-text"
              size={22}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Vet N Extension"
        component={VetNExtension}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              name="stethoscope"
              size={22}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Disease"
        component={Disease}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              name="bacteria-outline"
              size={22}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Wallet"
        component={Wallet}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              name="wallet-outline"
              size={22}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Insurance"
        component={Insurance}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              name="shield-half-full"
              size={22}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Marketplace"
        component={Marketplace}
        options={{
          drawerIcon: ({ color }) => (
            <Foundation color={color} name="dollar" size={22} />
          ),
        }}
      />
      <Drawer.Screen
        name="Income Vs Expense"
        component={IncomeVsExpense}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              name="speedometer"
              size={22}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default FarmerNav;
