import React, { useEffect, useState } from 'react';
import {
  View, 
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import uroApi from '../../../api/uroApi';
import { Patient } from '../../../interfaces/CancerVejiga';

import { COLORS } from '../../../constants/constants';

import { RootStackParams } from '../../../navigation/Navigation';
import { DatosPersonalesScreen } from './DatosPersonalesScreen';
import { DatosDelExamenScreen } from './DatosDelExamenScreen';
import { ResultadosScreen } from './ResultadosScreen';
import { HistoryScreen } from '../history/HistoryScreen';

const Tab = createBottomTabNavigator();
interface Props extends StackScreenProps<RootStackParams, 'PatientDetailsScreen'>{}

export const PatientDetailsScreen = ({route, navigation}: Props) => {
  const params = route.params;
  const [patient, setPatient] = useState<Patient>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      title: 'NHIS: '+ params.nhis
    });
    
    getPatient(params.pacientID)

  },[navigation, params.pacientID]);


  const getPatient = async (patientID:number)=> {
    try {
      const { data } = await uroApi.get<Patient>(`/bladdercancer/${patientID}`);
      setPatient(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  if (isLoading) {
    return (
      <View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color={COLORS.blue} size={70}/>
      </View>
    );
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Datos Personales') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Diagnóstico') {
            iconName = focused ? 'git-network' : 'git-network-outline';
          } else if (route.name === 'Datos del examen') {
            iconName = focused ? 'pulse' : 'pulse-outline';
          } else if (route.name === 'Historias') {
            iconName = focused ? 'stats-chart': 'stats-chart-outline'
          }
          
          return <Icon name={iconName!} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#28B463',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Datos Personales"
        component={DatosPersonalesScreen}
        initialParams={{ 
          pacientID: patient?.id, 
          dni:patient?.dni,
          edad: patient?.edad
        }}
      />

      <Tab.Screen
        name="Datos del examen" 
        component={DatosDelExamenScreen}
        initialParams={{ pacientID: params.pacientID }}
      />

      <Tab.Screen 
        name="Diagnóstico"
        component={ResultadosScreen}
        initialParams={{ pacientID: patient}}
      />
      <Tab.Screen 
        name="Historias"
        component={HistoryScreen}
        initialParams={{ pacientID: params.pacientID}}
      />
    </Tab.Navigator>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
    alignItems: 'center',
  },

  row: {
    flex:1,
    margin:7,
    flexDirection: 'row',
  },

  rowSeparator: {
    padding: 8,
    marginVertical: 5,
    alignItems:'center',
    backgroundColor: COLORS.blue,
  },

  text: {
    fontWeight: '500',
    color: COLORS.white,
  },

  rowButton: {
    flexDirection: 'row',
    marginVertical: 8,
  },

  button: {
    flex: 1,
    padding: 2,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  textButton: {
    color:COLORS.white,
    fontSize: 20,
    padding: 7,
  },

  colorRegisterButton: {
    backgroundColor: COLORS.blue,
  },

  colorCancelButton: {
    backgroundColor: COLORS.cancelButton,
  },

  disableButton: {
    backgroundColor: COLORS.grey,
  },

});
