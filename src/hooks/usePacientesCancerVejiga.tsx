import { useEffect, useState } from 'react';
import uroApi from '../api/uroApi';
import {Patient, BladderCancers} from '../interfaces/CancerVejiga';
import AsyncStorage from '@react-native-async-storage/async-storage';



export const usePacientesCancerVejiga = (patientID?: number) => {

  const [isLoading, setIsLoading] = useState(true);
  const [allPatients, setAllPatients] = useState<Patient[]>([]);

  useEffect(() => {
    getPatients();
  },[]);

 

  const getPatients = async () => {
    try {
      const { data } = await uroApi.get<Patient[]>('/bladdercancer/');
      await AsyncStorage.setItem('patients', JSON.stringify(data))

      setAllPatients(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  return {
    allPatients,
    isLoading,
    setAllPatients,
  };

};

