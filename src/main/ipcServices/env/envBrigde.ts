import dotenv from 'dotenv';
import { contextBridge } from 'electron';
dotenv.config();

const envChannels = {
  API_BASE_URL: 'env_API_BASE_URL',
};

const envPreload = {
  userDataBaseApiBaseUrl: process.env.USER_DATABASE_API_BASE_URL,
  userDataBaseApiCreateUserUrl: process.env.USER_DATABASE_API_CREATE_USER_URL,
};

contextBridge.exposeInMainWorld('env', envPreload);
