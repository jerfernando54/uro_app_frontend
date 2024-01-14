import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../constants/constants';
import { styles } from '../../../theme/appTheme';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import uroApi from '../../../api/uroApi';
import { History, Patient } from '../../../interfaces/CancerVejiga';
import { Alert } from 'react-native';
import { AuthContext } from '../../../context/AuthContext';

export const ResultadosScreen = ({route}:any) => {
  useEffect(()=>{
    if (pacientData.exitus !== '' &&
        pacientData.recidiva !== '' && 
        pacientData.progresiva !== '' && 
        pacientData.nrecidivas !== '' && 
        pacientData.evoldesfavorable !== ''
      ){
        setPredictions(prevStates => ({
          ...prevStates,
          exitus:pacientData.exitus,
          recidiva: pacientData.recidiva,
          progresiva: pacientData.progresiva,
          nrecidivas: pacientData.nrecidivas,
          evoldesfavorable: pacientData.evoldesfavorable
        }))
        setHasPredicted(true)
        setSaveButtonDisabled(true)
        setCancelButtonDiseabled(true)
      }
      setIsLoading(false)
      
  },[])
 
  const pacientData = route.params.pacientID
  const [isLoading, setIsLoading] = useState(true);
  const [hasPredicted, setHasPredicted] = useState(false)
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(false)
  const [cancelButtonDiseabled, setCancelButtonDiseabled] = useState(false)
  const {registerHistory, errorMessage} = useContext(AuthContext)

  const [predictions, setPredictions] = useState({
    exitus: "null",
    recidiva: "null",
    progresiva: "null",
    nrecidivas: "null",
    evoldesfavorable: "null"
  })

  const getPredicciones = async (patientID: number) => {
    try {
      const {data} = await uroApi.get<Patient>(`/prediction/trainmodel/${patientID}`);
      setPredictions(prevStats => ({
        ...prevStats,
        recidiva: data.recidiva,
        nrecidivas: data.nrecidivas.toString(),
        progresiva: data.progresiva,
        exitus: data.exitus,
        evoldesfavorable: data.evoldesfavorable
      }))
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        setHasPredicted(true)
        setSaveButtonDisabled(false)
        setCancelButtonDiseabled(false)
      },1500)
    } catch (error) {
      Alert.alert('Error', 'Datos del paciente incorrectos')
    }
  }

  const updateDiagnostic = async (action: string) => {
    if (action === "save"){
      try {
        setIsLoading(true)
        const {data} = await uroApi.patch<History>(`/bladdercancer/${pacientData.id}/`, predictions)
        data.hisID = [data.id]
        await uroApi.post<History>('/histories/', data)
        // registerHistory(data)

        setTimeout(() => {
          Alert.alert('Diagnóstico', 'El diagnóstico ha sido guardado correctamente')
          setIsLoading(false)
          setSaveButtonDisabled(true)
          setCancelButtonDiseabled(true)
        }, 1500)
      } catch (error) {
        setIsLoading(false)
        Alert.alert('Diagnóstico', 'No se ha podido guardar el diagnostico, intentalo otra vez')
      }
    }
    else {
      if (action === "repeat"){
        getPredicciones(pacientData.id)
      }else {
        Alert.alert('Diagnóstico', 'El diagnóstico ha sido rechazado')
      }
    }    
  }

  if (isLoading) {
    return (
      <View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color={COLORS.blue} size={70}/>
        <Text style={styles.process_text}>Obteniendo predicciones... </Text>
      </View>
    );
  }

  if (!hasPredicted) {
    return (
      <SafeAreaView style= {{flex:1, top:35}}>
        <View style={styles.rowButton}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=>{getPredicciones(pacientData.id)}}
            style={[styles.button, styles.colorRegisterButton]}>
            <Text style={styles.textButton}>
              Realizar Diagnostico
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView  style= {{flex:1}}>
      <ScrollView>

        <View style={styles.box_resultado}>
          <View style={styles.row}>
            <Text style={styles.label}>Exitus: </Text>
            <Text style={styles.text_resultado}>{predictions.exitus}</Text>
          </View>          
          
          <View style={styles.row}>
            <Text style={styles.label}>Recidiva: </Text>
            <Text style={styles.text_resultado}> {predictions.recidiva} </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Progresiva: </Text>
            <Text style={styles.text_resultado}>
              {predictions.progresiva}
              </Text>
          </View>
          
          <View style={styles.row}>
            <Text style={styles.label}>Nº Recidivas: </Text>
            <Text style={styles.text_resultado}>{predictions.nrecidivas}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Evol. Desfavorable: </Text>
            <Text style={styles.text_resultado}>{predictions.evoldesfavorable}</Text>
          </View>
        </View>

        <View style={styles.rowButton}>
          <TouchableOpacity
            activeOpacity={0.9}
            disabled = {cancelButtonDiseabled}
            onPress={()=>{updateDiagnostic("cancel")}}
            style={[styles.button,
              cancelButtonDiseabled ? styles.disableButton : styles.colorCancelButton
            ]}>
            <Text style={styles.textButton}> Rechazar </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9}
            disabled = {saveButtonDisabled}
            onPress={()=>{updateDiagnostic('save')}}
            style={[styles.button,
              saveButtonDisabled ? styles.disableButton : styles.colorRegisterButton
            ]}>
            <Text style={styles.textButton}> Guardar </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=>{updateDiagnostic('repeat')}}
            style={[ styles.button, styles.colorRegisterButton ]}>
            <Text style={styles.textButton}> Repetir </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowSeparator}>
          <Text style={styles.text}> EVOLUCIÓN </Text>
        </View>
        <View style={styles.row}>
          {/* <Text style={styles.label}>MALA</Text> */}
        </View> 

      </ScrollView>

    </SafeAreaView>
    
  )
}
