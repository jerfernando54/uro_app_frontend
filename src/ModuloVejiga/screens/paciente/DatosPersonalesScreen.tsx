import React, { useEffect, useState } from 'react'
import {
  View, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView, 
  ActivityIndicator, 
  TouchableOpacity,
  Text,
  Alert
} from 'react-native';

import { COLORS } from '../../../constants/constants';
import { Input } from '../../../components/inputs/Input';
import { User} from '../../../interfaces/User';
import uroApi from '../../../api/uroApi';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any>{}

export const DatosPersonalesScreen = ({route, component, navigation}:any) => {
  const user = route.params
  const [isLoading, setIsLoading] = useState(true);

  const [userData, setUserData] = useState<User>()
  
  useEffect(() => {
    setTimeout(() => { 
      setIsLoading(false)
    },1000)
  },[]);

  const confirmarBaja = async () => {
    const body = {
      is_active: 0
    }
    const {status} = await uroApi.patch(`/bladdercancer/${user.pacientID}/`, body) 
    if (status === 200){      
      Alert.alert('Confirmar Baja', 'La baja se ha realizada correctamente')
      setTimeout(() => {
        navigation.navigate('VejigaScreen')
      },200)
    }
  }

  const alertaBaja = async () => {
      Alert.alert('Confirmar Baja', 'Estás seguro que deseas dar de baja a este paciente?',
      [{ text: 'Confirmar Baja', onPress:  confirmarBaja},{text:'cancelar'}])
  }

  // const getPatient = async (patientID: number) => {
  //   const user = await uroApi.get<User>(`/auth/user/${patientID}`)
  //   setUserData(user.data);
  //   setIsLoading(false)
  // }

  if (isLoading) {
    return (
      <View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color={COLORS.blue} size={70}/>
      </View>
    );
  }
  
  return (
    <SafeAreaView
    style= {{flex:1}}>
    <ScrollView>
      <View style= {styles.row}>
        <Input
          readonly
          iconName="person"
          label= "DNI/NIE/Pasaporte"
          placeholder={user?.dni}
        />

        <Input
          readonly
          label="Edad"
          maxLength={3}
          ktype="numeric"
          placeholder={user.edad.toString()}
          iconName="person"
        />
      </View>

      <View style={{margin: 7}}>
        <Input
          readonly
          label="Apellidos"
          iconName="person"
          placeholder={userData?.last_name}
        />

        <Input
          readonly
          label="Nombre"
          iconName="person"
          placeholder={userData?.first_name}
        />
      </View>

      <View style= {styles.row}>
        <Input
          readonly
          maxLength={9}
          iconName="call"
          ktype="numeric"
          label="Tel. Movil"
          placeholder=''
        />
        <Input
          readonly
          maxLength={9}
          iconName="call"
          ktype="numeric"
          label="Tel. Fijo"
          placeholder=''
        />
      </View>

      <View style= {styles.row}>
        <Input
          readonly
          iconName="home"
          label="Direccion"
          placeholder=''
        />
        <Input
          readonly
          label="Numero"
          iconName="home"
          placeholder='' //TODO cumplimentar este dato al registrar el paciente
          />
      </View>

      <View style= {styles.row}>
        <Input
          readonly
          label="Piso"
          iconName="home"
          placeholder='' //TODO cumplimentar este dato al registrar el paciente
        />
        <Input
          readonly
          label="Puerta"
          iconName="home"
          placeholder='' //TODO cumplimentar este dato al registrar el paciente
          />
      </View>

      <View style= {styles.row}>
        <Input
          readonly
          iconName="home"
          label="Municipio"
          placeholder=''
        />
        <Input
          readonly
          iconName="home"
          label="Provincia"
          placeholder=''
          />
      </View>
      </ScrollView>
      <View style={styles.rowButton}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={()=>{alertaBaja();}}
          style={[styles.button, styles.colorCancelButton ]}>
          <Text style={styles.textButton}>
            Dar de baja
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
    alignItems: 'center',
  },

  row: {
    flex:1,
    margin:7,
    flexDirection: 'row',
  },

  rowSeparator: {
    padding: 8,
    marginVertical: 5,
    alignItems:'center',
    backgroundColor: COLORS.blue,
  },

  text: {
    fontWeight: '500',
    color: COLORS.white,
  },

  rowButton: {
    flexDirection: 'row',
    marginVertical: 8,
  },

  button: {
    flex: 1,
    padding: 2,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  textButton: {
    color:COLORS.white,
    fontSize: 20,
    padding: 7,
  },

  colorRegisterButton: {
    backgroundColor: COLORS.blue,
  },

  colorCancelButton: {
    backgroundColor: COLORS.cancelButton,
  },

  disableButton: {
    backgroundColor: COLORS.grey,
  },

});