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
  mainLanguage: string;
}

export interface Capabilities {
  skills: string[];
  hobies: string[];
  additionalInfo: string;
}

export enum Action {
  // create
  CREATE_REQUEST = '@@user/CREATE_REQUEST',
  CREATE_SUCCESS = '@@user/CREATE_SUCCESS',
  CREATE_ERROR = '@@user/CREATE_ERROR',
  // edit
  EDIT_REQUEST = '@@user/EDIT_REQUEST',
  EDIT_SUCCESS = '@@user/EDIT_SUCCESS',
  EDIT_ERROR = '@@user/EDIT_ERROR',
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

export interface EditPayload {
  readonly id: number;
  readonly data: Model;
}
