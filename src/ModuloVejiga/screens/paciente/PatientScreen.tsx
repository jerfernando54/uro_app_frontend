/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { usePacientesCancerVejiga } from '../../../hooks/usePacientesCancerVejiga';
import { COLORS } from '../../../constants/constants';
import { PatientList } from './PatientList';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any>{}
export const PatientScreen = ({navigation, route}: Props) => {

  const {isLoading} = usePacientesCancerVejiga();

  if (isLoading) {
    return (
      <View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color={COLORS.blue} size={70}/>
      </View>
    );
  }

  return (
    <View>
      <SafeAreaView>
        <PatientList navigation={navigation} route={route}/>
      </SafeAreaView>
    </View>
  );
};
