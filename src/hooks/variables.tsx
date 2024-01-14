import React, {useState} from 'react';


export const variables = {
  dataEtnia: [
    { label: 'Caucásico', value: 'Caucásico' },
    { label: 'Negro', value: 'Negro' },
    { label: 'Hispano', value: 'Hispano' },
    { label: 'Asiático', value: 'Asiático' },
  ],

  dataObeso: [
    { label: 'NC', value: 'NC' },
    { label: 'IMC < 25', value: 'IMC < 25' },
    { label: 'IMC 25-30', value: 'IMC 25-30' },
    { label: 'IMC > 30', value: 'IMC > 30' },
  ],

  dataHTA: [
    { label: 'Sí', value: 'Sí' },
    { label: 'No', value: 'No' },
  ],

  dataDM: [
    { label: 'Sí', value: 'Sí' },
    { label: 'No', value: 'No' },
  ],

  dataTabaco: [
    { label: 'NC', value: 'NC' },
    { label: 'No', value: 'No' },
    { label: 'Exfumador', value: 'Exfumador' },
    { label: '<10 cigarrillos/día', value: '<10 cigarrillos/día' },
    { label: '10-20 cigarrillos/día', value: '10-20 cigarrillos/día' },
    { label: '>20 cigarrillos/día', value: '>20 cigarrillos/día' },
  ],

  dataHereda: [
    { label: 'Sí', value: 'Sí' },
    { label: 'No', value: 'No' }
  ],

  dataTACTOR: [
    { label: 'Negativo', value: 'Negativo' },
    { label: 'Sospechoso', value: 'Sospechoso' },
    { label: 'Positivo', value: 'Positivo' }
  ],

  dataPSAPRE: [
    { label: '0-6 ng/ml', value: '0-6 ng/ml' },
    { label: '6,01-10 ng/ml', value: '6,01-10 ng/ml' },
    { label: '10,01-20 ng/ml', value: '10,01-20 ng/ml' },
    { label: '> 20 ng/ml', value: '> 20 ng/ml' },
  ],

  dataPSALT: [
    { label: 'PSAl', value: 'PSAl' },
    { label: 'PSAt', value: 'PSAt' },
  ],

  dataTDUPPRE: [
    { label: 'NC', value: '0' },
    { label: 'IMC < 25', value: '1' },
    { label: 'IMC 25-30', value: '2' },
    { label: 'IMC > 30', value: '3' },
  ],

  dataECOTR: [
    { label: 'Normal', value: '1' },
    { label: 'Sospechosa (nódulo)', value: '2' }
  ],

  dataHISTO: [
    { label: 'Adenocarcinoma', value: '1' },
    { label: 'Otro', value: '2' },
  ],

  dataHISTO2: [
    { label: 'Adenocarcinoma', value: '1' },
    { label: 'Otro', value: '2' },
  ],

  dataGLEASON1: [
    { label: '6', value: '1' },
    { label: '7 (3+4)', value: '2' },
    { label: '7 (4+3)', value: '3' },
    { label: '8-10', value: '4' },
    { label: 'Inclasificable', value: '5' },
  ],
  
  dataGLEASON2: [
    { label: '6', value: '1' },
    { label: '7 (3+4)', value: '2' },
    { label: '7 (4+3)', value: '3' },
    { label: '8-10', value: '4' },
    { label: '<6', value: '5' },
  ],

  dataNCILPOS: [
    { label: '< 25%', value: '1' },
    { label: '25-50%', value: '2' },
    { label: ': 50%', value: '3' },
  ],

  dataBILAT: [
    { label: 'SI', value: '1' },
    { label: 'NO', value: '2' }
  ],
  
  dataEXTRACAP: [
    { label: 'SI', value: '1' },
    { label: 'NO', value: '2' }
  ],

  dataVVSS: [
    { label: 'SI', value: '1' },
    { label: 'NO', value: '2' },
    { label: 'NC', value: '2' }
  ],

  dataBILAT2: [
    { label: 'SI', value: '1' },
    { label: 'NO', value: '2' }
  ],

  dataIPERIN: [
    { label: 'SI', value: '1' },
    { label: 'NO', value: '2' },
    { label: 'NC', value: '3' },
  ],
  
  dataIPERIN2: [
    { label: 'SI', value: '1' },
    { label: 'NO', value: '2' },
    { label: 'NC', value: '3' },
  ],
  
  dataILINF: [
    { label: 'SI', value: '1' },
    { label: 'NO', value: '2' },
    { label: 'NC', value: '3' },
  ],

  dataILINF2: [
    { label: 'SI', value: '1' },
    { label: 'NO', value: '2' },
    { label: 'NC', value: '3' },
  ],

  dataIVASCU: [
    { label: 'SI', value: '1' },
    { label: 'NO', value: '2' },
    { label: 'NC', value: '3' },
  ],

  dataIVASCU2: [
    { label: 'SI', value: '1' },
    { label: 'NO', value: '2' },
    { label: 'NC', value: '3' }
  ],

  dataPINAG: [
    { label: 'SI', value: '1' },
    { label: 'NO', value: '2' },
    { label: 'NC', value: '3' },
  ],

  dataMARGEN: [
    { label: 'SI', value: '1' },
    { label: 'NO', value: '2' },
    { label: 'NC', value: '3' },
  ],

  dataTNM1: [
    { label: 'cT2ab (unilateral)', value: '1' },
    { label: 'cT2c', value: '2' },
    { label: 'cT3', value: '3' },
  ],

  dataTNM2: [
    { label: 'pT2ab', value: '1' },
    { label: 'pT2c', value: '2' },
    { label: 'pT3', value: '3' },
    { label: 'pT4', value: '4' },
    { label: 'pN+', value: '5' },
  ],

  dataLOCALIZ: [
    { label: 'ZP', value: '1' },
    { label: 'ZT', value: '2' },
    { label: 'ZFMA', value: '3' },
    { label: 'Multiple', value: '4' }
  ],

  dataMULTIFOC: [
    { label: 'Si', value: '1' },
    { label: 'No', value: '2' }
  ],

  dataPSAPOS: [
    { label: '1', value: '1' },
    { label: '2', value: '2' }
  ],

  dataRTPADYU: [
    { label: 'Si', value: '1' },
    { label: 'No', value: '2' }
  ],

  dataRTPMES: [
    { label: '1 Mes', value: '1' },
    { label: '2 Meses', value: '2' },
    { label: '3 Meses', value: '3' },
    { label: '4 Meses', value: '4' },
    { label: '5 Meses', value: '5' },
    { label: '6 Meses', value: '6' }
  ],

  dataRBQ: [
    { label: 'Si (CASOS)', value: '1' },
    { label: 'No (CONTROLES).', value: '2' },
    { label: 'Persitencia PSA ', value: '3' }
  ],

  dataTRBQ: [
    { label: 'Bajo riesgo (: 18 meses)', value: '1' },
    { label: 'Alto riesgo (< 18 meses)', value: '2' }
  ],

  dataTDUPLI: [
    { label: 'Alto riesgo', value: '1' },
    { label: 'Bajo riesgo', value: '2' }
  ],

  dataT1MTX: [
    { label: '1 Mes', value: '1' },
    { label: '2 Meses', value: '2' },
    { label: '3 Meses', value: '3' },
    { label: '4 Meses', value: '4' },
    { label: '5 Meses', value: '5' },
    { label: '6 Meses', value: '6' }
  ],

  dataFALLEC: [
    { label: 'Si', value: '1' },
    { label: 'No', value: '2' }
  ],

  dataTSUPERV: [
    { label: '1 Mes', value: '1' },
    { label: '2 Meses', value: '2' },
    { label: '3 Meses', value: '3' },
    { label: '4 Meses', value: '4' },
    { label: '5 Meses', value: '5' },
    { label: '6 Meses', value: '6' }
  ],

  dataTSEGUI: [
    { label: '1 Mes', value: '1' },
    { label: '2 Meses', value: '2' },
    { label: '3 Meses', value: '3' },
    { label: '4 Meses', value: '4' },
    { label: '5 Meses', value: '5' },
    { label: '6 Meses', value: '6' }
  ],

  dataCAPRA_S: [
    { label: 'Alto riesgo', value: '1' },
    { label: 'Medio', value: '2' },
    { label: 'Bajo riesgo', value: '2' }
  ],

  dataRA1: [
    { label: 'Negativo', value: '1' },
    { label: 'Positivo', value: '2' }
  ],

  dataRA2: [
    { label: 'Negativo', value: '1' },
    { label: 'Positivo', value: '2' }
  ],

  dataPTEN: [
    { label: 'Positivo', value: '1' },
    { label: 'Pérdida parcial o completa', value: '2' }
  ],

  dataERG: [
    { label: 'Negativo', value: '1' },
    { label: 'Positivo', value: '2' }
  ],

  dataKi67: [
    { label: 'Negativo', value: '1' },
    { label: 'Positivo', value: '2' }
  ],

  dataSPINK1: [
    { label: 'Bajo', value: '1' },
    { label: 'Intermedio-alto', value: '2' }
  ],

  dataC_myc: [
    { label: 'Negativo', value: '1' },
    { label: 'Positivo', value: '2' }
  ],

  sexo: [
    { label: 'Varón', value: 'Varón' },
    { label: 'Mujer', value: 'Mujer' },
  ],

  expoprofesional: [
    { label: 'Sí', value: 'Sí' },
    { label: 'No', value: 'No' },
  ],

  pandemia: [
    { label: 'Sí', value: 'si' },
    { label: 'No', value: 'no' },
  ],

  clinica: [
    { label: 'Asintomático', value: 'Asintomático' },
    { label: 'Hematuria', value: 'Hematuria' },
    { label: 'Síndrome miccional', value: 'Síndrome miccional' },
  ],

  citologias: [
    { label: 'Negativa', value: 'Negativa' },
    { label: 'Atipias', value: 'Atipias' },
    { label: 'Sospechosa', value: 'Sospechosa' },
    { label: 'Positiva', value: 'Positiva' },
    { label: 'Carcinoma urotelial', value: 'Carcinoma uroteilial' },
  ],

  numtumores: [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '+5', value: '6' },
  ],

  tamtumoral: [
    { label: '< 2cm', value: '< 2cm' },
    { label: '2-5 cm', value: '2-5 cm' },
    { label: '> 5 cm ', value: '> 5cm' },
  ],

  aspectotumoral: [
    { label: 'Papilar', value: 'Papilar' },
    { label: 'Mixto', value: 'Mixto' },
    { label: 'Solido', value: 'Sólido' },
  ],
  
  estado: [
    { label: 'Ta', value: 'Ta' },
    { label: 'T1', value: 'T1' },
    { label: 'T2', value: 'T2' },
    { label: 'T3', value: 'T3' },
    { label: 'T4', value: 'T4' },
  ],
  
  carcinomainsitu: [
    { label: 'Sí', value: 'Sí' },
    { label: 'No', value: 'No' },
  ],
  
  grado: [
    { label: 'G1', value: 'G1' },
    { label: 'G2', value: 'G2' },
    { label: 'G3', value: 'G3' },
  ],
  
  permeacion: [
    { label: 'Sí', value: 'Sí' },
    { label: 'No', value: 'No' }
  ],
  
  carcinomauro: [
    { label: 'Sí', value: 'Sí' },
    { label: 'No', value: 'No' }
  ],

  formasapiticas: [
    { label: 'Sí', value: 'Sí' },
    { label: 'No', value: 'No' },
  ],

  primario: [
    { label: 'Sí', value: 'Sí' },
    { label: 'No', value: 'No' },
  ],

  recidivante: [
    { label: 'Sí', value: 'Sí' },
    { label: 'No', value: 'No' },
  ],

  instilacion: [
    { label: 'No', value: 'No' },
    { label: 'Sí, inmediata MMC', value: 'Sí, inmediata MMC' },
    { label: 'Sí, inmediata y diferida con MMC', value: 'Sí, inmediata y diferida con MMC' },
    { label: 'Sí, diferida: BGC, MMC', value: 'Sí, diferida: BGC, MMC' },
  ],

  tac: [
    { label: 'No infiltrante', value: 'No infiltrante' },
    { label: 'Dudoso', value: 'Dudoso' },
    { label: 'Infiltrante', value: 'Infiltrante' },
  ],

  rtu: [
    { label: 'No', value: 'No' },
    { label: 'Sí, no infiltrante', value: 'Sí, no infiltrante' },
    { label: 'Sí, dudoso', value: 'Sí, dudoso' },
    { label: 'Sí, infiltrante', value: 'Sí, infiltrante' },
  ],

  frecuenciaDeReentrenamiento: [
    {label: '100', value:'100'},
    {label: '200', value:'200'},
    {label: '300', value:'300'},
    {label: '400', value:'400'},
    {label: '500', value:'500'}
  ],
  modelodDePrediccion: [
    {label: 'KNN', value:'0'},
    {label: 'Random Forest', value:'1'},
    {label: 'Naive Byes', value:'2'}
  ],
}


