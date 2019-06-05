/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';

// components
import { Column } from 'components/Wrapper';
import * as Form from 'components/Form';

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
            label="First name"
            component={Form.Input}
            type="input"
          />
          <Field
            name="lastName"
            label="Last name"
            component={Form.Input}
            type="input"
          />

          <div className="w70 left">
            <Field
              name="birthDate"
              label="Birth date"
              component={Form.DatePicker}
            />
          </div>
        </div>
      </Column>
      <Column className="half">
        <div className="w80 right">
          <Field
            name="email"
            label="Email"
            component={Form.Input}
            type="input"
          />

          <Field
            name="address"
            label="Address"
            component={Form.Input}
            type="input"
          />

          <label css={Form.label} className="break-after">
            Gender
          </label>
          <Field
            name="gender"
            label="Male"
            component={Form.Input}
            value="male"
            type="radio"
            checked={true}
            isRequired={false}
            className="w30"
          />
          <Field
            name="gender"
            label="Female"
            component={Form.Input}
            value="female"
            type="radio"
            isRequired={false}
            className="w30"
          />

          <Form.Button
            className="ver-indent left"
            title="Back"
            disabled={false}
            handler={previousForm}
          />
          <Form.Button
            className="ver-indent right"
            title="Forward"
            disabled={disabled}
            type="submit"
          />
        </div>
      </Column>
    </Form.Wrapper>
  );
};
