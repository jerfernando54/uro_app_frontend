import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { styles } from '../../theme/appTheme'
import { Input } from '../../components/inputs/Input'
import { Patient } from '../../interfaces/CancerVejiga'
import uroApi from '../../api/uroApi'
import { COLORS } from '../../constants/constants'

export const ConsultaScreen = ({route}:any) => {
  const pacientDNI = route.params.patientID
  const [paciente, setPaciente] = useState<Patient>();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    getPatient()
  },[]);

  const getPatient = async () => {
    const {data} = await uroApi.get<Patient>(`/user/clinical_history/${pacientDNI}`)
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
