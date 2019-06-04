import { Data, Errors } from './model';

export const validate: (v: Data) => Errors<Data> = values => {
  const errors: Errors<Data> = {};
  if (!values.fax) {
    errors.fax = 'fax is required';
  }
  if (!values.facebook) {
    errors.facebook = 'facebook is required';
  }
  if (!values.github) {
    errors.github = 'github link is required';
  }

  return errors;
};
