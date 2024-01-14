import React, { useEffect, useState }from 'react'
import { View, SafeAreaView, ScrollView, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { COLORS } from '../../../constants/constants';
import { Input } from '../../../components/inputs/Input';
import { History } from '../../../interfaces/CancerVejiga';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HistoryDetailScreen = ({route}:any) => {
  const hcID = route.params.hcID
  const [isLoading, setIsLoading] = useState(true);
  const [his, setHis] = useState<History | undefined>()

  useEffect(() => {
    getHistoryStorage(hcID)
  
  }, [his])
  

  const getHistoryStorage = async(hisID: number) => {
    try{
      const hisStorage = await AsyncStorage.getItem('histories')
      
      if (hisStorage !== null) {
        const historiesJSON: History[] = JSON.parse(hisStorage!)
        const hc = historiesJSON.find((elem: History) => elem.id === hisID)
        setHis(hc)
      }
      setTimeout(() => {
        setIsLoading(false)
      },1000)

    } catch(error){
      console.error(error)
    }
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
      <ScrollView style = {styles.marginScroll}>
        <View style= {styles.row}>
          <Input
            readonly
            label="Fecha de modificación"
            placeholder={his?.created_at}
            iconName="information-circle"
          />
        </View>

        <View style= {styles.row}>
          <Input
            readonly
            label="Expo. Profesional"
            iconName="information-circle"
            placeholder={his?.expoprofesional}
          />
          <Input
            readonly
            label="FECHACIR"
            placeholder='25-06-2020'
            />
        </View>

        <View style={styles.row}>
          <Input
            readonly
            label="obesidad"
            iconName="information-circle"
            placeholder={his?.obesidad}
          />
          <Input
            readonly
            label="hta"
            iconName="information-circle"
            placeholder={his?.hta}
          />
        </View>

        <View style={styles.row}>
          <Input
            readonly
            label="dm"
            placeholder={his?.dm} 
            iconName="information-circle"
            />
          <Input
            readonly
            label="tabaco"
            iconName="information-circle"
            placeholder={his?.tabaco}
            />
        </View>

        <View style={styles.row}>
          <Input
            readonly
            label="número de tumores"
            iconName="information-circle"
            placeholder={his?.numtumores.toString()}
            />
          <Input
            readonly
            label="tamaño tumoral"
            iconName="information-circle"
            placeholder={his?.tamtumoral}
            />
        </View>

        <View style={styles.row}>
          <Input
            readonly
            label="aspecto tumoral"
            iconName="information-circle"
            placeholder={his?.aspectotumoral}
            />

          <Input
            readonly
            iconName="information-circle"
            label="estado tumoral clínico"
            placeholder={his?.estadotumoralclinico}
            />
        </View>

        <View style={styles.row}>
          <Input
            readonly
            iconName="information-circle"
            label="asosiación a carcinoma 'IN SITU'"
            placeholder={his?.acarsinoinsitu}
          />
          <Input
            readonly
            iconName="information-circle"
            label="formas histológicas atípicas"
            placeholder={his?.fhistoatipicas}
            />
        </View>
        <View style={styles.row}>
          <Input
            readonly
            iconName="information-circle"
            label="clínica"
            placeholder={his?.clinica}
          />

          <Input
            readonly
            label="grado tumoral"
            placeholder={his?.gradotumoral}
            iconName="information-circle"
            />
        </View>

        <View style={styles.row}>
          <Input
            readonly
            label="permeación vascular"
            placeholder={his?.permiacionvascular}
            iconName="information-circle"
            />

          <Input
            readonly
            label="carcinoma urotelial"
            placeholder={his?.carcinomaUrotelial}
            iconName="information-circle"
            />
        </View>

        <View style={styles.row}>
          <Input
            readonly
            iconName="information-circle"
            label="Citologías"
            placeholder={his?.citologias}
            />

          <Input
            readonly
            label="primario"
            placeholder={his?.primario}
            iconName="information-circle"
            />
        </View>

        <View style={styles.row}>
          <Input
            readonly
            label="recidivante"
            placeholder={his?.recidivante} 
            iconName="information-circle"
            />

          <Input
            readonly
            label="instalación previa"
            placeholder={his?.instalacionprevia}
            iconName="information-circle"
            />
        </View>

        <View style={styles.row}>
          <Input
            readonly
            iconName="information-circle"
            label="estudo extensión: tac"
            placeholder={his?.tac}
            />

          <Input
            readonly
            label="re-rtu vesical"
            placeholder={his?.rtu}
            iconName="information-circle"
            />
        </View>

        <View style={styles.row}>
          <Input
            readonly
            label="exitus"
            iconName="information-circle"
            placeholder={his?.exitus}
            />

          <Input
            readonly
            label="recidiva"
            placeholder={his?.recidiva}
            iconName="information-circle"
            />
        </View>

        <View style={styles.row}>
          <Input
            readonly
            label="progresiva"
            iconName="information-circle"
            placeholder={his?.progresiva}
            />

          <Input
            readonly
            label="nº recidivas"
            placeholder={his?.nrecidivas}
            iconName="information-circle"
            />
        </View>

        <View style={styles.row}>
          <Input
            readonly
            label="evolución desfavorable"
            placeholder={his?.evoldesfavorable}
            iconName="information-circle"
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  marginScroll: {
    marginVertical: 20,
    marginHorizontal: 2
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
