/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RegisterScreen } from './RegisterScrenn';
import { HomePatientScreen } from '../../components/paciente/HomePatientScreen';
import { COLORS } from '../../constants/constants';
import { ActivityIndicator, View } from 'react-native';

const Tab = createBottomTabNavigator();

export const UserHomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false)
  }, 500);
  
  if (isLoading) {
    return (
      <View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color={COLORS.blue} size={70}/>
      </View>
    );
  }
  return (

    <Tab.Navigator
      initialRouteName="Perfil"
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Perfil') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'Nuevo Usuario') {
          iconName = focused ? 'person-add' : 'person-add-outline';
        } else {
          iconName = focused ? 'log-out' : 'log-out-outline';
        }

        return <Icon name={iconName!} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#2E86C1',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Perfil" component={HomePatientScreen} />
      <Tab.Screen name="Nuevo Usuario" component={RegisterScreen} />
    </Tab.Navigator>
  );
};
