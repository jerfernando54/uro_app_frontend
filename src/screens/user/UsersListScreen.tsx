/* eslint-disable semi */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { useUsers } from '../../hooks/useUsers';
import { COLORS } from '../../constants/constants';
import { StackScreenProps } from '@react-navigation/stack';
import { UsersList } from './UsersList';

interface Props extends StackScreenProps<any, any>{}

export const UsersListScreen = ({navigation, route}: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color={COLORS.blue} size={70}/>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <UsersList navigation={navigation} route={route}/>
    </SafeAreaView>
  )
}
