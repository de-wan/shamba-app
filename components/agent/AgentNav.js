import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Farm from './farm/Farm';
import Profile from './profile/Profile';
import CustomMenu from '../CustomMenu';
import Collections from './collections/Collections';
import Farmers from './farmers/Farmers';
import MyRoutes from './my-routes/MyRoutes';
import MyVehicle from './my-vehicle/MyVehicle';
import Chat from '../shared/chat/Chat';
import Support from './support/Support';
import Analytics from './analytics/Analytics';
import Notifications from '../shared/notifications/Notifications';
// import Bookings from './bookings/Bookings';
// import Wallet from '../shared/wallet/Wallet';
// import Services from './services/Services';
// import Certifications from './certification/Certifications';
// import Disease from './disease/Disease';
// import Notifications from '../shared/notifications/Notifications';
// import Support from './support/Support';

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

const AgentNav = () => {
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
        name="Collections"
        component={Collections}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons color={color} name="scale" size={22} />
          ),
        }}
      />
      <Drawer.Screen
        name="Farmers"
        component={Farmers}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              name="account-group-outline"
              size={22}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="My Routes"
        component={MyRoutes}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              name="map-marker-path"
              size={22}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="My Vehicle"
        component={MyVehicle}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              name="car-lifted-pickup"
              size={22}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Chat"
        component={Chat}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              name="chat-outline"
              size={22}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              name="bell-outline"
              size={22}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Support"
        component={Support}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              name="information-variant"
              size={22}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AgentNav;
