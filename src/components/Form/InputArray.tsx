/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import {
  WrappedFieldArrayProps,
  Field,
  FieldArray,
  GenericFieldArray,
} from 'redux-form';
import { textMaskReturn } from 'redux-form-input-masks';

import ActionIcon from 'components/ActionIcon/ActionIcon';
import Input from './Input';

import { ul as ulStyle } from './styles';

type Props = {
  label: string;
  actionLabel: string;
  isRequired?: boolean;
  className: string;
  type: string;
  mask: textMaskReturn | null;
  limit: number;
} & WrappedFieldArrayProps<string>;

export const FieldArrayCustom = FieldArray as new () => GenericFieldArray<
  Field,
  Props
>;

export const InputArray: React.FC<Props> = ({
  actionLabel,
  label,
  type,
  fields,
  mask,
  meta: { error },
  limit = 10,
  isRequired = false,
}): React.ReactElement<Props> => {
  const count = fields.length + 1;
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
            type={type}
            isRequired={isRequired}
            {...mask}
          />
        </li>
      ))}
      {count <= limit && (
        <ActionIcon className="action-add" handler={() => fields.push()}>
          {actionLabel}
        </ActionIcon>
      )}
      {error && <li className="error">{error}</li>}
    </ul>
  );
};
