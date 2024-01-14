/* eslint-disable semi */
import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { ConsultasScreen } from './ConsultasScreen';
import { UserProfileScreen } from '../../screens/user/UserProfileScreen';
import { View, Text } from 'react-native';
import { UsersListScreen } from '../../screens/user/UsersListScreen';

const Tab = createMaterialTopTabNavigator();

export const HomePatientScreen = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Datos Personales" component={UserProfileScreen} />
    <Tab.Screen name="Mis Consultas" component={ConsultasScreen} />
    {/* <Tab.Screen name="Todos Usuarios" component={UsersListScreen} /> */}
  </Tab.Navigator>
  )
}
