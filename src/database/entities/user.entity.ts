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
  phone1: string;
  phone2: string;
  skills: string[];
  hobies: string[];
}
