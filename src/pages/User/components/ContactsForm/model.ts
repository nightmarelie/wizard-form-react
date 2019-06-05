import { Contacts } from 'domain/user';

export interface Data extends Contacts {
  _type: string;
}

export type Errors<T extends Data> = { [P in keyof T]?: string };
