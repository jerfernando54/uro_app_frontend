import React from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  RefreshControl
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { PatientItem } from './PatientItem';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../../constants/constants';
import { usePacienteCancerProstata } from '../../../hooks/usePacienteCancerProstata';

interface Props extends StackScreenProps<any, any>{}

export const PatientList = ({navigation, route}: Props) => {
  const {allPatients} = usePacienteCancerProstata();
  const renderItem = ({item}:any) => {
    return <PatientItem nhis={item.his} pacientID={item.id} nombre={item.nombre} apellidos={item.apellidos} navigation={navigation} route={route}/>;
  };

  const refreshData = () => {
    console.log('refresh data function');
  };

  return (
    <View>
      <View style={estilos.searchView}>
        <TextInput
        style={estilos.searchInput}
        autoCorrect={false}
        placeholder = "Introduce el DNI o la HIS del paciente"
        >
        </TextInput>
        <Icon name="search-circle-outline" size={30} color={COLORS.blue} style={{marginHorizontal: 3}}/>
      </View>
      <FlatList
        data={allPatients}
        keyExtractor={item => item.dni}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={()=> refreshData}
          />
        }
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  searchView: {
    marginHorizontal: 9,
    marginVertical:18,
    paddingHorizontal:10,
    borderWidth:2,
    borderRadius:10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.blue,
    justifyContent:'space-between',
  },

  searchInput: {
    padding:6
  }
})
