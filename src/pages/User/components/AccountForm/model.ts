import { Account } from 'domain/user';

export interface Data extends Account {
  _type: string;
  repeatPassword: string;
}

export type Errors<T extends Data> = { [P in keyof T]?: string };
