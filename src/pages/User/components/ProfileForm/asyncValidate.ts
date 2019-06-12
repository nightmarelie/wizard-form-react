import { Data, Errors } from './model';
import { Dispatch } from 'redux';
import * as helper from 'common/helpers';

export const asyncValidate: (
  v: Data,
  d: Dispatch,
) => Promise<void | Errors<Data>> = (values, dispatch) => {
  return helper.sleep(1000).then(() => {
    if (['test@email.com'].includes(values.email)) {
      throw { email: 'That email is taken' };
    }
  });
};
