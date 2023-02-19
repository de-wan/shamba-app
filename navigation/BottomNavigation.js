import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Collections from '../components/admin/collections';
import Dashboard from '../components/admin/dashboard/Dashboard';
import Farmers from '../components/admin/farmers/Farmers';
import Wallet from '../components/admin/wallet/Wallet';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

function HomeNavigator() {
    return (
      <>
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard}  options={{ headerShown: false }}/>
        </Stack.Navigator>
      </>
    );
}

export default function BottomNavigation() {
  return (
    <>
        <Tab.Navigator initialRouteName='Home' screenOptions={() => ({
            tabBarShowLabel:false,
            headerShown:false,
            tabBarStyle:{
                backgroundColor:"#3CB371"
            },
            tabBarInactiveTintColor:"#fff",
            tabBarActiveTintColor:"#000"
        })}>
            <Tab.Screen 
            options= {{
                tabBarIcon : ({color, size}) => (
                    <Ionicons name='home-outline' size={size} color={color}/>
                )
            }}
            name="Home" component={HomeNavigator} />
            <Tab.Screen 
            options= {{
                tabBarIcon : ({color, size}) => (
                    <Ionicons name='person-outline' size={size} color={color}/>
                )
            }}
            name="Farmers" component={Farmers} />
            <Tab.Screen 
            options= {{
                tabBarIcon : ({color, size}) => (
                    <MaterialIcons name='collections' size={size} color={color}/>
                )
            }}
            name="Collections" component={Collections} />
            <Tab.Screen 
            options= {{
                tabBarIcon : ({color, size}) => (
                    <Ionicons name='wallet-outline' size={size} color={color}/>
                )
            }}
            name="Wallet" component={Wallet} />
        </Tab.Navigator>
    </>
  );
}