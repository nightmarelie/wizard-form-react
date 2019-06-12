/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';

// components
import { Column } from 'components/Wrapper';
import * as Form from 'components/Form';
// common
import constants from 'common/constants/index.json';
import * as dictionaries from 'common/dictionaries';

import * as model from './model';
import * as User from 'domain/user';

export type OwnProps = {
  nextForm: (data: Partial<User.Model>, lock?: boolean) => void;
  prevForm: () => void;
} & Partial<InjectedFormProps> &
  Partial<DefaultProps>;

const defaultProps = {
  genders: dictionaries.genders,
};

type DefaultProps = Readonly<typeof defaultProps>;

type Props = OwnProps & InjectedFormProps<model.Data, OwnProps>;

const ProfileForm: React.FC<Props> = ({
  nextForm,
  prevForm,
  submitting,
  handleSubmit,
  genders,
}): React.ReactElement<Props> => {
  return (
    <Form.Wrapper onSubmit={handleSubmit(data => nextForm(data, false))}>
      <Column className="half">
        <div className="w80 left">
          <Field
            name="firstName"
            label={constants.profile.labels.firstName}
            component={Form.Input}
            type="input"
          />
          <Field
            name="lastName"
            label={constants.profile.labels.lastName}
            component={Form.Input}
            type="input"
          />

          <div className="w70 left">
            <Field
              name="birthDate"
              label={constants.profile.labels.birthDate}
              component={Form.DatePicker}
            />
          </div>
        </div>
      </Column>
      <Column className="half">
        <div className="w80 right">
          <Field
            name="email"
            label={constants.profile.labels.email}
            component={Form.Input}
            type="input"
          />

          <Field
            name="address"
            label={constants.profile.labels.address}
            component={Form.Input}
            type="input"
          />

          <Field
            component={Form.RadioGroup}
            options={genders}
            name="gender"
            label={constants.profile.labels.gender}
            isRequired={false}
          />

          <Form.Button
            className="ver-indent left"
            title={constants.buttons.back}
            disabled={false}
            handler={prevForm}
          />
          <Form.Button
            className="ver-indent right"
            title={constants.buttons.forward}
            disabled={submitting}
            type="submit"
          />
        </div>
      </Column>
    </Form.Wrapper>
  );
};

ProfileForm.defaultProps = defaultProps;

export { ProfileForm as Form };
