export interface Data {
  company: string;
  fax: string;
  facebook: string;
  github: string;
  phones: string[];
  mainLanguage: string;
}

export type Errors<T extends Data> = { [P in keyof T]?: string };
