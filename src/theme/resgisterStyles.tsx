import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/constants';

export const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  },

  input: {
    height: 35,
  },

  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius:6,
    marginHorizontal: 6,
    borderColor: COLORS.blue,
    alignItems: 'center',
  },

  label: {
    margin:5,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: COLORS.blue,
  },

  button: {
    flex:1,
    margin:12,
    padding: 3,
    borderRadius:6,
    alignItems: 'center',
  },

  ButtonLabel : {
    fontSize: 16,
    padding:7,
    fontWeight: 'bold',
    color: COLORS.white,
  },

  defaultBackgroundColor: {
    backgroundColor: COLORS.blue,
  },

  colorRegisterButton: {
    backgroundColor: COLORS.blue,
  },

  cancelBackgroundColor: {
    backgroundColor: COLORS.cancelButton,
  },
});


