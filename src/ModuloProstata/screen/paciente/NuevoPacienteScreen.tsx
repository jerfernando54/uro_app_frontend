/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { StyleSheet } from 'react-native';
import { variables } from '../../../hooks/variables';
import { COLORS } from '../../../constants/constants';
import { Input } from '../../../components/inputs/Input';
import { Dropdown } from 'react-native-element-dropdown';
import CancerProstataDB from '../../../api/CancerProstataDB';

export const NuevoPacienteScreen = () => {
  const [paciente, setPaciente] = useState({
    dni:'',
    edad:'',
    nombre:'',
    apellidos: '',
    telMovil: '',
    cp: '',
    direccion: '',
    municipio: '',
    provincia: '',
    his: '',
    fechaCir: '',
    etnia: '',
    obeso: '',
    hta: '',
    dm: '',
    hereda: '',
    tabaco: '',
    tactor: '',
    psapre: '',
    psalt: '',
    tdupre: '',
    ecotr: '',
    histo: '',
    gleason1: '',
    nclipos: '',
	  bilat:'',
    porcent: '',
    iperin: '',
    ilinf: '',
    ivascu: '',
    tnm1: '',
    histo2: '',
    gleason2: '',
    bilat2: '',
    localiz: '',
    multifoc: '',
    volumen: '',
    extracap: '',
    vvss: '',
    iperin2: '',
    ilinf2: '',
    ivascu2: '',
    pinag: '',
    margen: '',
    tnm2: '',
    psapos: '',
    rtpadyu: '',
    rtpmes: '',
    rbq: '',
    trbq: '',
    tdupli: '',
    t1mtx: '',
    fechafin: '',
    fallec: '',
    tsuperv: '',
    tsegui: '',
	  psafin: '',
	  capra_s: '',
    ra1: '',
    ra2: '',
    pten: '',
    ki67: '',
    spink1: '',
    c_myc: ''
  });

  const handleOnChange = (name: string, value: string) => {
    setPaciente(prevStates => ({...prevStates, [name]: value}));
  };

  const savePatient = async () => {
    const response = await CancerProstataDB.post('/cancerprostata/',JSON.stringify(paciente));
    // console.log(response.data.message)
    return await response.data.message;
  }



  const [etnia, setEtnia] = React.useState("");
  const [obeso, setObeso] = React.useState("");
  const [hta, setHta] = React.useState("");
  const [dm, setDm] = React.useState("");
  const [tabaco, setTabaco] = React.useState("");
  const [hereda, setHereda] = React.useState("");
  const [tactor, setTactor] = React.useState("");
  const [psapre, setPsapre] = React.useState("");
  const [psalt, setPsalt] = React.useState("");
  const [ecotr, setEcotr] = React.useState("");
  const [histo, setHisto] = React.useState("");
  const [histo2, setHisto2] = React.useState("");
  const [gleason1, setGleason1] = React.useState("");
  const [gleason2, setGleason2] = React.useState("");
  const [nclipos, setNclipos] = React.useState("");
  const [bilat, setBilat] = React.useState("");
  const [bilat2, setBilat2] = React.useState("");
  const [iperin, setIperin] = React.useState("");
  const [iperin2, setIperin2] = React.useState("");
  const [ilinf, setILINF] = React.useState("");
  const [ilinf2, setILINF2] = React.useState("");
  const [ivascu, setIvascu] = React.useState("");
  const [ivascu2, setIvascu2] = React.useState("");
  const [tnm1, setTnm1] = React.useState("");
  const [tnm2, setTnm2] = React.useState("");
  const [localiz, setLocaliz] = React.useState("");
  const [multifoc, setMultifoc] = React.useState("");
  const [extracap, setExtracap] = React.useState("");
  const [vvss, setVvss] = React.useState("");
  const [pinag, setPinag] = React.useState("");
  const [margen, setMargen] = React.useState("");
  const [psapos, setPsapos] = React.useState("");
  const [rtpadyu, setRtpadyu] = React.useState("");
  const [rtpmes, setRtpmes] = React.useState("");
  const [rbq, setRbq] = React.useState("");
  const [trbq, setTrbq] = React.useState("");
  const [tdupli, setTdupli] = React.useState("");
  const [t1mtx, setT1mtx] = React.useState("");
  const [fallec, setFallec] = React.useState("");
  const [tsuperv, setTsuperv] = React.useState("");
  const [tsegui, setTsegui] = React.useState("");
  const [capra_s, setCapra_s] = React.useState("");
  const [ra1, setRa1] = React.useState("");
  const [ra2, setRa2] = React.useState("");
  const [pten, setPten] = React.useState("");
  const [erg, setErg] = React.useState("");
  const [ki67, setKi67] = React.useState("");
  const [spink1, setspink1] = React.useState("");
  const [c_myc, setC_myc] = React.useState("");

  const DATA= [
    {
      title: 'filiacion',
      data:['his', 'fechacir']
    }
  ]

  const [isFocus, setIsFocus] = React.useState(false);
    return (
      <SafeAreaView style= {{flex:1}}>
          {/* Datos personales */}
        <ScrollView>
          <View style={styles.rowSeparator}>
            <Text style={styles.text}> DATOS PERSONALES</Text>
          </View> 

          <View style= {styles.row}>
            <Input
              iconName="person"
              label="DNI/NIE/Pasaporte"
              placeholder="Documento de indentificación"
              onChangeText= {(value: string) => handleOnChange('dni', value)}
            />
          </View>

          <View style={{margin: 7}}>
            <Input
              iconName="person"
              label="Apellidos"
              placeholder="Apellidos"
              onChangeText= {(value: string) => handleOnChange('apellidos', value)}
            />
            <Input
              label="Nombre"
              iconName="person"
              placeholder="Nombre"
              onChangeText= {(value: string) => handleOnChange('nombre', value)}
            />
          </View>

          <View style= {styles.row}>
            <Input
              maxLength={9}
              iconName="call"
              ktype="numeric"
              label="Tel. Movil"
              placeholder="Telefono Movil"
              onChangeText= {(value: string) => handleOnChange('telMovil', value)}
            />
            <Input
              label="Codigo Postal"
              placeholder="Codigo Postal"
              iconName="home"
              ktype="numeric"
              maxLength={9}
              onChangeText= {(value: string) => handleOnChange('cp', value)}
            />
          </View>

          <View style= {styles.row}>
            <Input
              iconName="home"
              label="Direccion"
              placeholder="Calle etc."
              onChangeText= {(value: string) => handleOnChange('direccion', value)}
            />
            <Input
              label="Numero"
              placeholder="Numero"
              iconName="home"
              onChangeText= {(value: string) => handleOnChange('telMovil', value)}
            />
          </View>

          <View style= {styles.row}>
            <Input
              label="Piso"
              placeholder="Piso"
              iconName="home"
              onChangeText= {(value: string) => handleOnChange('piso', value)}

            />
            <Input
              label="Puerta"
              placeholder="Puerta"
              iconName="home"
              onChangeText= {(value: string) => handleOnChange('puerta', value)}
            />
          </View>

          <View style= {styles.row}>
            <Input
              label="Municipio"
              placeholder="Municipio"
              iconName="home"
              onChangeText= {(value: string) => handleOnChange('municipio', value)}

            />
            <Input
              label="Provincia"
              placeholder="Provincia"
              iconName="home"
              onChangeText= {(value: string) => handleOnChange('provincia', value)}
            />
          </View>
          
          {/* Datos clinicos */}
          <View style={styles.rowSeparator}>
            <Text style={styles.text}> DATOS CLINICOS </Text>
          </View>

          {/* filiacion */}
          <View style= {styles.row}>
            <Input
              label="NHIS"
              iconName="information-circle"
              placeholder="Historia Clinica"
              onChangeText= {(value: string) => handleOnChange('his', value)}
            />
            <Input
              label="FECHACIR"
              placeholder="FECHA CIRURGIA"
              iconName="calendar-number"
              onChangeText= {(value: string) => handleOnChange('fechaCir', value)}
              />
          </View>

          {/* SOCIODEMOGRAFICAS */}
          <View style= {styles.row}>
            <Input
              label="EDAD"
              placeholder="EDAD"
              iconName="information-circle"
              onChangeText= {(value: string) => handleOnChange('edad', value)}

            />
           <View style={styles.container}>
              <Text style={styles.label}>
                ETNIA
              </Text>
              <Dropdown
                style={styles.dropdown}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataEtnia}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={etnia}
                onChange={item => {
                  setEtnia(item.value);
                  handleOnChange('etnia',item.value)
                }}
              />
            </View>
          </View>

          {/* ANTECEDENTES */}
          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>
                OBESO
              </Text>
              <Dropdown
                style={styles.dropdown}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataObeso}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={obeso}
                onChange={item => {
                  setObeso(item.value);
                  handleOnChange('obeso',item.value)
                }}
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.label}>
                HTA
              </Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
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
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>DM</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
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
                  setIsFocus(false);
                }}
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.label}>
                HEREDA
              </Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataHereda}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={hereda}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setHereda(item.value);
                  handleOnChange('hereda',item.value)
                }}
              />
            </View>
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>TABACO</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
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
                  setIsFocus(false);
                }}
              />
            </View>
          
          </View>
          
          {/* CLINICO-PATOLOGICAS */}
          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>
                TACTOR
              </Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataTACTOR}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={tactor}
                onChange={item => {
                  setTactor(item.value);
                  handleOnChange('tactor',item.value)
                }}
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.label}>
                PSAPRE
              </Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataPSAPRE}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={psapre}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setPsapre(item.value);
                  handleOnChange('psapre',item.value)
                  
                }}
              />
            </View>
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>
                PSALT
              </Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataPSALT}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={psalt}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setPsalt(item.value);
                  handleOnChange('psalt',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
            <Input
              label="TDUPRE"
              iconName="information-circle"
              placeholder="Tiempo de Duplic"
              onChangeText={(value: string)=>{handleOnChange('tdupre',value)}}
            />
            
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>
                ECTOR
              </Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataECOTR}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={ecotr}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setEcotr(item.value);
                  handleOnChange('ecotr', item.value)
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          {/* BIOPSIA PROSTÁTICAS */}
          <View style= {styles.row}>
            <Input
              label="NBIOPSIA"
              iconName="information-circle"
              placeholder="Nº Biopsias previas"
              onChangeText={(value: string)=>{handleOnChange('nbiopsia',value)}}
            />
            
            <View style={styles.container}>
              <Text style={styles.label}>
                HISTO
              </Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataHISTO}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={histo}
                onChange={item => {
                  setHisto(item.value);
                  handleOnChange('histo',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>GLEASON1</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataGLEASON1}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={gleason1}
                onChange={item => {
                  setGleason1(item.value);
                  handleOnChange('gleason1',item.value)
                }}
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.label}>NCILPOS</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataNCILPOS}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={nclipos}
                onChange={item => {
                  setNclipos(item.value);
                  handleOnChange('nclipos',item.value)
                }}
              />
            </View>
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>BILAT</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataBILAT}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={bilat}
                onChange={item => {
                  setBilat(item.value);
                  handleOnChange('bilat',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
            <Input
              label="PORCENT"
              iconName="information-circle"
              placeholder="Nº Biopsias previas"
              onChangeText= {(value: string) => handleOnChange('porcent', value)}
            />
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>
                IPERIN
              </Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataIPERIN}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={iperin}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setIperin(item.value);
                  handleOnChange('iperin',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.label}>
                ILINF
              </Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataILINF}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={ilinf}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setILINF(item.value);
                  handleOnChange('ilinf',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>
                IVASCU
              </Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataIVASCU}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={ivascu}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setIvascu(item.value);
                  handleOnChange('ivascu',item.value)
                  setIsFocus(false);
                }}
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.label}>
                TNM1
              </Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataTNM1}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={tnm1}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setTnm1(item.value);
                  handleOnChange('tnm1',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          {/* TRAS PROSTATECTOMÍA */}
          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>
                HISTO2
              </Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataHISTO2}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={histo2}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setHisto2(item.value);
                  handleOnChange('histo2',item.value)
                  setIsFocus(false);
                }}
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.label}>
                GLEASON2
              </Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataGLEASON2}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={gleason2}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setGleason2(item.value);
                  handleOnChange('gleason2',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>
                BILAT2
              </Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataBILAT2}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={bilat2}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setBilat2(item.value);
                  handleOnChange('bilat2',item.value)
                  setIsFocus(false);
                }}
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.label}>
                LOCALIZ
              </Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataLOCALIZ}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={localiz}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setLocaliz(item.value);
                  handleOnChange('localiz',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>MULTIFOC</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataMULTIFOC}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={multifoc}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setMultifoc(item.value);
                  handleOnChange('multifoc',item.value)
                }}
              />
            </View>

            <Input
              label="VOLUMEN"
              iconName="information-circle"
              placeholder="Volumen tumoral"
              onChangeText= {(value: string) => handleOnChange('volumen', value)}

            />
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>EXTRACAP</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataEXTRACAP}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={extracap}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setExtracap(item.value);
                  handleOnChange('extracap',item.value)
                  setIsFocus(false);
                }}
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.label}>
                VVSS
              </Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataVVSS}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={vvss}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setVvss(item.value);
                  handleOnChange('vvss',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>IPERIN2</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataIPERIN2}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={iperin2}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setIperin2(item.value);
                  handleOnChange('iperin2',item.value)
                  setIsFocus(false);
                }}
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.label}>ILINF2</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataILINF2}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={ilinf2}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setILINF2(item.value);
                  handleOnChange('ilinf2',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>IVASCU2</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataIVASCU2}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={ivascu2}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setIvascu2(item.value);
                  handleOnChange('ivascu2',item.value)
                  setIsFocus(false);
                }}
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.label}>PINAG</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataPINAG}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={pinag}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setPinag(item.value);
                  handleOnChange('pinag',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>MARGEN</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataMARGEN}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={margen}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setMargen(item.value);
                  handleOnChange('margen',item.value)
                  setIsFocus(false);
                }}
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.label}>TNM2</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataTNM2}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={tnm2}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setTnm2(item.value);
                  handleOnChange('tnm2',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          {/* EVOLUTIVOS */}
          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>PSAPOS</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataPSAPOS}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={psapos}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setPsapos(item.value);
                  handleOnChange('psapos',item.value)
                  setIsFocus(false);
                }}
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.label}>RTPADYU</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataRTPADYU}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={rtpadyu}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setRtpadyu(item.value);
                  handleOnChange('rtpadyu',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>RTPMES</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataRTPMES}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={rtpmes}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setRtpmes(item.value);
                  handleOnChange('rtpmes',item.value)
                  setIsFocus(false);
                }}
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.label}>RBQ</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataRBQ}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={rbq}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setRbq(item.value);
                  handleOnChange('rbq',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>TRBQ</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataTRBQ}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={trbq}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setTrbq(item.value);
                  handleOnChange('trbq',item.value)
                  setIsFocus(false);
                }}
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.label}>TDUPLI</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataTDUPLI}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={tdupli}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setTdupli(item.value);
                  handleOnChange('tdupli',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>T1MTX</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataT1MTX}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={t1mtx}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setT1mtx(item.value);
                  handleOnChange('t1mtx',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
            <Input
              label="FECHAFIN"
              placeholder="Fecha última revisión"
              iconName="calendar-number"
              onChangeText= {(value: string) => handleOnChange('fechafin', value)}
              />
            
          </View>
          
          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>FALLEC</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataFALLEC}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={fallec}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setFallec(item.value);
                  handleOnChange('fallec',item.value)
                  setIsFocus(false);
                }}
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.label}>TSUPERV</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataTSUPERV}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={tsuperv}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setTsuperv(item.value);
                  // handleOnChange('etnia',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>TSEGUI</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataTSEGUI}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={tsegui}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setTsegui(item.value);
                  handleOnChange('tsegui',item.value)
                  setIsFocus(false);
                }}
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.label}>TSUPERV</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataTSUPERV}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={tsuperv}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setTsuperv(item.value);
                  handleOnChange('tsuperv',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          <View style= {styles.row}>
          <Input
              label="PSAFIN"
              placeholder="Último PSA en seguimiento"
              iconName="information-circle"
              onChangeText= {(value: string) => handleOnChange('psafin', value)}
            />

            <View style={styles.container}>
              <Text style={styles.label}>CAPRA-S</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataCAPRA_S}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={capra_s}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setCapra_s(item.value);
                  handleOnChange('capra_s',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          {/* MARCADORES */}
          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>RA1</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataRA1}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={ra1}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setRa1(item.value);
                  handleOnChange('ra1',item.value)
                  setIsFocus(false);
                }}
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.label}>RA2</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataRA2}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={ra2}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setRa2(item.value);
                  handleOnChange('ra2',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>PTEN</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataPTEN}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={pten}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setPten(item.value);
                  handleOnChange('pten',item.value)
                  setIsFocus(false);
                }}
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.label}>ERG</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataERG}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={erg}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setErg(item.value);
                  handleOnChange('erg',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>Ki67</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataKi67}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={ki67}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setKi67(item.value);
                  handleOnChange('ki67',item.value)
                  setIsFocus(false);
                }}
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.label}>SPINK1</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataSPINK1}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={spink1}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setspink1(item.value);
                  handleOnChange('spink1',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          <View style= {styles.row}>
            <View style={styles.container}>
              <Text style={styles.label}>C-myc</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={variables.dataC_myc}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Seleccionar'}
                value={c_myc}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setC_myc(item.value);
                  handleOnChange('c_myc',item.value)
                  setIsFocus(false);
                }}
              />
            </View>
          </View>
  
        </ScrollView>

        <View style={styles.rowButton}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=>{savePatient()}}
            style={[styles.button, styles.colorRegisterButton]}>
            <Text style={styles.textButton}>
              Registrar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={[styles.button, styles.colorCancelButton]}>
            <Text style={styles.textButton}>
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal:6
    // padding: 6,
  },
  
  selectedTextStyle: {
    fontSize: 16,
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

  label: {
    margin:5,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: COLORS.blue,
  },

  dropdown: {
    height: 50,
    borderColor: COLORS.blue,
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },

});
