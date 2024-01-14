import React, { useState } from 'react'
import { Alert, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useUsers } from '../../hooks/useUsers'
import { styles } from '../../theme/appTheme'
import { Input } from '../../components/inputs/Input'
import { Button } from '../../components/button/Button'
import uroApi from '../../api/uroApi'

export const PersonalDataScreen = () => {
  
  const [editState, setEditState] = useState(true)

  const [buttonTextInfo, setButtonTextInfo] = useState('Editar')
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [password, setPassword] = useState('')

  const {user} = useUsers()
  const [userUpdate, setUserUpdate] = useState({
    first_name: '',
    last_name: '',
    password: '',
  })
  

  const handleOnChange = (label: string, value?: string) => {
    userUpdate['first_name']
    setUserUpdate((elements => ({... elements, [label]: value})))
  }
  
  const saveEditAction = async () => {
    if(editState){
      setEditState(false)
      setButtonTextInfo('Guardar')      
    }else{
      
      try {
        setEditState(true)
        setButtonTextInfo('Editar')
        // const {status} = await uroApi.put(`auth/user`, userUpdate)
        console.log(user?.password)
        Alert.alert('Actualización de datos', 'Los datos se han sido actualizados correctamente.')
      }catch(error) {
        Alert.alert('Actualización de datos', 'Error, revise la información que estás proporcionando.')
        
      }
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        
        <Input placeholder = {user?.dni} label="DNI/NIE/Pasaporte"readonly/>
        
        <Input
          label="NOMBRE" 
          readonly
          placeholder = {user?.first_name}
          onChangeText={(value: string)=>handleOnChange('first_name', value)} 
        />
        
        <Input 
          label="APELLIDOS"  
          readonly
          placeholder = {user?.last_name} 
          onChangeText={(value: string)=>handleOnChange('last_name', value)}
        />
        
        <Input placeholder = {user?.email} label="EMAIL" readonly/>

        <Input 
          label="Contraseña" 
          password={true} 
          readonly = {editState}
          placeholder = "***********" 
          onChangeText={(value: string)=>handleOnChange('password', value)} 
        />

        <View style={{marginVertical:25}}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=>{saveEditAction()}}
            style={[styles.button, styles.colorRegisterButton]}>
              <Text style={styles.textButton}> {buttonTextInfo} </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
      
    </SafeAreaView>
  )
}
