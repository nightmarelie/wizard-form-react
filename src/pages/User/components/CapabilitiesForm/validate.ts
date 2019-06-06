import { Data, Errors } from './model';

export const validate: (v: Data) => Errors<Data> = values => {
  const errors: Errors<Data> = {};

  if (values.additionalInfo && values.additionalInfo.length >= 300) {
    errors.additionalInfo =
      'additional information should be less than 300 characters';
  }

  if (values.skills && values.skills.length < 3) {
    errors.skills = 'min ammount of skills at least 3 items';
  }

  return errors;
};
