/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';
import { createTextMask, textMaskReturn } from 'redux-form-input-masks';

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
  languages: dictionaries.languages,
};

type DefaultProps = Readonly<typeof defaultProps>;

const phoneMask: textMaskReturn | any = createTextMask({
  pattern: '+7 (999) 999-99-99',
});

type Props = OwnProps & InjectedFormProps<model.Data, OwnProps>;

const ContactsForm: React.FC<Props> = ({
  nextForm,
  prevForm,
  submitting,
  languages,
  handleSubmit,
}): React.ReactElement<Props> => {
  return (
    <Form.Wrapper onSubmit={handleSubmit(data => nextForm(data, false))}>
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
            {...phoneMask}
          />

          <Form.FieldArrayCustom
            name="phones"
            label={constants.contacts.labels.phone}
            actionLabel="add phone number"
            component={Form.InputArray}
            type="phone"
            limit={3}
            mask={phoneMask}
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

ContactsForm.defaultProps = defaultProps;

export { ContactsForm as Form };
