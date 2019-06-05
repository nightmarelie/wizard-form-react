import { Model } from 'domain/user';

export interface User extends Model {
  id: number;
  updateAt: Date;
}
