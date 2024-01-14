import React from 'react';
 import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/constants';

 interface IProps {
 value: boolean;
 onPress: () => void;
 size?: number;
 backgroundColor?: string;
 }

 export const CheckBoxButton = (props: IProps) => {
 const { value, onPress, size, backgroundColor } = props;

return (
<TouchableOpacity
  activeOpacity={0.7}
  style={[
    styles.checkBoxContainer,
    {
      height: size || 38,
      width: size || 38,
      backgroundColor: value ? backgroundColor : 'transparent',
      borderColor: 'blue',
    },
  ]}
  onPress={onPress}
>
  {value ? <Image style={styles.activeIcon} tintColor={'white'} source={require('../../img/check.png')} /> : <></>}
</TouchableOpacity>
);
};

const styles = StyleSheet.create({
activeIcon: {
width: 32,
height: 32,
},
 checkBoxContainer: {
  borderRadius: 5,
  borderWidth: 1.3,
 },
});