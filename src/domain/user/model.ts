export interface Model extends Account, Profile, Contacts, Capabilities {
  /* account */
  /* profile */
  /* contacts */
  /* capabilities */
  /* system */
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
  // create/update
  PUSH_REQUEST = '@@user/PUSH_REQUEST',
  PUSH_SUCCESS = '@@user/PUSH_SUCCESS',
  PUSH_ERROR = '@@user/PUSH_ERROR',
  // get
  FETCH_REQUEST = '@@user/FETCH_REQUEST',
  FETCH_SUCCESS = '@@user/FETCH_SUCCESS',
  FETCH_ERROR = '@@user/FETCH_ERROR',
  // delete
  REMOVE_REQUEST = '@@user/REMOVE_REQUEST',
  REMOVE_SUCCESS = '@@user/REMOVE_SUCCESS',
  REMOVE_ERROR = '@@user/REMOVE_ERROR',
}

export interface State {
  readonly meta: {
    loading: boolean;
    // TODO: pganation
  };
  readonly data: Model[];
  readonly errors?: string;
}
