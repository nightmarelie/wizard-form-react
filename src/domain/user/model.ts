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
  image: File;
  imageUrl?: string;
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
  readonly initData: Model;
  readonly data?: Model | Model[];
  readonly meta: Metadata;
  readonly errors?: string;
}

export interface UpdatePayload {
  readonly id: number;
  readonly data: Model;
}

export interface FetchPayload {
  readonly criteria: number | { [key: string]: string };
  readonly resolve?: (value: Model | PromiseLike<Model>) => Promise<Model>;
  readonly reject?: (reason?: any) => Promise<Model>;
}

export interface RemovePayload {
  readonly id: number;
  readonly meta: Metadata;
}

export interface Metadata {
  loading: boolean;
  searchValue?: string;
  pagination: {
    perPage: number;
    offset: number;
    pageCount: number;
    total: number;
  };
}

export class DefaultMetadata {
  public loading = true;
  public pagination = {
    perPage: 12,
    offset: 0,
    pageCount: 0,
    total: 0,
  };
}

export interface DataWithMeta {
  data: Model[];
  meta: Metadata;
}
