/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TextInput, Text, KeyboardTypeOptions } from 'react-native';
import { COLORS } from '../../../constants/constants';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  placeholder?: string,
  password?: boolean,
  label?: string,
  iconName?: string,
}

export const Input = ({
  placeholder,
  password,
  label,
  iconName,
  ...props
}: Props) => {

  const [hidePassword, setHidePassword] = React.useState(password);

  return (
    <>
      <View style={{ flex: 1, justifyContent: 'flex-start'}}>
        <Text style={styles.label}>
          {label}
        </Text>
        <View style={styles.inputContainer}>
          <Icon name={iconName!} size={20} color={COLORS.blue} style={{marginHorizontal: 3}}/>
          <TextInput
            {...props}
            autoCorrect={false}
            style={styles.input}
            placeholder = {placeholder}
            secureTextEntry={hidePassword}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    flex:1,
  },

  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius:6,
    marginHorizontal: 6,
    borderColor: COLORS.blue,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },

  label: {
    margin:5,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: COLORS.blue,
  },
});
