import React, { useEffect, useState } from 'react';
import {
  View, 
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { COLORS } from '../../../constants/constants';

import cancerProstataDB from '../../../api/CancerProstataDB';
import { RootStackParams } from '../../../navigation/Navigation';
import { CancerProstataPatient, Patient } from '../../../interfaces/CancerProstata';
import { DatosDelExamenProstataScreen } from './DatosDelExamenProstataScreen';
import { RecomendacionScreen } from '../../../ModuloVejiga/screens/paciente/ResultadosScreen';
import { DatosPersonalesProstataScreen } from './DatosPersonalesProstataScreen';

const Tab = createBottomTabNavigator();
interface Props extends StackScreenProps<RootStackParams, 'PatientDetailsProstataScreen'>{}

export const PatientDetailsProstataScreen = ({route, navigation}: Props) => {
  const params = route.params;
  const [paciente, setPaciente] = useState<Patient>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPatient(params.pacientID)
    navigation.setOptions({
      title: params.nombre + ' ' + params.apellidos,
    });

  },[navigation, params.nombre]);

  const getPatient = async (patientID: any) => {
    const res = await cancerProstataDB.get<CancerProstataPatient>(`/cancerprostata/${patientID}`)
    setPaciente(res.data.paciente)
    setIsLoading(false)
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
          } else if (route.name === 'Tratamiento') {
            iconName = focused ? 'git-network' : 'git-network-outline';
          } else if (route.name === 'Datos del examen') {
            iconName = focused ? 'pulse' : 'pulse-outline';
          }
          
          return <Icon name={iconName!} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#28B463',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Datos Personales"
        component={DatosPersonalesProstataScreen}
        initialParams={{ pacientID: params.pacientID }}
      />

      <Tab.Screen
        name="Datos del examen" 
        component={DatosDelExamenProstataScreen}
        initialParams={{ pacientID: params.pacientID }}
      />

      <Tab.Screen 
        name="Tratamiento"
        component={RecomendacionScreen}
        initialParams={{ pacientID: params.pacientID }}
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
