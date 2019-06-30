import * as faker from 'faker';
import { plainToClassFromExist } from 'class-transformer';
import db from '../index';
import { User as BaseUser } from '../entities/user.entity';
import { genders, languages, hobbies } from 'common/dictionaries';
import moment from 'moment';

const length = 30;

class User implements BaseUser {
  public id: number = 0;
  public locks = {
    account: false,
    profile: false,
    contacts: false,
    capabilities: false,
  };
  public updateAt: Date = new Date();
  public createdAt: Date = new Date();
  public username: string = '';
  public password: string = '****';
  public firstName: string = '';
  public lastName: string = '';
  public birthDate: Date = new Date();
  public email: string = '';
  public address: string = '';
  public gender: string = '';
  public company: string = '';
  public fax: string = '';
  public facebook: string = '';
  public github: string = '';
  public phones: string[] = [];
  public additionalInfo: string = '';
  public image: File = null as any;
  public mainLanguage = null as any;
  public skills = [] as any;
  public hobbies = null as any;
}

async function createFile(imageUrl: string): Promise<File> {
  let response = await fetch(imageUrl);
  let data = await response.blob();

  return new File([data], 'test.jpg', {
    type: 'image/jpeg',
  });
}

export async function generate(): Promise<void> {
  const users = await Promise.all(
    Array.from(Array(length).keys())
      .map((i: number) =>
        plainToClassFromExist(new User(), {
          id: ++i,
          username: faker.internet.userName(),
          firstName: faker.name.findName(),
          lastName: faker.name.lastName(),
          birthDate: moment(faker.date.past(18)).format('MM/DD/YYYY'),
          email: faker.internet.email(),
          address: faker.address.streetAddress(),
          gender: faker.random.arrayElement(genders).value,
          company: faker.company.companyName(),
          fax: faker.phone.phoneNumber('1#########'),
          facebook: `https://www.facebook.com/${i}`,
          github: `https://github.com/${i}`,
          phones: [faker.phone.phoneNumber('1#########')],
          mainLanguage: faker.random.arrayElement(languages),
          additionalInfo: faker.lorem.word,
          hobbies: { [faker.random.arrayElement(hobbies).value]: true },
        }),
      )
      .map(async u => {
        u.image = await createFile(faker.image.avatar());
        return u;
      }),
  );

  await db.users.clear();
  await db.users.bulkAdd(users);
}
