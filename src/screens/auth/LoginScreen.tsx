import React, { useContext, useEffect, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { CheckBoxButton } from '../../components/checkbox/CheckBoxButton';

import {
  Text,
  View,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../../constants/constants';
import { AuthContext } from '../../context/AuthContext';

interface Props extends StackScreenProps<any, any>{}

export const LoginScreen = ({navigation}: Props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {signIn, errorMessage, removeError} = useContext(AuthContext)

  useEffect(() => {
    if(errorMessage.length === 0 ) return
    const errorMessageString = JSON.stringify(errorMessage)
    Alert.alert(
      'Error',
      errorMessageString, [{ text: 'OK', onPress: removeError }]
    )  
  }, [errorMessage])
  

  const onLogin = async (username: string, password: string) => {
    signIn({email: username, password})
  };
  return (
    <View style = {styles.container}>
      <Text style = {{
        fontSize: 35,
        color: COLORS.blue,
        fontWeight: 'bold',
        textAlign: 'center',
      }}>
        UroApp
      </Text>
      <Text style ={styles.login}>
        Iniciar sesión
      </Text>

      <TextInput
        value={username}
        style={styles.input}
        placeholder="Usuario"
        onChangeText={setUsername}/>

      <TextInput
        secureTextEntry={true}
        value={password}
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={setPassword}
      />
      <Text style ={styles.textInfo}>
        ¿Has olvidado tu contraseña?
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.button, styles.loginButton]}
        onPress={() => onLogin(username, password)}
        >
        <Text style={styles.textButton}>
          Iniciar sesión
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.button, styles.registerButton]}
        onPress={() => navigation.navigate('RegisterScreen')}
        >
        <Text style={styles.textButton}>
          Registrarse
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: '5%',
  },

  input: {
    height: 40,
    margin: 12,
    padding: 12,
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 16,
    borderColor: COLORS.blue,
  },

  login: {
    fontSize: 20,
    margin:10,
    color: COLORS.blue,
    fontWeight: 'bold',
  },

  textInfo: {
    fontSize: 15,
    marginRight: 10,
    marginBottom: 20,
    color: COLORS.blue,
    fontWeight: 'bold',
    textAlign: 'right',
  },

  textButton: {
    color:COLORS.white,
    fontSize: 20,
    padding: 7,
  },

  button: {
    padding: 1,
    marginHorizontal:10,
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

  loginButton: {
    backgroundColor: COLORS.blue,
  },

  registerButton: {
    marginTop: 10,
    backgroundColor: COLORS.cancelButton,
  },
});
