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

import { Data } from './model';
import * as User from 'domain/user';

export type OwnProps = {
  nextForm: (data: Partial<User.Model>, lock?: boolean) => void;
  prevForm: () => void;
} & Partial<InjectedFormProps> &
  Partial<DefaultProps>;

const defaultProps = {
  hobbies: dictionaries.hobbies,
  skills: dictionaries.skills,
};

type DefaultProps = Readonly<typeof defaultProps>;

type Props = OwnProps & InjectedFormProps<Data, OwnProps>;

const CapabilitiesForm: React.FC<Props> = ({
  nextForm,
  prevForm,
  submitting,
  hobbies,
  skills,
  handleSubmit,
}): React.ReactElement<Props> => {
  return (
    <Form.Wrapper onSubmit={handleSubmit(data => nextForm(data, false))}>
      <Column className="half">
        <div className="w80 left">
          <Field
            name="skills"
            label={constants.capabilities.labels.skills}
            component={Form.Select}
            isRequired={false}
            isMulti={true}
            isSearchable={true}
            options={skills}
          />
          <Field
            name="additionalInfo"
            label={constants.capabilities.labels.info}
            component={Form.Textarea}
            isRequired={false}
          />
        </div>
      </Column>
      <Column className="half">
        <div className="w80 right">
          <label css={Form.label} className="break-after">
            {constants.capabilities.labels.myHobbies}
          </label>
          {hobbies!.map(({ value, label }, index) => (
            <Field
              key={index}
              name={`hobbies.${value}`}
              label={label}
              component={Form.Input}
              type="checkbox"
              isRequired={false}
              className="check-container"
            />
          ))}

          <Form.Button
            className="ver-indent left"
            title={constants.buttons.back}
            disabled={false}
            handler={prevForm}
          />
          <Form.Button
            className="ver-indent right finish"
            title={constants.buttons.finish}
            disabled={submitting}
            type="submit"
          />
        </div>
      </Column>
    </Form.Wrapper>
  );
};

CapabilitiesForm.defaultProps = defaultProps;

export { CapabilitiesForm as Form };
