import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import history from './history';
import { getAuthData } from './storage';

export const BASE_URL=process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'myclientid';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'myclientsecret';

const basicheader  = ()  =>  'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET);

type LoginData = {
    username: string;
    password: string;
}

export const requestBackendLogin = ( loginData: LoginData ) =>{
    const headers ={
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: basicheader()
    }
    const data = qs.stringify({
        ...loginData,
        grant_type: 'password'
    })
    return axios( { method: 'POST', baseURL: BASE_URL, url: '/oauth/token' , data, headers });
}
export const requestBackend = ( config: AxiosRequestConfig) =>{
    const headers = config.withCredentials ? {
            ...config.headers,
            Authorization: "Bearer " + getAuthData().access_token
    } : config.headers;
    return axios( {...config, baseURL: BASE_URL, headers});
}

//// intercepstors  : https://github.com/axios/axios#interceptors
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log( 'interceptors antes da requisição');
    return config;
  }, function (error) {
    // Do something with request error
    console.log( 'ERROR !!!! interceptors antes da requisição');
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log( 'interceptors COM SUCESSO.');

    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log( 'interceptors COM FALHA!!!');
    if( error.response.status === 401 ){
        console.log( error.response.status);
        history.push('/admin/auth/login');
    }
    return Promise.reject(error);
  });
  
