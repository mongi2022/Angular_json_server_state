
export enum Datastate {
  LOADED,
  LOADING,
  ERROR
}

export interface AppDataState<T>{
  dataState?:Datastate;
  data?: T,
  errorMessage?:string
}