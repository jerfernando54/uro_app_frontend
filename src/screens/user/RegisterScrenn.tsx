/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect, useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
} from 'react-native';

import { styles } from '../../theme/appTheme';
import { Input } from '../../components/inputs/Input';
import cancerVejigaDB from '../../api/CancerVejigaDB';
import { Dropdown } from 'react-native-element-dropdown';
import { AuthContext } from '../../context/AuthContext';
import { User } from '../../interfaces/User';


export const RegisterScreen = () => {

  const selectRole = [
    { label: 'Medico', value: 'Medico' },
    { label: 'Enfermero', value: 'Enfermero' },
    { label: 'Paciente', value: 'Paciente' },    
  ];

  const [value, setValue] = React.useState("");
  const [isFocus, setIsFocus] = React.useState(false);
  const {signUp, errorMessage, removeError} = useContext(AuthContext);
  const [sent, setSent] = useState(false)

  const [usuario, setUsuario] = React.useState<User>({
    id: 0,
    dni: '',
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    role: '',
    is_active: false
  }); 

  useEffect(() => {
    if(sent) {
      setSent(false)
      if(errorMessage.length === 0) return
      //  {
        
      //   Alert.alert( 'Nuevo Usuario', 
      //   `El usuario ha sido registrado correctamente. En breve el administrador activara su cuenta`)
      // }
  
      else {
        const errorMessageString = JSON.stringify(errorMessage)
        console.log(errorMessage)
        // Alert.alert(
        // 'Register error', errorMessageString)  
        // setSent(false)
      }
    }
    setSent(false)
  }, [errorMessage])

  const validate = () => {
    Keyboard.dismiss();
  };

  const handleOnChange = (input: string, value: string) => {
    setUsuario(prevStates => ({...prevStates, [input]: value}))
  };

  const guardarUsuario = async () => {
    setSent(true)
    signUp(usuario)
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1}}>
      <ScrollView>
        <View style={styles.row}>
          <Input
            label='DNI/NIE/Pasaporte'
            iconName='person'
            placeholder='Documento de identificacion'
            onChangeText={(value: string) => handleOnChange('dni', value)}
          />
        </View>
        <View style={styles.row}>
          <Input
            label='Apellidos'
            iconName='person'
            placeholder='Apellidos'
            onChangeText={(value: string) => handleOnChange('last_name', value)}
          />
        </View>
        <View style={styles.row}>
          <Input
            label='Nombre'
            iconName='person'
            placeholder='Nombre'
            onChangeText={(value: string) => handleOnChange('first_name', value)}
          />
        </View>
        <View style={styles.row}>
          <Input
            label='Email'
            iconName='mail'
            placeholder='Correo electrónico'
            onChangeText={(value: string) => handleOnChange('email', value)}
          />
        </View>
        <View style={styles.row}>
          <Input
            label='Usuario'
            iconName='person'
            placeholder='Usario'
            onChangeText={(value: string) => handleOnChange('username', value)}
          />
        </View>

        <View style={styles.row}>
          <View style={styless.container}>
            <Text style={styles.label}>
              Rol
            </Text>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              selectedTextStyle={styless.selectedTextStyle}
              data={selectRole}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Seleccionar' : '...'}
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                handleOnChange('role',item.value)
                setIsFocus(false);
              }}
            />
          </View>
        </View>

        <View style={styles.row}>
          <Input
            label='Contraseña'
            iconName='lock-closed'
            placeholder='Contraseña'
            onChangeText={(value: string) => handleOnChange('password', value)}
          />
        </View>

        <View style={styles.row}>
          <Text>Aceptar condiciones de uso</Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=>{guardarUsuario()}}
            style={[styles.button, styles.colorRegisterButton]}>
              <Text style={styles.textButton}> Registrar </Text>
            </TouchableOpacity>
        </View>
      </ScrollView>

    </KeyboardAvoidingView>
  );
};

const styless = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal:6
  },
  
  selectedTextStyle: {
    fontSize: 16,
  },
});
