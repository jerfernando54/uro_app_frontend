import React from 'react'
import  { COLORS }  from '../../constants/constants'
import { StackScreenProps } from '@react-navigation/stack/'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

interface Props extends StackScreenProps<any, any>{
userId: number,
dni: string,
nombre: string,
apellidos: string,
rol: string
}

export const UserItemScreen = ({userId, rol,  dni, nombre, apellidos, navigation}: Props) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('UserDetailsScreen', {
        pacientID: dni,
        nombre: nombre,
        apellidos: apellidos
      })}
      >
      <View style={styles.row}>
        <Text style={styles.text}>
          {nombre}
        </Text>
        <Text style={styles.text}>
          {apellidos}
        </Text>
        <Text style={[ styles.text]} >
          {rol}
        </Text>
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
    padding: 30,
  },
  row: {
    flex:1,
    margin:7,
    flexDirection: 'row',
    justifyContent:'space-around',
  },
  text: {
    fontSize: 15,
  },

  negativo: {
    color: 'green',
  },

});
