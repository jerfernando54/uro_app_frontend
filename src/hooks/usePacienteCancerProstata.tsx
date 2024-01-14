import { useEffect, useState } from 'react';
import cancerProstataDB from '../api/CancerProstataDB';
import { CancerProstataPatients, Patient } from '../interfaces/CancerProstata';

export const usePacienteCancerProstata = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [allPatients, setAllPatients] = useState<Patient[]>([]);

  useEffect(() => {
    getPatients();
  },[]);

  const getPatients = async () => {
    const res = await cancerProstataDB.get<CancerProstataPatients>('/cancerprostata');
    setAllPatients(res.data.pacientes);
    setIsLoading(false);
  };

  return {
    allPatients,
    isLoading,
  };

};

