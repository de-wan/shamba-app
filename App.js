import React from 'react';
import { AuthProvider } from './context/AuthContext';
import AppNavs from './navigation/AppNavs';

export default function App() {
  return (
    <AuthProvider>
      <AppNavs />
    </AuthProvider>
  );
}
