export interface User {
  id: number;
  updateAt: Date;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  address: string;
  company: string;
  fax: string;
  facebook: string;
  github: string;
  phones: string[];
  mainLanguage: string;
  skills: string[];
  hobies: string[];
  additionalInfo: string;
}
