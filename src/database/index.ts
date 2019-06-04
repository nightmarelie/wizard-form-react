import Dexie from 'dexie';

import { User } from './entities';

class Database extends Dexie {
  public users: Dexie.Table<User, number>;

  public constructor(databaseName: string) {
    super(databaseName);
    this.version(1).stores({
      users:
        '++id,&username,password,firstName,lastName,birthDate,&email,address,company,fax,facebook,github,phones,mainLanguage,skills,hobies,additionalInfo,updateAt',
    });
    this.users = this.table('users');
  }
}

const db = new Database('wizard-form-react');

export default db;
