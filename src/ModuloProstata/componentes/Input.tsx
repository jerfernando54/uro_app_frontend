/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TextInput, Text, KeyboardTypeOptions } from 'react-native';
import { COLORS } from '../../constants/constants';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  placeholder: string,
  label?: string,
  iconName?: string
  ktype?: KeyboardTypeOptions | undefined;
  maxLength?: number
}

export const Input = ({placeholder, label, iconName, ktype, maxLength}: Props) => {

  return (
    <View style={{ flex: 1 }}>
      <Text style={{margin:5, color: COLORS.blue, fontWeight: '500'}}>
        {label}
      </Text>
      <View style={styles.inputContainer}>
        <Icon name={iconName!} size={20} color={COLORS.blue} style={{marginHorizontal: 3}}/>
        <TextInput
          placeholder = {placeholder}
          autoCorrect={false}
          style={styles.input}
          keyboardType={ktype}
          maxLength={maxLength}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex:1,
    height: 40,
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius:6,
    marginHorizontal: 6,
    borderColor: COLORS.blue,
    alignItems: 'center',
  },
});
