/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PatientScreen } from './paciente/PatientScreen';
import { DiagnosticoScreen } from './paciente/DiagnosticoScreen';
import { NuevoPacienteScreen } from './paciente/NuevoPacienteScreen';

const Tab = createBottomTabNavigator();

export const ProstataScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
      initialRouteName="Pacientes"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Pacientes') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Diagnostico') {
            iconName = focused ? 'git-network' : 'git-network-outline';
          } else if (route.name === 'Nuevo Paciente') {
            iconName = focused ? 'person-add' : 'person-add-outline';
          } else {
            iconName = focused ? 'home' : 'home-outline';
          }

          return <Icon name={iconName!} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2E86C1',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Pacientes" component={PatientScreen} />
        <Tab.Screen name="Nuevo Paciente" component={NuevoPacienteScreen}/>
        <Tab.Screen name="Diagnostico" component={DiagnosticoScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
