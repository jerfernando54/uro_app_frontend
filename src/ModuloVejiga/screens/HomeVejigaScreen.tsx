/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PatientScreen } from './paciente/PatientScreen';
import { NuevoPacienteScreen } from '../screens/paciente/NuevoPacienteScreen';

const Tab = createBottomTabNavigator();

export const HomeVejigaScreen = () => {
  

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Pacientes') {
          iconName = focused ? 'people' : 'people-outline';
        
        } else if (route.name === 'Nuevo Paciente') {
          iconName = focused ? 'person-add' : 'person-add-outline';
        }
        
        return <Icon name={iconName!} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#28B463',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Pacientes" component={PatientScreen} />

      <Tab.Screen name="Nuevo Paciente" component={NuevoPacienteScreen}/>
    </Tab.Navigator>
  );
};
