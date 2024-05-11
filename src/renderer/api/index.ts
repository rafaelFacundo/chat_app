import axios, { AxiosInstance } from 'axios';

console.log(window.env);

const usersDataBaseApi: AxiosInstance = axios.create({
  baseURL: 'window.env.userDataBaseApiBaseUrl',
  timeout: 10000,
});

export default usersDataBaseApi;
