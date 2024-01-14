import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { FlatList, View, TextInput, RefreshControl, StyleSheet, Text} from 'react-native';

import uroApi from '../../../api/uroApi';
import { PatientItem } from './PatientItem';
import { COLORS } from '../../../constants/constants';
import { Patient } from '../../../interfaces/CancerVejiga';
import { usePacientesCancerVejiga } from '../../../hooks/usePacientesCancerVejiga';


interface Props extends StackScreenProps<any, any>{}

export const PatientList = ({navigation, route}: Props) => {
  const {allPatients, setAllPatients} = usePacientesCancerVejiga();

  useEffect(() => {
    getPatients()
  }, [setAllPatients])

  const getPatients = async() => {
    const { data } = await uroApi.get<Patient[]>('/bladdercancer/');
    if (JSON.stringify(data) !== JSON.stringify(allPatients)) {
      setAllPatients(data);
    }
  }
  const renderItem = ({item}:any) => {
    return <PatientItem nhis={item.nhis} pacientID={item.id} dni={item.dni} edad={item.edad} navigation={navigation} route={route}/>;
  };
  const refreshData = () => {
    console.log('refresh data function');
  };

  return (
    <View>
      <View style={styles.searchView}>
        <TextInput
          style={styles.searchInput}
          autoCorrect={false}
          placeholder = "Introduce el DNI o la HIS del paciente"
        >
        </TextInput>
        <Icon name="search-circle-outline" size={30} color={COLORS.blue} style={{marginHorizontal: 3}}/>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>NHIS</Text>
        <Text style={styles.text}>DNI</Text>
        <Text style={styles.text}>EDAD</Text>
      </View>
      
      <FlatList
        data={allPatients}
        keyExtractor={item => item.id.toString()}
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

const styles = StyleSheet.create({
  searchView: {
    marginHorizontal: 9,
    marginVertical:15,
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
  },

  row: {
    // flex:1,
    flexDirection: 'row',
    justifyContent:'space-evenly',
  },
  text: {
    fontSize: 15,
    fontWeight:'bold',
    color: COLORS.mainColor
  },

})