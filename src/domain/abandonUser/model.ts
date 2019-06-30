import { Model as BaseModel } from '../user/model';

export type Model = Partial<BaseModel>;

export enum Action {
  // create/update
  PUSH_REQUEST = '@@abandonUser/PUSH_REQUEST',
  PUSH_SUCCESS = '@@abandonUser/PUSH_SUCCESS',
  PUSH_ERROR = '@@abandonUser/PUSH_ERROR',
  // get
  FETCH_REQUEST = '@@abandonUser/FETCH_REQUEST',
  FETCH_SUCCESS = '@@abandonUser/FETCH_SUCCESS',
  FETCH_ERROR = '@@abandonUser/FETCH_ERROR',
  // delete
  REMOVE_REQUEST = '@@abandonUser/REMOVE_REQUEST',
  REMOVE_SUCCESS = '@@abandonUser/REMOVE_SUCCESS',
  REMOVE_ERROR = '@@abandonUser/REMOVE_ERROR',
  // Initialize Form State
  INITIALIZE_DATA = '@@abandonUser/INITIALIZE_DATA',
}

export interface State {
  readonly initData: Model;
  readonly data?: Model;
  readonly meta: {
    loading: boolean;
  };
  readonly errors?: string;
}
