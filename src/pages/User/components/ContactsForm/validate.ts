import { Data, Errors } from './model';

export const validate: (v: Data) => Errors<Data> = values => {
  const errors: Errors<Data> = {};
  if (!values.fax) {
    errors.fax = 'fax is required';
  }
  if (!values.facebook) {
    errors.facebook = 'facebook is required';
  } else if (!/^(http|https):\/\/www.facebook.com\/.*/i.test(values.facebook)) {
    errors.facebook = 'this is not a facebook url';
  }
  if (!values.github) {
    errors.github = 'github link is required';
  } else if (!/^(http|https):\/\/github.com\/.*/i.test(values.github)) {
    errors.github = 'this is not a github url';
  }

  return errors;
};
