/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';

// components
import { Column } from 'components/Wrapper';
import * as Form from 'components/Form';

import constants from 'common/constants/index.json';
import { Dictionary } from 'common/dictionaries';

import { Data } from './model';

export interface OwnProps extends Partial<InjectedFormProps> {
  nextForm: (unlock?: boolean) => void;
  previousForm: () => void;
  hobbies: Dictionary[];
  skils: Dictionary[];
}

type Props = OwnProps & InjectedFormProps<Data, OwnProps>;

export const CapabilitiesForm: React.FC<Props> = ({
  nextForm,
  previousForm,
  pristine,
  invalid,
  submitting,
  hobbies,
  skils,
  handleSubmit,
}): React.ReactElement<Props> => {
  const disabled = invalid || submitting || pristine;
  return (
    <Form.Wrapper onSubmit={handleSubmit(() => nextForm(disabled))}>
      <Column className="half">
        <div className="w80 left">
          <Field
            name="skills"
            label={constants.capabilities.labels.skils}
            component={Form.Select}
            isRequired={false}
            isMulti={true}
            isSearchable={true}
            options={skils}
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
          {hobbies.map(({ value, label }, index) => (
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
            handler={previousForm}
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
