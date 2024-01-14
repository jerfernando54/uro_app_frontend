/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect, useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { StackScreenProps } from '@react-navigation/stack';

import { styles } from '../../../theme/appTheme';
import { Input } from '../../../components/inputs/Input';
import { variables } from '../../../hooks/variables';

import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
 } from 'react-native';
import { AuthContext } from '../../../context/AuthContext';
import { Patient } from '../../../interfaces/CancerVejiga';
import { COLORS } from '../../../constants/constants';

interface Props extends StackScreenProps<any, any>{}

export const NuevoPacienteScreen = ({navigation}: Props) => {
  const {registerPatient, errorMessage} = useContext(AuthContext)

  const [sent, setSent] = useState(false)
  const [disable, setDisable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [paciente, setPaciente] = useState<Patient>({
    'id': 0,
    'dni': '',
    'nhis': '',
    'edad': 0, 
    'sexo': '', 
    'fechacir': '',
    'obesidad': '',
    'hta': '',
    'dm': '',
    'tabaco': '',
    'hereda': '',
    'expoprofesional': '',
    'clinica': '',
    'citologias': '',
    'numtumores' : 0,
    'tamtumoral': '',
    'aspectotumoral': '',
    'estadotumoralclinico': 'T1',
    'acarsinoinsitu': '',
    'gradotumoral': '',
    'permiacionvascular': '',
    'carcinomaUrotelial': '',
    'fhistoatipicas': '',
    'primario': '',
    'recidivante': '',
    'instalacionprevia': '',
    'tac': '',
    'rtu': '',
    'progresiva': '',
    'recidiva': '',
    'exitus': '',
    'nrecidivas': 0,
    'evoldesfavorable': '',
    'is_active':true
  });

  useEffect(() => {
    if (sent) {
      if(errorMessage.length === 0 ) {
        clearForm() 
        navigation.navigate('RegisterScreen')

        Alert.alert(
          'Nuevo paciente', 'El paciente ha sido registrado correctamente'
        )
        return
      }
      else {
        const errorMessageString = JSON.stringify(errorMessage)
        Alert.alert( 'Error', errorMessageString) 
      } 
      setSent(false)
    }else {
      clearForm()
    }
  }, [errorMessage])

  const handleOnChange = (name: string, value: string) => {
    setPaciente(prevStates => ({...prevStates, [name]: value}));
  };

  const savePatient = async () => {
    setIsLoading(true)
    setTimeout(() => {
      registerPatient(paciente)
      setSent(true)
      setIsLoading(false)
    },700)

  };

  const cancelRegister = () => {
    clearForm()
    // navigation.navigate('VejigaScreen/PatientScreen')
    navigation.navigate('MenuScreen')
  }

  const [dni, setDni] = useState('');
  const [fechacir, setFechacir] = useState('');
  const [nhis, setNhis] = useState('');
  
  const [sexo, setSexo] = useState('');

  const [obesidad, setObesidad] = useState('');
  const [hta, setHta] = useState('');

  const [dm, setDm] = useState('');
  const [tabaco, setTabaco] = useState('');

  const [hereda, setHereda] = useState('');
  const [expoprofesional, setExpoprofesional] = useState('');

  const [citologias, setCitologias] = useState('')
  const [clinica, setClinica] = useState('')

  const [numtumores, setNumtumores] = useState('');
  const [tamtumoral, setTamtumoral] = useState('');

  const [aspectotumoral, setAspectotumoral] = useState('');
  const [estadotumoralclinico, setEstadotumoralclinico] = useState('');

  const [acarsinoinsitu, setAcarsinoinsitu] = useState('');
  const [gradotumoral, setGradotumoral] = useState('');

  const [permiacionvascular, setPermiacionvascular] = useState('');
  const [carcinomaUrotelial, setCarcinomaUrotelial] = useState('');

  const [fhistoatipicas, setFhistoatipicas] = useState('');
  const [primario, setPrimario] = useState('');

  const [recidivante, setRecidivante] = useState('');
  const [instalacionprevia, setInstalacionprevia] = useState('');

  const [tac, setTac] = useState('');
  const [rtu, setRtu] = useState('');

  const clearForm = () => {
    setPaciente({
      'id': 0,
      'dni': '',
      'nhis': '',
      'edad': 0, 
      'sexo': '', 
      'fechacir': '',
      'obesidad': '',
      'hta': '',
      'dm': '',
      'tabaco': '',
      'hereda': '',
      'expoprofesional': '',
      'clinica': '',
      'citologias': '',
      'numtumores' : 0,
      'tamtumoral': '',
      'aspectotumoral': '',
      'estadotumoralclinico': 'T1',
      'acarsinoinsitu': '',
      'gradotumoral': '',
      'permiacionvascular': '',
      'carcinomaUrotelial': '',
      'fhistoatipicas': '',
      'primario': '',
      'recidivante': '',
      'instalacionprevia': '',
      'tac': '',
      'rtu': '',
      'progresiva': '',
      'recidiva': '',
      'exitus': '',
      'nrecidivas': 0,
      'evoldesfavorable': '',
      'is_active':true
    })

    setDni('')
    setFechacir('')
    setNhis('')
    setSexo('')
    setObesidad('')
    setHta('')
    setDm('')
    setTabaco('')
    setHereda('')
    setExpoprofesional('')
    setCitologias('')
    setClinica('')
    setNumtumores('')
    setTamtumoral('')
    setAspectotumoral('')
    setEstadotumoralclinico('')
    setAcarsinoinsitu('')
    setGradotumoral('')
    setPermiacionvascular('')
    setCarcinomaUrotelial('')
    setFhistoatipicas('')
    setPrimario('')    
    setRecidivante('')
    setInstalacionprevia('')    
    setTac('')    
    setRtu('')  
  }

  if (isLoading) {
    return (
      <View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color={COLORS.blue} size={70}/>
        <Text style={styles.process_text}>Enviando datos ... </Text>
      </View>
    );
  }
  
  return (
    <SafeAreaView style= {{flex:1}}>
      <ScrollView>
        {/* Datos clinicos */}
        <View style={styles.rowSeparator}>
          <Text style={styles.text}>
            DATOS CLINICOS
          </Text>
        </View>

        <View style= {styles.row}>
          <Input
            label="dni/nie/pasaporte"
            placeholder="Documento d identificación"
            iconName="information-circle"
            onChangeText= {(value: string) => handleOnChange('dni', value)}
          />
        </View>

        <View style= {styles.row}>
          <Input
            label="nhis"
            placeholder="Numero de Historia Clinica"
            iconName="information-circle"
            onChangeText= {(value: string) => handleOnChange('nhis', value)}
          />
          <Input
            label="fechacir"
            placeholder="YYYY-MM-DD"
            onChangeText= {(value: string) => handleOnChange('fechacir', value)}
            />
        </View>

        <View style= {styles.row}>
          <View style={styles.container}>
            <Input
              label="EDAD"
              placeholder="EDAD"
              iconName="information-circle"
              onChangeText= {(value: string) => handleOnChange('edad', value)}

            />
          </View>
          <View style={styles.container}>
            <Text style={styles.label}>
              SEXO
            </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.sexo}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={sexo}
              onChange={item => {
                setSexo(item.value);
                handleOnChange('sexo',item.value)
              }}
            />
          </View>
        </View>

        <View style= {styles.row}>
          <View style={styles.container}>
            <Text style={styles.label}>
              obesidad
            </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.dataObeso}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={obesidad}
              onChange={item => {
                setObesidad(item.value);
                handleOnChange('obesidad',item.value)
              }}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.label}>
              hta
            </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.dataHTA}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={hta}
              onChange={item => {
                setHta(item.value);
                handleOnChange('hta',item.value)
              }}
            />
          </View>
        </View>

        <View style= {styles.row}>
          <View style={styles.container}>
            <Text style={styles.label}>
              dm
            </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.dataDM}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={dm}
              onChange={item => {
                setDm(item.value);
                handleOnChange('dm',item.value)
              }}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.label}>
              tabaco
            </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.dataTabaco}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={tabaco}
              onChange={item => {
                setTabaco(item.value);
                handleOnChange('tabaco',item.value)
              }}
            />
          </View>
        </View>

        <View style= {styles.row}>
          <View style={styles.container}>
            <Text style={styles.label}> Hereda </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.dataHereda}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={hereda}
              onChange={item => {
                setHereda(item.value);
                handleOnChange('hereda',item.value)
              }}
            />
          </View>

          <View style={styles.container}>
            <Text style={styles.label}>
              Expo. Profesional
            </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.expoprofesional}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={expoprofesional}
              onChange={item => {
                setExpoprofesional(item.value);
                handleOnChange('expoprofesional',item.value)
              }}
            />
          </View>
        </View>

        <View style= {styles.row}>
          <View style={styles.container}>
            <Text style={styles.label}> Clinica </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.clinica}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={clinica}
              onChange={item => {
                setClinica(item.value);
                handleOnChange('clinica',item.value)
              }}
            />
          </View>

          <View style={styles.container}>
            <Text style={styles.label}> Citologias </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.citologias}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={citologias}
              onChange={item => {
                setCitologias(item.value);
                handleOnChange('citologias',item.value)
              }}
            />
          </View>
        </View>

        <View style= {styles.row}>
          <View style={styles.container}>
            <Text style={styles.label}>
              número de tumores
            </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.numtumores}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={numtumores}
              onChange={item => {
                setNumtumores(item.value);
                handleOnChange('numtumores',item.value)
              }}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.label}>
              tamaño tumoral
            </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.tamtumoral}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={tamtumoral}
              onChange={item => {
                setTamtumoral(item.value);
                handleOnChange('tamtumoral',item.value)
              }}
            />
          </View>
        </View>

        <View style= {styles.row}>
          <View style={styles.container}>
            <Text style={styles.label}>
              aspecto tumoral
            </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.aspectotumoral}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={aspectotumoral}
              onChange={item => {
                setAspectotumoral(item.value);
                handleOnChange('aspectotumoral',item.value)
              }}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.label}>
              estado Tum. clínico
            </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.estado}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={estadotumoralclinico}
              onChange={item => {
                setEstadotumoralclinico(item.value);
                handleOnChange('estadotumoralclinico',item.value)
              }}
            />
          </View>
        </View>

        <View style= {styles.row}>
          <View style={styles.container}>
            <Text style={styles.label}>
              asoc a Carc. 'IN SITU'
            </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.carcinomainsitu}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={acarsinoinsitu}
              onChange={item => {
                setAcarsinoinsitu(item.value);
                handleOnChange('acarsinoinsitu',item.value)
              }}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.label}>
              grado tumoral
            </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.grado}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={gradotumoral}
              onChange={item => {
                setGradotumoral(item.value);
                handleOnChange('gradotumoral',item.value)
              }}
            />
          </View>
        </View>

        <View style= {styles.row}>
          <View style={styles.container}>
            <Text style={styles.label}>
              permeación vascular
            </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.permeacion}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={permiacionvascular}
              onChange={item => {
                setPermiacionvascular(item.value);
                handleOnChange('permiacionvascular',item.value)
              }}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.label}>
              carcinoma urotelial
            </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.carcinomauro}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={carcinomaUrotelial}
              onChange={item => {
                setCarcinomaUrotelial(item.value);
                handleOnChange('carcinomaUrotelial',item.value)
              }}
            />
          </View>
        </View>

        <View style= {styles.row}>
          <View style={styles.container}>
            <Text style={styles.label}>
              formas hist. Atípicas
            </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.formasapiticas}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={fhistoatipicas}
              onChange={item => {
                setFhistoatipicas(item.value);
                handleOnChange('fhistoatipicas',item.value)
              }}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.label}>
              primario
            </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.primario}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={primario}
              onChange={item => {
                setPrimario(item.value);
                handleOnChange('primario',item.value)
              }}
            />
          </View>
        </View>

        <View style= {styles.row}>
          <View style={styles.container}>
            <Text style={styles.label}>
              recidivante
            </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.recidivante}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={recidivante}
              onChange={item => {
                setRecidivante(item.value);
                handleOnChange('recidivante',item.value)
              }}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.label}>
              instilación previa
            </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.instilacion}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={instalacionprevia}
              onChange={item => {
                setInstalacionprevia(item.value);
                handleOnChange('instalacionprevia',item.value)
              }}
            />
          </View>
        </View>

        <View style= {styles.row}>
          <View style={styles.container}>
            <Text style={styles.label}>
              estudio Exten. tac
            </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.tac}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={tac}
              onChange={item => {
                setTac(item.value);
                handleOnChange('tac',item.value)
              }}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.label}>
            re-rtu vesical
            </Text>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              data={variables.rtu}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Seleccionar'}
              value={rtu}
              onChange={item => {
                setRtu(item.value);
                handleOnChange('rtu',item.value)
              }}
            />
          </View>
        </View>       
      </ScrollView>

      <View style={styles.rowButton}>
        <TouchableOpacity
          activeOpacity={0.9}
          disabled={disable}
          onPress={()=>{savePatient();}}
          style={[styles.button, disable ? styles.disableButton : styles.colorRegisterButton]}>
          <Text style={styles.textButton}>
            Registrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => cancelRegister()}
          style={[styles.button, styles.colorCancelButton]}>
          <Text style={styles.textButton}>
            Cancelar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
