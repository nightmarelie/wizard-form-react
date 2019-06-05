/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import {
  WrappedFieldArrayProps,
  Field,
  FieldArray,
  GenericFieldArray,
} from 'redux-form';

import ActionIcon from 'components/ActionIcon/ActionIcon';
import Input from './Input';

import { ul as ulStyle } from './styles';

type Props = {
  label: string;
  actionLabel: string;
  isRequired?: boolean;
  className: string;
} & WrappedFieldArrayProps<any>;

export const FieldArrayCustom = FieldArray as new () => GenericFieldArray<
  Field,
  Props
>;

export const InputArray: React.FC<Props> = ({
  actionLabel,
  label,
  isRequired = false,
  fields,
  meta: { error },
}): React.ReactElement<Props> => {
  return (
    <ul css={ulStyle}>
      {fields.map((field, index) => (
        <li key={index}>
          <ActionIcon
            className="icon action-remove"
            handler={() => fields.remove(index)}
          />
          <Field
            name={field}
            label={`${label} #${index + 1}`}
            component={Input}
            type="input"
            isRequired={isRequired}
          />
        </li>
      ))}
      <ActionIcon className="action-add" handler={() => fields.push()}>
        {actionLabel}
      </ActionIcon>
      {error && <li className="error">{error}</li>}
    </ul>
  );
};
