import { Data, Errors } from './model';

export const validate: (v: Data) => Errors<Data> = values => {
  const errors: Errors<Data> = {};
  if (!values.firstName) {
    errors.firstName = 'first name is required';
  }
  if (!values.lastName) {
    errors.lastName = 'last name is required';
  }
  if (!values.email) {
    errors.email = 'email is required';
  }
  if (!values.address) {
    errors.address = 'address is required';
  }
  if (!values.birthDate) {
    errors.birthDate = 'birth date is required';
  }

  return errors;
};
