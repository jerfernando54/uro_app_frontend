import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { History } from '../../../interfaces/CancerVejiga';
import { COLORS } from '../../../constants/constants';
import { StackScreenProps } from '@react-navigation/stack';
import { HistoryListScreen } from './HistoryListScreen';
import uroApi from '../../../api/uroApi';

interface Props extends StackScreenProps<any, any>{}

export const HistoryScreen = ({navigation, route}:Props) => {
  const hcID = route.params?.pacientID
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getHistories()
  }, [])

  const getHistories = async () => {
    try {
      const {data} = await uroApi.get<History>(`/histories/`,{params:{hisID:hcID}})

      if (data !== null) {
        await AsyncStorage.setItem('histories', JSON.stringify(data))
        setIsLoading(false)
      } else {
        await AsyncStorage.removeItem('histories')
      }
    }catch (error) {
      console.error(error)
    }
  }

  if (isLoading) {
    return (
      <View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color={COLORS.blue} size={70}/>
      </View>
    );
  }
  return (
    <View>
      <SafeAreaView>
        <HistoryListScreen navigation={navigation} route={route}/>
      </SafeAreaView>
    </View>
  )
}