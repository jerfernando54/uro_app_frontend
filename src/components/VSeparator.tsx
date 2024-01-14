import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/constants';

export const VSeparator = () => {
  return (
    <View style={styles.container}>
      {/* Separador horizontal */}
      <View style={styles.horizontalSeparator} />

      {/* Separador vertical */}
      <View style={styles.verticalSeparator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalSeparator: {
    height: 1,
    width: '90%', // Puedes ajustar el tamaño horizontal del separador aquí
    backgroundColor: COLORS.blue,
  },
  verticalSeparator: {
    height: '50%', // Puedes ajustar el tamaño vertical del separador aquí
    width: 1,
    backgroundColor: COLORS.blue,
    position: 'absolute',
  },
});
