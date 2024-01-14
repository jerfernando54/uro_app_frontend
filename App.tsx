
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MenuLateral } from './src/navigation/MenuLateral';
import { Navigation } from './src/navigation/Navigation';
import { Text } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation/>
      </AppState>
    </NavigationContainer>
  );
};

