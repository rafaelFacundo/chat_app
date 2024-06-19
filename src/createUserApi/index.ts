import axios, { AxiosInstance } from "axios";

const userDataBaseAPI: AxiosInstance = axios.create({
  baseURL: window.env.userDataBaseApiCreateUserUrl,
  timeout: 100000,
});

export default userDataBaseAPI;
