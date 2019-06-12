import { ConfigProps } from 'redux-form';

//forms
import * as account from '../AccountForm';
import * as profile from '../ProfileForm';
import * as contacts from '../ContactsForm';
import * as capabilities from '../CapabilitiesForm';
import { Forms } from 'common/routes';

export const order = [
  Forms.account,
  Forms.profile,
  Forms.contacts,
  Forms.capabilities,
];

export interface Form<D = {}, P = {}> {
  key: Forms;
  component: React.Component | React.FC | any;
  config: Partial<ConfigProps<D, P, string>>;
}

export interface Navigation {
  nextForm: Function;
  prevForm?: Function;
}

export const forms: Form[] = [
  {
    key: Forms.account,
    component: account.Form,
    config: {
      validate: account.validate,
      asyncValidate: account.asyncValidate,
      asyncBlurFields: ['username'],
    },
  },
  {
    key: Forms.contacts,
    component: contacts.Form,
    config: {
      validate: contacts.validate,
    },
  },
  {
    key: Forms.capabilities,
    component: capabilities.Form,
    config: {
      validate: capabilities.validate,
    },
  },
  {
    key: Forms.profile,
    component: profile.Form,
    config: {
      validate: profile.validate,
      asyncValidate: profile.asyncValidate,
      asyncBlurFields: ['email'],
      initialValues: { gender: 'male' },
    },
  },
];
