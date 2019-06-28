import { Data, Errors } from './model';
import { Dispatch } from 'redux';
import * as helper from 'common/helpers';

import * as User from 'domain/user';

export const asyncValidate: (
  v: Data,
  d: Dispatch,
) => Promise<void | Errors<Data>> = (values, dispatch) => {
  return helper
    .promisify<User.Model>(User.fetch.request, {
      criteria: { email: values.email },
    })(dispatch)
    .then((payload: User.Model | undefined) => {
      if (payload) {
        helper.throwObject({ email: 'That email is taken' });
      }
    });
};
