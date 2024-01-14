import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const baseURL = 'http://192.168.1.201:8000/api';
// const baseURL = 'http://192.1.4.167:8000/api';
// const baseURL = 'http://192.1.4.221:8000/api/'

const uroApi = axios.create({ baseURL })

uroApi.interceptors.request.use(
  async(config) => {
    const token = await AsyncStorage.getItem('token')
    const his = await AsyncStorage.getItem('hisID')
    if ( token ) {
      config.headers.Authorization = 'Bearer ' + token
    }

    if (his !== null) {
      config.params = {
        ...config.params,
        queryParams:{hisID:his}
      }
    }
    return config
  }
)

export default uroApi;