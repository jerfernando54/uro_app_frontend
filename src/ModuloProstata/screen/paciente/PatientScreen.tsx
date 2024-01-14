/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, View, SafeAreaView } from 'react-native';
import { usePacienteCancerProstata } from '../../../hooks/usePacienteCancerProstata';
import { COLORS } from '../../../constants/constants';
import { PatientList } from './PatientList';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any>{}
export const PatientScreen = ({navigation, route}: Props) => {

  const {isLoading} = usePacienteCancerProstata();

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
