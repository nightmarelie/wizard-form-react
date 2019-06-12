import { Data, Errors } from './model';
import { Dispatch } from 'redux';
import * as helper from 'common/helpers';

import * as User from 'domain/user';

export const asyncValidate: (
  v: Data,
  d: Dispatch,
  p: { initialValues?: { id?: number } },
) => Promise<void | Errors<Data>> = (values, dispatch, props) => {
  const { initialValues: { id } = { id: 0 } } = props;
  return helper
    .promisify<User.Model>(User.fetch.request, {
      criteria: { username: values.username },
    })(dispatch)
    .then((payload: User.Model | undefined) => {
      if (payload && payload.id !== id) {
        helper.throwObject({ username: 'That username is taken' });
      }
    });
};
