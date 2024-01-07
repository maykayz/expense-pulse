import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.URL + '/api',
    timeout: 15000,
    headers: {'X-Custom-Header': 'foobar'}
})

export default axiosInstance;