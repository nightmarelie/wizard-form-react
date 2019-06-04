export interface Data {
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  address: string;
}

export type Errors<T extends Data> = { [P in keyof T]?: string };
