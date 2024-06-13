interface Ienv {
  userDataBaseApiCreateUserUrl: string;
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    env: Ienv;
  }
}
export {};
