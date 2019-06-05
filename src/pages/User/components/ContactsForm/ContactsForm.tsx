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

export const ContactsForm: React.FC<Props> = ({
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
            name="company"
            label="Company"
            component={Form.Input}
            type="input"
            isRequired={false}
          />
          <Field
            name="github"
            label="Github link"
            component={Form.Input}
            type="input"
          />
          <Field
            name="facebook"
            label="Facebook link"
            component={Form.Input}
            type="input"
          />
          <Field
            name="mainLanguage"
            label="Main language"
            component={Form.Input}
            type="input"
            isRequired={false}
          />
        </div>
      </Column>
      <Column className="half">
        <div className="w80 right">
          <Field name="fax" label="Fax" component={Form.Input} type="input" />

          <Form.FieldArrayCustom
            name="phones"
            label="Phone"
            actionLabel="add phone number"
            component={Form.InputArray}
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
