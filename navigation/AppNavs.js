import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigation';
import AppNavigation from './AppNavigation';
import { AuthContext } from '../context/AuthContext';
import FarmerNav from './FarmerNav';

export default function AppNavs() {
    const {userToken, role} = useContext(AuthContext)
    
    return (
        <NavigationContainer>          
            {userToken !== "" ? 
                (role === 'cooperative admin' && <AppNavigation/> || role === 'farmer' && <FarmerNav/>) : <AuthNavigator/>
            }
        </NavigationContainer>
    )
}

