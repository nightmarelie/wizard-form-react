/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';

import { label as labelStyle, textarea as textareaStyle } from './styles';

type Props = {
  label: string;
  isRequired?: boolean;
  className: string;
} & WrappedFieldProps;

export const Textarea: React.FC<Props> = ({
  input,
  label,
  isRequired = true,
  className,
  meta: { touched, error },
}): React.ReactElement<Props> => {
  return (
    <label
      css={labelStyle}
      className={`${className} ${isRequired ? 'required' : ''}`}
    >
      {label}
      <textarea css={textareaStyle} {...input} />
      {touched && error && <span className="error">{error}</span>}
    </label>
  );
};
