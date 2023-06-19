import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from '../components/admin/landing/Landing';
import Dashboard from '../components/admin/dashboard/Dashboard';
import Login from '../components/auth/Login';
import Login1 from '../components/auth/Login1';
import Register from '../components/auth/Register';
import Register1 from '../components/auth/Register1';
const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Login1" component={Login1} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Register1" component={Register1} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}
