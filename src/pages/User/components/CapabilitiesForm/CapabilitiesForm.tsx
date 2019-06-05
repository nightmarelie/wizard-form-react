/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';

// components
import { Column } from 'components/Wrapper';
import * as Form from 'components/Form';

import constants from 'common/constants/index.json';

import { Data } from './model';

export interface OwnProps extends Partial<InjectedFormProps> {
  nextForm: (unlock?: boolean) => void;
  previousForm: () => void;
  hobbies: {
    label: string;
    name: string;
  }[];
}

type Props = OwnProps & InjectedFormProps<Data, OwnProps>;

export const CapabilitiesForm: React.FC<Props> = ({
  nextForm,
  previousForm,
  pristine,
  invalid,
  submitting,
  hobbies,
}): React.ReactElement<Props> => {
  const disabled = invalid || submitting || pristine;
  return (
    <Form.Wrapper onSubmit={() => nextForm(disabled)}>
      <Column className="half">
        <div className="w80 left">
          <Field
            name="additionalInfo"
            label={constants.forms.capabilities.labels.info}
            component={Form.Textarea}
            isRequired={false}
          />
        </div>
      </Column>
      <Column className="half">
        <div className="w80 right">
          <label css={Form.label} className="break-after">
            {constants.forms.capabilities.labels.myHobbies}
          </label>
          {hobbies.map(({ name, label }, index) => (
            <Field
              key={index}
              name={`hobbies.${name}`}
              label={label}
              component={Form.Input}
              type="checkbox"
              isRequired={false}
              className="check-container"
            />
          ))}

          <Form.Button
            className="ver-indent left"
            title={constants.forms.buttons.back}
            disabled={false}
            handler={previousForm}
          />
          <Form.Button
            className="ver-indent right finish"
            title={constants.forms.buttons.finish}
            disabled={disabled}
            type="submit"
          />
        </div>
      </Column>
    </Form.Wrapper>
  );
};
