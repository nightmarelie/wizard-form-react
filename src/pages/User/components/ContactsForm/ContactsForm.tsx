/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';

// components
import { Column } from 'components/Wrapper';
import * as Form from 'components/Form';

import constants from 'common/constants/index.json';
import { Dictionary } from 'common/dictionaries';

import * as model from './model';

export interface OwnProps extends Partial<InjectedFormProps> {
  nextForm: (unlock?: boolean) => void;
  previousForm: () => void;
  languages: Dictionary[];
}

type Props = OwnProps & InjectedFormProps<model.Data, OwnProps>;

export const ContactsForm: React.FC<Props> = ({
  nextForm,
  previousForm,
  pristine,
  invalid,
  submitting,
  languages,
}): React.ReactElement<Props> => {
  const disabled = invalid || submitting || pristine;
  return (
    <Form.Wrapper onSubmit={() => nextForm(disabled)}>
      <Column className="half">
        <div className="w80 left">
          <Field
            name="company"
            label={constants.contacts.labels.company}
            component={Form.Input}
            type="input"
            isRequired={false}
          />
          <Field
            name="github"
            label={constants.contacts.labels.github}
            component={Form.Input}
            type="input"
          />
          <Field
            name="facebook"
            label={constants.contacts.labels.facebook}
            component={Form.Input}
            type="input"
          />
          <Field
            name="mainLanguage"
            label={constants.contacts.labels.mainLanguage}
            component={Form.Select}
            isRequired={false}
            isSearchable={true}
            options={languages}
          />
        </div>
      </Column>
      <Column className="half">
        <div className="w80 right">
          <Field
            name="fax"
            label={constants.contacts.labels.fax}
            component={Form.Input}
            type="input"
          />

          <Form.FieldArrayCustom
            name="phones"
            label={constants.contacts.labels.phone}
            actionLabel="add phone number"
            component={Form.InputArray}
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
