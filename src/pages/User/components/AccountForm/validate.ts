import { Data, Errors } from './model';

export const validate: (v: Data) => Errors<Data> = values => {
  const errors: Errors<Data> = {};
  if (values.image && values.image.size > 1e6) {
    errors.image = 'max image size is 1mb';
  }
  if (
    values.image &&
    !['image/jpeg', 'image/png', 'image/gif', 'image/bmp'].includes(
      values.image.type,
    )
  ) {
    errors.image = 'valid image type are: jpeg, png, gif, bmp';
  }
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
