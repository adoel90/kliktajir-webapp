import axios from 'axios';

const credentials = localStorage.getItem('token');

const axiosConfig = axios.create({  
  // baseURL: 'http://averoa.com:8800',
  // baseURL: 'http://103.31.251.235/~kliktajir/api'
  baseURL: 'https://www.kliktajir.com/~kliktajir/api'
  
});

axiosConfig.defaults.headers.common['Content-Type'] = 'application/json';
axiosConfig.defaults.headers.common['app_token'] = '12345';

if (credentials !== null && credentials !== undefined && credentials !== '') {  
  
  axiosConfig.defaults.headers.common['token'] = credentials;  
}

export default axiosConfig;
