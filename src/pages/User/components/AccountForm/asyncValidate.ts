import { Data, Errors } from './model';
import { Dispatch } from 'redux';
import * as helper from 'common/helpers';

export const asyncValidate: (
  v: Data,
  d: Dispatch,
) => Promise<void | Errors<Data>> = (values, dispatch) => {
  return helper.sleep(1000).then(() => {
    if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
      throw { username: 'That username is taken' };
    }
  });
};
