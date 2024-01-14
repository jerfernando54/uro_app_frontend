import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { FlatList, View, TextInput, StyleSheet, Text, ScrollView} from 'react-native';

import { COLORS, EVOLDESFAVORABLE } from '../../../constants/constants';
import { History } from '../../../interfaces/CancerVejiga';
import { HistoryItemScreen } from './HistoryItemScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface Props extends StackScreenProps<any, any>{}

export const HistoryListScreen = ({navigation, route}: Props) => {
  const [allHistories, setAllHistories] = useState<History[]>([]);

  useEffect(() => {
    getHistories()
  }, [allHistories])

  const getHistories = async() => {
    const histories = await AsyncStorage.getItem('histories')

    if (histories !== null) {
      setAllHistories(JSON.parse(histories!))
    }
  }
  const renderItem = ({item}:any) => {
    return <HistoryItemScreen hcID = {
      item.id} 
      fecha_modificacion={item.created_at}
      evoldesfavorable={item.evoldesfavorable}
      modelo='Random Forest'
      navigation={navigation} 
      route={route}
    />;
  };
  

  return (
    <View>
      
      <View style={styles.searchView}>
        <TextInput
          style={styles.searchInput}
          autoCorrect={false}
          placeholder = ""
        >
        </TextInput>
        <Icon name="search-circle-outline" size={30} color={COLORS.blue} style={{marginHorizontal: 3}}/>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Fecha</Text>
        <Text style={styles.text}>Evol. Desfavorable</Text>
        <Text style={styles.text}>Modelo</Text>
      </View>
      
      <FlatList
        data={allHistories}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  searchView: {
    marginHorizontal: 9,
    marginVertical:15,
    paddingHorizontal:10,
    borderWidth:2,
    borderRadius:10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.blue,
    justifyContent:'space-between',
  },

  searchInput: {
    padding:6
  },

  row: {
    // flex:1,
    marginTop:20,
    marginHorizontal:19,
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  text: {
    fontSize: 15,
    fontWeight:'bold',
    color: COLORS.mainColor
  },

})