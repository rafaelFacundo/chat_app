import { ipcMain, ipcRenderer } from "electron";
import { USER_DATABASE_API_BASE_URL } from "../../index";

export const envApiKey = "env";

export const env_channels = {
  userDataBaseApiCreateUserUrl: "env_userDataBaseApiCreateUserUrl",
};

export const envBridge = {
  userDataBaseApiCreateUserUrl: process.env.teste,
};
