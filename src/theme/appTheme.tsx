import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/constants';


export const styles = StyleSheet.create({
  globalMargin: {
      marginHorizontal: 20,
  },
  title: {
      fontSize: 30,
      marginBottom: 10,
  },
  label: {
    margin:5,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: COLORS.blue,
  },
  botonGrande: {
      width: 100,
      height: 100,
      backgroundColor: 'red',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
  },
  botonGrandeTexto: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
  },
  avatarContainer: {
      alignItems: 'center',
      marginTop: 20,
  },
  avatar: {
      width: 150,
      height: 150,
      borderRadius: 100,
  },
  menuContainer: {
      marginVertical: 30,
      marginHorizontal: 50,
  },
  menuBoton: {
      marginVertical: 10,
  },
  menuTexto: {
      fontSize: 20,
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

  card: {
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 12,
    padding: 30,
  },

  negativo: {
    color: 'green',
  },

  container: {
    flex: 1,
    margin:4,
    padding: 5,
  },
  dropdown: {
    height: 50,
    borderColor: COLORS.blue,
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },

  selectedTextStyle: {
    fontSize: 16,
  },

  box_resultado: {
    margin: 5,
    padding: 20,
    borderRadius: 1,
    justifyContent: 'center',
    shadowColor: COLORS.mainColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },

  text_resultado: {
    fontSize: 18,
    fontWeight:'bold',
    color: COLORS.mainColor
  },

  process_text: {
    top: 15,
    alignContent:'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.getting_predictions
  }

  
});