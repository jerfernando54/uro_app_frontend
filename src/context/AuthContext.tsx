import React, { createContext, useEffect, useReducer} from "react";
import uroApi from "../api/uroApi";
import { AuthState, authReducer } from './authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginResponse, AuthData } from '../interfaces/LoginResponse';
import { History, Patient } from "../interfaces/CancerVejiga";
import { User } from "../interfaces/User";

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: (userData: User) => void;
  signIn: (authData: AuthData) => void;
  logOut: () => void;
  registerPatient: (patientData: Patient) => void;
  registerHistory: (history: any) => void;
  removeError:() => void;
}
const authInitialState: AuthState = {
  status: "checking",
  token: null,
  errorMessage: ''
}
export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState)
  
  useEffect(() => {
    checkToken()
  }, [])
  
  const checkToken = async() => {
    const token = await AsyncStorage.getItem('token')
    if ( !token ) return dispatch({type: "notAuthenticated"})
    const {status} = await uroApi.get('/auth/user');  
    if ( status === 200 ) {
      dispatch({
        type: "signIn",
        payload: {
          token: token
        }
      })
    }else {
      return dispatch({type: "notAuthenticated"})
    }

  }

  const signIn = async ({email, password}: AuthData) => {
    try {
      const {data} = await uroApi.post<LoginResponse>('/auth/login',{email, password})
      dispatch({
        type: "signIn",
        payload: {
          token: data.access
        }
      })

      await AsyncStorage.setItem('token', data.access)

    } catch (error:any) {
      dispatch({
        type: "addError",
        payload: error.response.data || 'Connection server fail'
      })
    }
  };

  const signUp = async (userData: User) => {
    try {
      const {status} = await uroApi.post('/auth/register/', userData)
      dispatch({
        type: "signUp",
        payload: status.toString()
      })

    } catch (error:any) {
      dispatch({
        type: "addError",
        payload: error.response.data || 'Connection server fail'
      })
    }
  };

  const logOut = async () => {
    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('userAuthRole')
    dispatch({type: 'logout'})
  };
  
  const removeError = () => {
    dispatch({type:'removeError'})
  };

  const registerPatient = async (patientData: Patient) =>{
    try {
      const {status} = await uroApi.post<Patient>('/bladdercancer/', patientData)
      dispatch({
        type: "registerPatient",
        payload: status.toString()
      })
      
    } catch (error:any) {
      dispatch({
        type: "registerPatient",
        payload: error.response.data || 'Connection server fail'
      })
    }
  }

  const registerHistory = async (history: History) => {
    try {
      const {status} = await uroApi.post<History>('/histories/', history)
      dispatch({
        type: "registerHistory",
        payload: status.toString()
      })
    }catch(error:any){
      console.error('erro: ', error.response.data)
      dispatch({
        type: "registerHistory",
        payload: error.response.data || 'Internal error'
      })
    }
  }

  return (
    <AuthContext.Provider value={{
      ...state,
      signIn,
      signUp,
      logOut,
      removeError,
      registerPatient,
      registerHistory,
    }}>
      {children}
    </AuthContext.Provider>
  )
}