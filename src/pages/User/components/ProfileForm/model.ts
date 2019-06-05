import { Profile } from 'domain/user';

export interface Data extends Profile {
  _type: string;
}

export type Errors<T extends Data> = { [P in keyof T]?: string };
