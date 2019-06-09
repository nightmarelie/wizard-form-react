export interface Model extends Account, Profile, Contacts, Capabilities {
  id: number;
  /* account */
  /* profile */
  /* contacts */
  /* capabilities */
  /* system */
  locks: Locks;
  updateAt: Date;
  createdAt: Date;
}

interface Dictionary {
  label: string;
  value: string;
}

export interface Locks {
  account: boolean;
  profile: boolean;
  contacts: boolean;
  capabilities: boolean;
}

export interface Account {
  username: string;
  password: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  address: string;
  gender: string;
}

export interface Contacts {
  company: string;
  fax: string;
  facebook: string;
  github: string;
  phones: string[];
  mainLanguage: Dictionary;
}

export interface Capabilities {
  skills: Dictionary[];
  hobbies: { [key: string]: boolean };
  additionalInfo: string;
}

export enum Action {
  // create
  CREATE_REQUEST = '@@user/CREATE_REQUEST',
  CREATE_SUCCESS = '@@user/CREATE_SUCCESS',
  CREATE_ERROR = '@@user/CREATE_ERROR',
  // edit
  UPDATE_REQUEST = '@@user/UPDATE_REQUEST',
  UPDATE_SUCCESS = '@@user/UPDATE_SUCCESS',
  UPDATE_ERROR = '@@user/UPDATE_ERROR',
  // get one
  FETCH_REQUEST = '@@user/FETCH_REQUEST',
  FETCH_SUCCESS = '@@user/FETCH_SUCCESS',
  FETCH_ERROR = '@@user/FETCH_ERROR',
  // get all
  FETCH_ALL_REQUEST = '@@user/FETCH_ALL_REQUEST',
  FETCH_ALL_SUCCESS = '@@user/FETCH_ALL_SUCCESS',
  FETCH_ALL_ERROR = '@@user/FETCH_ALL_ERROR',
  // delete
  REMOVE_REQUEST = '@@user/REMOVE_REQUEST',
  REMOVE_SUCCESS = '@@user/REMOVE_SUCCESS',
  REMOVE_ERROR = '@@user/REMOVE_ERROR',
  // Initialize Form State
  INITIALIZE_DATA = '@@user/INITIALIZE_DATA',
}

export interface State {
  readonly initDate: Model;
  readonly data?: Model | Model[];
  readonly meta: {
    loading: boolean;
  };
  readonly errors?: string;
}

export interface UpdatePayload {
  readonly id: number;
  readonly data: Model;
}
