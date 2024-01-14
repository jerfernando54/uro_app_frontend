export const COLORS = {
  white: '#fff',
  blue: '#1B4F72',
  darkBlue: '#7978b5',
  light: '#F3F4FB',
  grey: '#BABBC3',
  mainColor: '#2E86C1', //AZUL
  textColor: '#FFFFFF',
  background: 'aliceblue',
  cancelButton: '#922B21',
  getting_predictions: '#848482'
};

export const VariablesNames = [
  {
    title: 'FILIACIÓN',
    data: ['nhis', 'fechacir'],
  },
  {
    title: 'SOCIODEMOGRÁFICAS',
    data: ['edad', 'etnia'],
  },
  {
    title: 'ANTECEDENTES',
    data: ['obeso', 'hta', 'dm', 'tabaco', 'hereda'],
  },
  {
    title: 'CLÍNICO-PATOLÓGICAS',
    data: ['tactor', 'psapre', 'psalt', 'tduppre', 'ector'],
  },
]

export const EXITUS = {
  0 : 'No',
  1 : 'Sí',
}
export const RECIDIVA = {
  0 : 'No',
  1 : 'Menores características',
  2 : 'Iguales características',
  3 : 'Mayores características',
}
export const PROGRESIVA = {
  0 : 'No',
  1 : 'Estadio (T)',
  2 : 'Ganglios (N)',
  3 : 'Metástasis (M)',
}
export const EVOLDESFAVORABLE = {
  0 : 'No',
  1 : 'Sí',
}

