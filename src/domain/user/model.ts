export interface User {
  /* account */
  username: string;
  password: string;
  /* personal */
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  address: string;
  /* contacts */
  company: string;
  fax: string;
  facebook: string;
  github: string;
  phones: string[];
  mainLanguage: string;
  /* capabilities */
  skills: string[];
  hobies: string[];
  additionalInfo: string;
  /* system */
  id: number;
  updateAt: Date;
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
  readonly data: User[];
  readonly errors?: string;
}
