import { Capabilities } from 'domain/user';

export interface Data extends Capabilities {
  _type: string;
}

export type Errors<T extends Capabilities> = { [P in keyof T]?: string };
