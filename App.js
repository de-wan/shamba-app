import React from 'react';
import { AuthProvider } from './context/AuthContext';
import AppNavs from './navigation/AppNavs';
import { ThemeProvider } from './context/ThemeContext';
import { MenuProvider } from 'react-native-popup-menu';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <MenuProvider>
          <AppNavs />
        </MenuProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
