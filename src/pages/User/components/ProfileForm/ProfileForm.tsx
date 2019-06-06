/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';

// components
import { Column } from 'components/Wrapper';
import * as Form from 'components/Form';

import constants from 'common/constants/index.json';

import * as model from './model';

export interface OwnProps extends Partial<InjectedFormProps> {
  nextForm: (unlock?: boolean) => void;
  previousForm: () => void;
}

type Props = OwnProps & InjectedFormProps<model.Data, OwnProps>;

export const ProfileForm: React.FC<Props> = ({
  nextForm,
  previousForm,
  pristine,
  invalid,
  submitting,
}): React.ReactElement<Props> => {
  const disabled = invalid || submitting || pristine;
  return (
    <Form.Wrapper onSubmit={() => nextForm(disabled)}>
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

          <label css={Form.label} className="break-after">
            {constants.profile.labels.gender}
          </label>
          <Field
            name="gender"
            label={constants.profile.labels.male}
            component={Form.Input}
            value="male"
            type="radio"
            checked={true}
            isRequired={false}
            className="w30"
          />
          <Field
            name="gender"
            label={constants.profile.labels.female}
            component={Form.Input}
            value="female"
            type="radio"
            isRequired={false}
            className="w30"
          />

          <Form.Button
            className="ver-indent left"
            title={constants.buttons.back}
            disabled={false}
            handler={previousForm}
          />
          <Form.Button
            className="ver-indent right"
            title={constants.buttons.forward}
            disabled={disabled}
            type="submit"
          />
        </div>
      </Column>
    </Form.Wrapper>
  );
};
