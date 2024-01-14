import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack/'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS } from '../../../constants/constants';

interface Props extends StackScreenProps<any, any>{
  pacientID: any,
  nhis: string,
  dni: string,
  edad: number
}

export const PatientItem = ({nhis, pacientID, dni, edad, navigation}: Props) => {
  return (
    
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('PatientDetailsScreen', {
        pacientID: pacientID,
        nhis: nhis,
        edad: edad
      })}
      >
  
      <View style={styles.row}>
        <Text style={styles.text}>{nhis}</Text>
        <Text style={styles.text}>{dni}</Text>
        <Text style={styles.text}>{edad}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 12,
    padding: 10,
  },

  row: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-evenly',
  },

  text: {
    fontSize: 15,
    fontWeight:'bold'
  },
});
