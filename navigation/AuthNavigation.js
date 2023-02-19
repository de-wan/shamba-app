import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from '../components/admin/landing/Landing';
import Dashboard from '../components/admin/dashboard/Dashboard';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Dashboard" component={Dashboard}/>
    </Stack.Navigator>
  );
}

