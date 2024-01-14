import React, { useEffect, useState } from 'react'
import { 
  View,
  ScrollView, 
  StyleSheet, 
  SafeAreaView,
  ActivityIndicator 
} from 'react-native';
import cancerProstataDB from '../../../api/CancerProstataDB';
import { CancerProstataPatient, Patient } from '../../../interfaces/CancerProstata';
import { COLORS } from '../../../constants/constants';
import { Input } from '../../../components/inputs/Input';


export const DatosDelExamenProstataScreen = ({route}:any) => {
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
    <SafeAreaView>
     <ScrollView>

      {/**FILIACIÓN */}
      <View style= {styles.row}>
        <Input
          readonly
          label="HIS"
          placeholder={paciente?.his}
          iconName="information-circle"
        />
         <Input
          readonly
          label="FECHA CIRurgía"
          placeholder={paciente?.fechaCir} 
          />
      </View>

      {/* SOCIODEMOGRAFICAS */}
      <View style={styles.row}>
        <Input
          readonly
          label="EDAD"
          iconName="information-circle"
          placeholder={paciente?.edad}
        />
        <Input
          readonly
          label="ETNIA"
          iconName="information-circle"
          placeholder={paciente?.etnia}
        />
      </View>

      {/* ANTECEDENTES */}
      <View style={styles.row}>
        <Input
          readonly
          label="obeso"
          placeholder={paciente?.obesidad} 
          iconName="information-circle"
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
          iconName="information-circle"
          placeholder={paciente?.dm}
        />

        <Input
          readonly
          label="hereda"
          iconName="information-circle"
          placeholder={paciente?.hereda}
        />        
      </View>

      <View style={styles.row}>
        <Input
          readonly
          label="tabaco"
          iconName="information-circle"
          placeholder={paciente?.tabaco}
        />
      </View>

      {/* CLINICO-PATOLOGICAS */}
      <View style={styles.row}>
        <Input
          readonly
          iconName="information-circle"
          label="tactor"
          placeholder={paciente?.tactor}
        />

        <Input
          readonly
          label="psapre"
          placeholder={paciente?.psapre}
          iconName="information-circle"
          />
      </View>

      <View style={styles.row}>
        <Input
          readonly
          label="psalt"
          placeholder={paciente?.psalt}
          iconName="information-circle"
          />

        <Input
          readonly
          label="tdupre"
          iconName="information-circle"
          placeholder={paciente?.tdupre}
          />
      </View>

      <View style={styles.row}>
        <Input
          readonly
          label="ecotr"
          iconName="information-circle"
          placeholder={paciente?.ecotr}
          />
      </View>

      {/* BIOPSIA PROSTÁTICAS */}
      <View style={styles.row}>
        <Input
          readonly
          label="nbiopsia"
          placeholder={paciente?.nbiopsia}
          iconName="information-circle"
          />

        <Input
          readonly
          label="histo"
          iconName="information-circle"
          placeholder={paciente?.histo}
          />
      </View>

      <View style={styles.row}>
        <Input
          readonly
          label="gleason1"
          iconName="information-circle"
          placeholder={paciente?.gleason1}
          />

        <Input
          readonly
          label="nclipos"
          placeholder={paciente?.nclipos}
          iconName="information-circle"
          />
      </View>

      <View style={styles.row}>
        <Input
          readonly
          label="bilat"
          iconName="information-circle"
          placeholder={paciente?.bilat}
          />

        <Input
          readonly
          label="porcent"
          placeholder={paciente?.porcent}
          iconName="information-circle"
          />
      </View>
      <View style={styles.row}>
        <Input
          readonly
          label="iperin"
          iconName="information-circle"
          placeholder={paciente?.iperin}
          />

        <Input
          readonly
          label="ilinf"
          placeholder={paciente?.ilinf}
          iconName="information-circle"
          />
      </View>
      <View style={styles.row}>
        <Input
          readonly
          label="ivascu"
          iconName="information-circle"
          placeholder={paciente?.ivascu}
          />

        <Input
          readonly
          label="tnm1"
          placeholder={paciente?.tnm1}
          iconName="information-circle"
          />
      </View>

      {/* TRAS PROSTATECTOMÍA */}
      <View style={styles.row}>
        <Input
          readonly
          label="histo2"
          iconName="information-circle"
          placeholder={paciente?.histo2}
          />

        <Input
          readonly
          label="gleason2"
          placeholder={paciente?.gleason2}
          iconName="information-circle"
          />
      </View>
      <View style={styles.row}>
        <Input
          readonly
          label="bilat2"
          iconName="information-circle"
          placeholder={paciente?.bilat2}
          />

        <Input
          readonly
          label="localiz"
          placeholder={paciente?.localiz}
          iconName="information-circle"
          />
      </View>
      <View style={styles.row}>
        <Input
          readonly
          label="multifoc"
          iconName="information-circle"
          placeholder={paciente?.multifoc}
          />

        <Input
          readonly
          label="volumen"
          placeholder={paciente?.volumen}
          iconName="information-circle"
          />
      </View>
      <View style={styles.row}>
        <Input
          readonly
          label="extracap"
          iconName="information-circle"
          placeholder={paciente?.extracap}
          />

        <Input
          readonly
          label="vvss"
          placeholder={paciente?.vvss}
          iconName="information-circle"
          />
      </View>
      <View style={styles.row}>
        <Input
          readonly
          label="iperin2"
          iconName="information-circle"
          placeholder={paciente?.iperin2}
          />

        <Input
          readonly
          label="ilinf2"
          placeholder={paciente?.ilinf2}
          iconName="information-circle"
          />
      </View>
      <View style={styles.row}>
        <Input
          readonly
          label="ivascu2"
          iconName="information-circle"
          placeholder={paciente?.ivascu2}
          />

        <Input
          readonly
          label="pinag"
          placeholder={paciente?.pinag}
          iconName="information-circle"
          />
      </View>
      <View style={styles.row}>
        <Input
          readonly
          label="margen"
          iconName="information-circle"
          placeholder={paciente?.margen}
          />

        <Input
          readonly
          label="tnm2"
          placeholder={paciente?.tnm2}
          iconName="information-circle"
          />
      </View>

      {/* EVOLUTIVOS */}
      <View style={styles.row}>
        <Input
          readonly
          label="psapos"
          iconName="information-circle"
          placeholder={paciente?.psapos}
          />

        <Input
          readonly
          label="rtpadyu"
          placeholder={paciente?.rtpadyu}
          iconName="information-circle"
          />
      </View>
      <View style={styles.row}>
        <Input
          readonly
          label="rtpmes"
          iconName="information-circle"
          placeholder={paciente?.rtpmes}
          />

        <Input
          readonly
          label="rbq"
          placeholder={paciente?.rbq}
          iconName="information-circle"
          />
      </View>
      <View style={styles.row}>
        <Input
          readonly
          label="trbq"
          iconName="information-circle"
          placeholder={paciente?.trbq}
          />

        <Input
          readonly
          label="tdupli"
          placeholder={paciente?.tdupli}
          iconName="information-circle"
          />
      </View>
      <View style={styles.row}>
        <Input
          readonly
          label="t1mtx"
          iconName="information-circle"
          placeholder={paciente?.t1mtx}
          />

        <Input
          readonly
          label="fecha fin"
          placeholder={paciente?.fechafin}
          iconName="information-circle"
          />
      </View>
      <View style={styles.row}>
        <Input
          readonly
          label="fallecimiento"
          placeholder={paciente?.fallec}
          iconName="information-circle"
          />

        <Input
          readonly
          label="tsuperv"
          placeholder={paciente?.tsuperv}
          iconName="information-circle"
          />
      </View>
      <View style={styles.row}>
        <Input
          readonly
          label="tsegui"
          iconName="information-circle"
          placeholder={paciente?.tsegui}
          />

        <Input
          readonly
          label="psafin"
          placeholder={paciente?.psafin}
          iconName="information-circle"
          />
      </View>
      <View style={styles.row}>
        <Input
          readonly
          label="capra-s"
          placeholder={paciente?.capra_s}
          iconName="information-circle"
        />
      </View>

      {/* MARCADORES */}
      <View style={styles.row}>
        <Input
          readonly
          label="ra1"
          iconName="information-circle"
          placeholder={paciente?.ra1}
          />

        <Input
          readonly
          label="ra2"
          placeholder={paciente?.ra2}
          iconName="information-circle"
          />
      </View>
      <View style={styles.row}>
        <Input
          readonly
          label="pten"
          iconName="information-circle"
          placeholder={paciente?.pten}
          />

        <Input
          readonly
          label="erg"
          placeholder={paciente?.erg}
          iconName="information-circle"
          />
      </View>
      <View style={styles.row}>
        <Input
          readonly
          label="ki67"
          iconName="information-circle"
          placeholder={paciente?.ki67}
          />

        <Input
          readonly
          label="spink1"
          placeholder={paciente?.spink1}
          iconName="information-circle"
          />
      </View>
      <View style={styles.row}>
        <Input
          readonly
          label="c-myc"
          iconName="information-circle"
          placeholder={paciente?.c_myc}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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