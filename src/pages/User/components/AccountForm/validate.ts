import { Data, Errors } from './model';

export const validate: (v: Data) => Errors<Data> = values => {
  const errors: Errors<Data> = {};
  if (!values.username) {
    errors.username = 'username is required';
  }
  if (!values.password) {
    errors.password = 'password is required';
  }
  if (values.password && values.password.length < 6) {
    errors.password = 'min length of password at least 6 characters';
  }
  if (!values.repeatPassword) {
    errors.repeatPassword = 'repeat password is required';
  }
  if (values.password !== values.repeatPassword) {
    errors.repeatPassword = "passwords don't match";
  }

  return errors;
};
