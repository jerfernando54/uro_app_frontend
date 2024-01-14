/* eslint-disable semi */
/* eslint-disable comma-dangle */
import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import { COLORS } from '../../constants/constants'

interface Props {
  label: string,
  cancelButton?: boolean
}
export const Button = ({label, cancelButton}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style = {[styles.button, (cancelButton ? styles.cancelBackgroundColor : styles.defaultBackgroundColor)]}
    >
      <Text style= {styles.label}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flex:1,
    margin:12,
    padding: 3,
    borderRadius:6,
    alignItems: 'center',
  },

  label : {
    fontSize: 16,
    padding:7,
    fontWeight: 'bold',
    color: COLORS.white,
  },

  defaultBackgroundColor: {
    backgroundColor: COLORS.blue
  },

  cancelBackgroundColor: {
    backgroundColor: COLORS.cancelButton,
  },
});
