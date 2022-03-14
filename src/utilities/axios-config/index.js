import axios from 'axios';

const credentials = localStorage.getItem('token');

const axiosConfig = axios.create({  
  baseURL: 'http://averoa.com:8800',
});

axiosConfig.defaults.headers.common['Content-Type'] = 'application/json';
axiosConfig.defaults.headers.common['app_token'] = '12345';

if (credentials !== null && credentials !== undefined && credentials !== '') {  
  axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${credentials}`;
}

export default axiosConfig;
