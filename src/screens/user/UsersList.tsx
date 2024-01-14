import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { UserItemScreen } from './UserItemScreen'
import { useUsers } from '../../hooks/useUsers'
import { FlatList, View } from 'react-native'

interface Props extends StackScreenProps<any, any>{}

export const UsersList = ({navigation, route}: Props) => {
  const {allUsers, isLoading} = useUsers()

  const renderItem = ({item}:any) => {
    return <UserItemScreen userId={item.id} dni={item.dni} nombre={item.nombre} apellidos={item.apellidos} navigation={navigation} route={route} rol={item.rol} />;
  };

  return (
    <View>
      <FlatList
        data={allUsers}
        keyExtractor={item => item.dni}
        renderItem={renderItem}
      />
    </View>
  )
}
