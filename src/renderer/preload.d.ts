import { ElectronHandler } from '../main/preload';

interface IEnv {
  userDataBaseApiBaseUrl: string;
  userDataBaseApiCreateUserUrl: string;
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    env: IEnv;
  }
}

export {};
