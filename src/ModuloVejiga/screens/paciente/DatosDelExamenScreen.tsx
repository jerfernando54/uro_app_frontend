import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS } from '../../../constants/constants';
import { Input } from '../../../components/inputs/Input';
import uroApi from '../../../api/uroApi';
import { Patient } from '../../../interfaces/CancerVejiga';


export const DatosDelExamenScreen = ({route}:any) => {
  const pacientID = route.params.pacientID

  const [paciente, setPaciente] = useState<Patient>();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    getPatient(pacientID)
  },[]);

  const getPatient = async (patientID: number) => {
    const {data} = await uroApi.get<Patient>(`/bladdercancer/${patientID}`)
    setPaciente(data)
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
    <SafeAreaView>
     <ScrollView>
      <View style= {styles.row}>
        <Input
          readonly
          label="HIS"
          placeholder={paciente?.nhis}
          iconName="information-circle"
        />
        <Input
          readonly
          label="Sexo"
          iconName="information-circle"
          placeholder={paciente?.sexo}
        />
      </View>

      <View style= {styles.row}>
        <Input
          readonly
          label="Expo. Profesional"
          iconName="information-circle"
          placeholder={paciente?.expoprofesional}
        />
        <Input
          readonly
          label="FECHACIR"
          placeholder={paciente?.fechacir} 
          />
      </View>

      <View style={styles.row}>
        <Input
          readonly
          label="obesidad"
          iconName="information-circle"
          placeholder={paciente?.obesidad}
        />
        <Input
          readonly
          label="hta"
          iconName="information-circle"
          placeholder={paciente?.hta}
        />
      </View>

      <View style={styles.row}>
        <Input
          readonly
          label="dm"
          placeholder={paciente?.dm} 
          iconName="information-circle"
          />
        <Input
          readonly
          label="tabaco"
          iconName="information-circle"
          placeholder={paciente?.tabaco}
          />
      </View>

      <View style={styles.row}>
        <Input
          readonly
          label="número de tumores"
          iconName="information-circle"
          placeholder={paciente?.numtumores.toString()}
          />
        <Input
          readonly
          label="tamaño tumoral"
          iconName="information-circle"
          placeholder={paciente?.tamtumoral}
          />
      </View>

      <View style={styles.row}>
        <Input
          readonly
          label="aspecto tumoral"
          iconName="information-circle"
          placeholder={paciente?.aspectotumoral}
          />

        <Input
          readonly
          iconName="information-circle"
          label="estado tumoral clínico"
          placeholder={paciente?.estadotumoralclinico}
          />
      </View>

      <View style={styles.row}>
        <Input
          readonly
          iconName="information-circle"
          label="asosiación a carcinoma 'IN SITU'"
          placeholder={paciente?.acarsinoinsitu}
        />
        <Input
          readonly
          iconName="information-circle"
          label="formas histológicas atípicas"
          placeholder={paciente?.fhistoatipicas}
          />
      </View>
      <View style={styles.row}>
        <Input
          readonly
          iconName="information-circle"
          label="clínica"
          placeholder={paciente?.clinica}
        />

        <Input
          readonly
          label="grado tumoral"
          placeholder={paciente?.gradotumoral}
          iconName="information-circle"
          />
      </View>

      <View style={styles.row}>
        <Input
          readonly
          label="permeación vascular"
          placeholder={paciente?.permiacionvascular}
          iconName="information-circle"
          />

        <Input
          readonly
          label="carcinoma urotelial"
          placeholder={paciente?.carcinomaUrotelial}
          iconName="information-circle"
          />
      </View>

      <View style={styles.row}>
        <Input
          readonly
          iconName="information-circle"
          label="Citologías"
          placeholder={paciente?.citologias}
          />

        <Input
          readonly
          label="primario"
          placeholder={paciente?.primario}
          iconName="information-circle"
          />
      </View>

      <View style={styles.row}>
        <Input
          readonly
          label="recidivante"
          placeholder={paciente?.recidivante} 
          iconName="information-circle"
          />

        <Input
          readonly
          label="instalación previa"
          placeholder={paciente?.instalacionprevia}
          iconName="information-circle"
          />
      </View>

      <View style={styles.row}>
        <Input
          readonly
          iconName="information-circle"
          label="estudo extensión: tac"
          placeholder={paciente?.tac}
          />

        <Input
          readonly
          label="re-rtu vesical"
          placeholder={paciente?.rtu}
          iconName="information-circle"
          />
      </View>
      </ScrollView>
    </SafeAreaView>
  )
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