import Dexie from 'dexie';
import { User, AbandonUser } from './entities';

type GetCtx = { [P in 'get']: (this: GetCtx, ...args: any[]) => any };
type ClearCtx = { [P in 'clear']: (this: GetCtx, ...args: any[]) => any };
type PutCtx = { [P in 'put']: (this: GetCtx, ...args: any[]) => any };

export type UserTable = Dexie.Table<User, number> & GetCtx & ClearCtx & PutCtx;
export type AbandonUserTable = Dexie.Table<AbandonUser, number> &
  GetCtx &
  ClearCtx &
  PutCtx;

class Database extends Dexie {
  public users: UserTable;
  public abandonUsers: AbandonUserTable;

  public constructor(databaseName: string) {
    super(databaseName);
    this.version(1).stores({
      users:
        '++id,&username,password,firstName,lastName,birthDate,&email,address,company,fax,facebook,github,phones,mainLanguage,skills,hobies,additionalInfo,updateAt,locks',
      abandonUser: '++',
    });
    this.users = this.table('users');
    this.abandonUsers = this.table('abandonUser');
  }
}

const db = new Database('wizard-form-react'); // TODO: transfer to configs

export default db;
