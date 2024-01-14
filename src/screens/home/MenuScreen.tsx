import React, {useContext, useEffect, useState} from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { COLORS } from '../../constants/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { useUsers } from '../../hooks/useUsers';


interface Props extends StackScreenProps<any, any>{}

export const MenuScreen = ({navigation}: Props) => {
  const {user} = useUsers()
  
  if (user?.role === 'Paciente'){
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => navigation.navigate('PersonalDataScreen')}>
            <Text style={styles.text}>
              <Icon name="person-outline" size={40} color="#fff" />
            </Text>
            <Text style={styles.text}> Mi Perfil </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => navigation.navigate('ConsultaScreen',{
              patientID: user.dni
            })}>
            <Text style={styles.text}>
              <Icon name="git-network-outline" size={40} color="#fff" />
            </Text>
            <Text style={styles.text}>Hist. Clínica</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={[styles.row, styles.row1]}>
          {/* <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => navigation.navigate('ProstataScreen')}>
            <Image
              style={styles.tinyLogo}
              source={require('../../img/prostata.png')}
            />

            <Text style={styles.text}>Prostata</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => navigation.navigate('VejigaScreen')}>
            <Image
              style={styles.tinyLogo}
              source={require('../../img/vejiga.png')}
            />

            <Text style={styles.text}> Vejiga </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => navigation.navigate('ProfileScreen')}>
    
            <Image
              style={styles.tinyLogo}
              source={require('../../img/usuario.png')}
            />
            <Text style={styles.text}> Usuario </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => navigation.navigate('SettingsScreen')}>
            <Image
              style={styles.tinyLogo}
              source={require('../../img/configuraciones.png')}
            />
            <Text style={styles.text}>Config </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );

  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  content: {
    // flex: 1,
    margin: 10,
    padding: 27,
    borderRadius: 15,
    justifyContent: 'center',
    top: '10%',
    shadowColor: COLORS.mainColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent:'center',
    // flexDirection: 'column',
    // justifyContent: 'space-around',
  },
  row1: {
    marginBottom: 5,
    paddingHorizontal: 15,
  },
  button: {
    margin: 5,
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.mainColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textColor,
  },
});
