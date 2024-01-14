import React, { useContext } from 'react';
import { COLORS } from '../constants/constants';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from '../context/AuthContext';

import { LoginScreen } from '../screens/auth/LoginScreen';
import { UserHomeScreen } from '../screens/user/UserHomeScreen';
import { ProstataScreen } from '../ModuloProstata/screen/ProstataScreen';
import { HomeVejigaScreen } from '../ModuloVejiga/screens/HomeVejigaScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { RegisterScreen } from '../screens/user/RegisterScrenn';
import { PatientDetailsScreen } from '../ModuloVejiga/screens/paciente/PatientDetailsScreen';
import { PatientDetailsProstataScreen } from '../ModuloProstata/screen/paciente/PatientDetailsProstataScreen';
import { MenuScreen } from '../screens/home/MenuScreen';
import { UserDetailsScreen } from '../screens/user/UserDetailsScreen';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { PersonalDataScreen } from '../screens/userPatient/PersonalDataScreen';
import { ConsultaScreen } from '../screens/userPatient/ConsultaScreen';
import { HistoryDetailScreen } from '../ModuloVejiga/screens/history/HistoryDetailScreen';


export type RootStackParams = {
  LoginScreen: undefined,
  MenuScreen: undefined,
  RegisterScreen: undefined,
  ProstataScreen: undefined,
  VejigaScreen: undefined,
  ProfileScreen: undefined,
  SettingsScreen: undefined,
  UserDetailsScreen: undefined;
  PersonalDataScreen: undefined;
  ConsultaScreen: undefined;
  DatosPersonalesScreen:{pacientID: string, dni: string, edad: number},
  DatosDelExamenScreen:{pacientID: string},
  DatosDelExamenProstataScreen:{pacientID: string}
  DiagnosticoScreen:{pacientID: string},
  HistoryDetailScreen: {fecha: string, historyID: number},
  PatientDetailsScreen: {pacientID: number, edad: number, nhis: string},
  PatientDetailsProstataScreen: {pacientID: number, nombre: string, apellidos: string}
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {

  const { status, logOut } = useContext(AuthContext)

  const RightButton = () => (
    <TouchableOpacity
      style = {styles.touchalble}
      onPress={()=> logOut()} 
    >
      <Text style={{ color: 'white', fontSize: 15, fontWeight:'500'}}>
        Cerrar sesión
      </Text>
    </TouchableOpacity>
  )
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: true,
        cardStyle: {
          backgroundColor: COLORS.white,
        },
        headerRight: () =>< RightButton />
      }}
    >
      {
        (status !== 'authenticated') 
          ? (
            <>
              <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login', headerShown: false }}/>
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: 'Registrar Usuario' }}/>
            </>
          )
          : (
              <>
                <Stack.Screen name="MenuScreen" component={MenuScreen} options={{ title: 'Menu', }}/>
                <Stack.Screen name="ProstataScreen" component={ProstataScreen} options={{ title: 'Cancer Prostata'}}/>
                <Stack.Screen name="VejigaScreen" component={HomeVejigaScreen} options={{ title: 'Cancer Vejiga' }}/>
                <Stack.Screen name="ProfileScreen" component={UserHomeScreen} options={{ title: 'Perfil' }} />
                <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Configuraciones' }} />
                <Stack.Screen name="PatientDetailsScreen" component={PatientDetailsScreen} options={{ title: 'Paciente' }} />
                <Stack.Screen name="PatientDetailsProstataScreen" component={PatientDetailsProstataScreen} options={{ title: 'Paciente' }} />
                <Stack.Screen name="UserDetailsScreen" component={UserDetailsScreen} options={{ title: 'User' }} />
                <Stack.Screen name="HistoryDetailScreen" component={HistoryDetailScreen} options={{ title: 'History' }} />
                <Stack.Screen name="PersonalDataScreen" component={PersonalDataScreen} options={{ title: 'Datos personales' }} />
                <Stack.Screen name="ConsultaScreen" component={ConsultaScreen} options={{ title: 'Datos Clinicos' }} />
              </>
          )
      }

    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  touchalble: {
    marginRight: 35,
    padding: 5,
    borderRadius:8,
    backgroundColor: COLORS.mainColor
  }
})
