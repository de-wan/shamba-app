import React from 'react';
import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigation';
import AppNavigation from './AppNavigation';
import { AuthContext } from '../context/AuthContext';
import FarmerNav from '../components/farmer/FarmerNav';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Landing from '../components/admin/landing/Landing';
import VetNav from '../components/vet/VetNav';
import AgentNav from '../components/agent/AgentNav';

export default function AppNavs() {
  const { userToken, role } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {userToken !== '' ? (
        (role === 'cooperative admin' && <AppNavigation name="Root" />) ||
        (role === 'farmer' && <FarmerNav name="Root" />) ||
        (role === 'vet' && <VetNav name="Root" />) ||
        (role === 'agent' && <AgentNav name="Root" />)
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
}
