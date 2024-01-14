import React, { useEffect, useState } from 'react'
import {
  View, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView, 
  ActivityIndicator 
} from 'react-native';

import { COLORS } from '../../../constants/constants';
import { Input } from '../../../components/inputs/Input';
import cancerProstataDB from '../../../api/CancerProstataDB';
import { CancerProstataPatient, Patient} from '../../../interfaces/CancerProstata';


export const DatosPersonalesProstataScreen = ({route, component}:any) => {
  const pacientID = route.params.pacientID
  
  const [paciente, setPaciente] = useState<Patient>();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    getPatient(pacientID)

  },[]);

  const getPatient = async (patientID: number) => {
    const res = await cancerProstataDB.get<CancerProstataPatient>(`/cancerprostata/${patientID}`)
    setPaciente(res.data.paciente)
    setIsLoading(false)
  }

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
          placeholder={paciente?.dni}
        />

        <Input
          readonly
          label="Edad"
          maxLength={3}
          ktype="numeric"
          placeholder={paciente?.edad} 
          iconName="person"
        />
      </View>

      <View style={{margin: 7}}>
        <Input
          readonly
          label="Apellidos"
          iconName="person"
          placeholder={paciente?.apellidos}
        />

        <Input
          readonly
          label="Nombre"
          iconName="person"
          placeholder={paciente?.nombre}
        />
      </View>

      <View style= {styles.row}>
        <Input
          readonly
          maxLength={9}
          iconName="call"
          ktype="numeric"
          label="Tel. Movil"
          placeholder={paciente?.telMovil}
        />
        <Input
          readonly
          maxLength={9}
          iconName="call"
          ktype="numeric"
          label="Tel. Fijo"
        />
      </View>

      <View style= {styles.row}>
        <Input
          readonly
          iconName="home"
          label="Direccion"
          placeholder={paciente?.direccion}
        />
        <Input
          readonly
          label="Numero"
          iconName="home"
          placeholder="3" //TODO cumplimentar este dato al registrar el paciente
          />
      </View>

      <View style= {styles.row}>
        <Input
          readonly
          label="Piso"
          iconName="home"
          placeholder="2" //TODO cumplimentar este dato al registrar el paciente
        />
        <Input
          readonly
          label="Puerta"
          iconName="home"
          placeholder="5" //TODO cumplimentar este dato al registrar el paciente
          />
      </View>

      <View style= {styles.row}>
        <Input
          readonly
          iconName="home"
          label="Municipio"
          placeholder={paciente?.municipio}
        />
        <Input
          readonly
          iconName="home"
          label="Provincia"
          placeholder={paciente?.provincia}
          />
      </View>
      </ScrollView>

      {/* <View style={styles.rowButton}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={()=>{}}
          style={[styles.button, styles.colorRegisterButton]}>
          <Text style={styles.textButton}>
            Editar
          </Text>
        </TouchableOpacity>
      </View> */}
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
