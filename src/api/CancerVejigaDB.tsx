import axios from 'axios';

const cancerVejigaDB = axios.create({
  baseURL: ' http://192.168.1.201:8000/api',
  // baseURL: 'http://10.0.2.2:8000/api',
  headers: {
    Accept: 'application/json',
  },
});

export default cancerVejigaDB;
