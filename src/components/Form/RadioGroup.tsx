/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { WrappedFieldProps, Field } from 'redux-form';
import { textMaskReturn } from 'redux-form-input-masks';

import { label as labelStyle } from './styles';
import { Dictionary } from 'common/dictionaries';

import Input from './Input';

type Props = {
  label: string;
  name: string;
  options: Dictionary[];
  isRequired?: boolean;
  className?: string;
} & WrappedFieldProps &
  Partial<textMaskReturn>;

export const RadioGroup: React.FC<Props> = ({
  input,
  label,
  options,
  isRequired = true,
  className = '',
  meta: { touched, error },
}): React.ReactElement<Props> => {
  return (
    <React.Fragment>
      <label
        css={labelStyle}
        className={`break-after ${className} ${isRequired ? 'required' : ''}`}
      >
        {label}
      </label>
      {options.map((option, index) => (
        <Field
          {...input}
          key={index}
          component={Input}
          label={option.label}
          value={option.value}
          type="radio"
          isRequired={false}
          className="w30"
        />
      ))}
      {touched && error && <span className="error">{error}</span>}
    </React.Fragment>
  );
};

export default RadioGroup;
