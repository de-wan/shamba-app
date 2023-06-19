import React from 'react';
import { Dimensions, View } from 'react-native';

import Routes from './Routes';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Farmers from './Farmers';

const Tab = createMaterialTopTabNavigator();
const { height } = Dimensions.get('window');

const FarmersModuleTabs = () => {
  return (
    <View style={{ flex: 1, height: height }}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#3CB371',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: '#fff' },
          tabBarIndicatorStyle: { backgroundColor: '#3CB371', height: 5 },
        }}>
        <Tab.Screen name="Farmers" component={Farmers} />
        <Tab.Screen name="Routes" component={Routes} />
      </Tab.Navigator>
    </View>
  );
};

const FarmersModule = () => {
  return <FarmersModuleTabs />;
};
export default FarmersModule;
