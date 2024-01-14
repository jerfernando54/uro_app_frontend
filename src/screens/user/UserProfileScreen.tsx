import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Input } from '../../components/inputs/Input';
import { Button } from '../../components/button/Button';
import { useUsers } from '../../hooks/useUsers';

export const UserProfileScreen = () => {
  const {user} = useUsers()
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        
        <Input placeholder = {user?.dni} label="DNI/NIE/Pasaporte"readonly/>
        
        <Input placeholder = {user?.first_name} label="NOMBRE" readonly/>
        
        <Input placeholder = {user?.last_name} label="APELLIDOS" readonly/>
        
        <Input placeholder = {user?.email} label="EMAIL" readonly/>

        <Input placeholder = "***********" label="Contraseña" readonly/>

        <Input placeholder = {user?.role} label="ROL" readonly/>
       
        <View>
          <Button label="Editar"/>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:4,
    padding: 5,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
  },
});
