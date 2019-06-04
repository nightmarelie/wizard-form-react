export interface Data {
  username: string;
  password: string;
  repeatPassword: string;
}

export type Errors<T extends Data> = { [P in keyof T]?: string };
