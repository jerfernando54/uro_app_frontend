import React from 'react';
import { 
  Text,
  View,
  StyleSheet,
  TouchableOpacity, 
 } from 'react-native';
import { COLORS } from '../../../constants/constants';
import { StackScreenProps } from '@react-navigation/stack/'


interface Props extends StackScreenProps<any, any>{
  pacientID: number,
  nhis: string,
  nombre: string, 
  apellidos: string
}

export const PatientItem = ({nhis, nombre, apellidos, pacientID, navigation}: Props) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('PatientDetailsProstataScreen', {
        pacientID: pacientID,
        nombre: nombre,
        apellidos: apellidos
      })}
      >
      <View style={styles.row}>
        <Text style={styles.text}>{nhis}</Text>
        <Text style={styles.text}>{nombre}</Text>
        <Text style={styles.text}>{apellidos}</Text>
        <Text style={[ styles.text, styles.negativo ]}>Negativo</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 8,
    margin: 9,
    padding: 10,
  },
  row: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-around',
  },
  text: {
    fontSize: 15,
    fontWeight:'bold'
  },

  negativo: {
    color: 'green',
  },

});