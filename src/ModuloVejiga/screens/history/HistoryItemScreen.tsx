import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS } from '../../../constants/constants';

interface Props extends StackScreenProps<any, any>{
  hcID: number
  fecha_modificacion: string,
  evoldesfavorable: string,
  modelo: string
}

export const HistoryItemScreen = ({hcID, evoldesfavorable, modelo, fecha_modificacion, navigation}: Props) => {

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('HistoryDetailScreen', {
        hcID: hcID,
        fecha_modificacion: fecha_modificacion
      })}
      >
  
      <View style={styles.row}>
        <Text style={styles.text}>{fecha_modificacion}</Text>
        <Text style={styles.text}>{evoldesfavorable}</Text>
        <Text style={styles.text}>{modelo}</Text>
      </View>
    </TouchableOpacity>
  )
}

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
    justifyContent:'space-between',
  },

  text: {
    fontSize: 15,
    fontWeight:'bold'
  },
});
