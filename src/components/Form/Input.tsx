/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { textMaskReturn } from 'redux-form-input-masks';

import { label as labelStyle, input as inputStyle } from './styles';

type Props = {
  label: string;
  type: string;
  isRequired?: boolean;
  className?: string;
} & WrappedFieldProps &
  Partial<textMaskReturn>;

export const Input: React.FC<Props> = ({
  input,
  label,
  type,
  isRequired = true,
  className = '',
  meta: { touched, error },
}): React.ReactElement<Props> => {
  return (
    <label
      css={labelStyle}
      className={`${className} ${isRequired ? 'required' : ''}`}
    >
      {label}
      <input css={inputStyle} {...input} type={type} />
      {touched && error && <span className="error">{error}</span>}
    </label>
  );
};

export default Input;
