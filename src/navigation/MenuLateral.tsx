import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { Navigation } from './Navigation';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { ProstataScreen } from '../ModuloProstata/screen/ProstataScreen';
import { UserHomeScreen } from '../screens/user/UserHomeScreen';
import { HomeVejigaScreen } from '../ModuloVejiga/screens/HomeVejigaScreen';
import { COLORS } from '../constants/constants';
import { useWindowDimensions } from 'react-native';
import { MenuScreen } from '../screens/home/MenuScreen';
import { RegisterScreen } from '../screens/user/RegisterScrenn';
import { PatientDetailsScreen } from '../ModuloVejiga/screens/paciente/PatientDetailsScreen';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: COLORS.background,
          width: 240,
          padding: 10,
        },
        headerShown: true,
        headerStyle: {
          backgroundColor: COLORS.mainColor,
        },
        headerTitleStyle: {
          color: COLORS.white,
          alignSelf: 'center',
        },
        headerTintColor: COLORS.white,
        headerTitleAlign: 'center',
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
      }}
      useLegacyImplementation={false}>
      <Drawer.Screen name="MenuScreen" component={MenuScreen} options={{ title: 'Menu', headerShown: false}} />
      <Drawer.Screen name="ProstataScreen" component={ProstataScreen} options={{ title: 'Cancer Prostata' }} />
      <Drawer.Screen name="VejigaScreen" component={HomeVejigaScreen} options={{ title: 'Cancer Vejiga' }} />
      <Drawer.Screen name="ProfileScreen" component={UserHomeScreen} options={{ title: 'Usuarios' }} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Configuraciones' }} />
      <Drawer.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: 'Neuvo Usuario' }} />
      <Drawer.Screen
        name="Terminar sesión"
        component={LoginScreen}
        options={{
          headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
