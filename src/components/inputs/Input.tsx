/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Text, KeyboardTypeOptions } from 'react-native';
import { COLORS } from '../../constants/constants';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  label?: string,
  iconName?: string,
  maxLength?: number,
  readonly?: boolean,
  password?: boolean,
  placeholder?: string,
  onChangeText?: (value: string) => void;
  ktype?: KeyboardTypeOptions | undefined;
}

export const Input = ({
  label,
  ktype,
  password,
  iconName,
  readonly,
  maxLength,
  placeholder,
  onChangeText,
  ...props
}: Props) => {

  const [hidePassword, setHidePassword] = React.useState(password);

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.label}>
        {label}
      </Text>
      <View style={styles.inputContainer}>
        <Icon name={iconName!} size={20} color={COLORS.blue} style={{marginHorizontal: 3}}/>
        <TextInput
          autoCorrect={false}
          style={styles.input}
          keyboardType={ktype}
          maxLength={maxLength}
          editable = {!readonly}
          placeholder = {placeholder}
          secureTextEntry={password}
          onChangeText={onChangeText}
          {...props}
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

  label: {
    margin:5,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: COLORS.blue,
  },
});
