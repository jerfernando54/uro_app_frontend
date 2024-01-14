import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { styles } from '../../theme/appTheme';
import { Input } from '../../components/inputs/Input';
import { variables } from '../../hooks/variables';
import { Dropdown } from 'react-native-element-dropdown';
import { COLORS } from '../../constants/constants';


export const SettingsScreen = () => {
  const [model, setModel] = useState('')
  const [frequency, setFrequency] = useState('')

  useEffect(() => {
    setModel('1'),
    setFrequency('100')
  }, [])

  const saveConfig = () => {
    const m = model === '0' ? 0 : model === '1' ? 1 : 2;
    setModel(variables.modelodDePrediccion[m].label)
  }
  const change = () => {
    console.log('change')
  }
  return (
    <SafeAreaView style= {{flex:1, marginTop: 25, marginHorizontal:10}}>
      <View style = {{height:80, marginBottom:15}}>
        <Input
          label="Modelo de Predicción"
          placeholder={model === '0' ? 'KNN' : model === '1' ? 'Random Forest' : 'Naive Byes'}
          iconName="information-circle"
          onChangeText={()=>change()}
          readonly
        />
      </View>
      <View style = {{height:80, marginBottom:15}}>
        <Input
            label="Frec. Entrenamiento"
            placeholder={frequency}
            readonly
            iconName="information-circle"
            />
      </View>
      <View>
        <TextInput style={{
          color: COLORS.blue, 
          fontSize:18, 
          fontWeight: 'bold',
          textAlign:'center',
          marginBottom:-10,
          marginTop:10
          }}> Cambiar parametros</TextInput>
      </View>
      <View style= {{marginBottom:70}}>
        <View style={styles.container}>
          <Text style={styles.label}> Modelo de Predicción </Text>
          <Dropdown
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            data={variables.modelodDePrediccion}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Seleccionar'}
            value={model}
            onChange={item => {
              setModel(item.value);
            }}
          />
        </View>    
      </View>  
      <View style= {{marginBottom:325}}>
      <View style={styles.container}>
          <Text style={styles.label}> Frec. Reentrenamineto </Text>
          <Dropdown
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            data={variables.frecuenciaDeReentrenamiento}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Seleccionar'}
            value={frequency}
            onChange={item => {
              setFrequency(item.value);
            }}
          />
        </View>
      </View>  
      <View style={styles.rowButton}>
        <TouchableOpacity
          activeOpacity={0.5}
          // disabled
          onPress={()=>{saveConfig()}}
          style={[styles.button, styles.colorRegisterButton]}>
          <Text style={styles.textButton}>
            Guargar configuraciones
          </Text>
        </TouchableOpacity>
      </View>  
    </SafeAreaView>
    
  );
};