/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import ReactSelect from 'react-select';

import { label as labelStyle, select as SelectStyle } from './styles';
import { Dictionary } from 'common/dictionaries';

type Props = {
  label: string;
  options: Dictionary[];
  isRequired?: boolean;
  className?: string;
  isMulti?: boolean;
  isSearchable?: boolean;
} & WrappedFieldProps;

export const Select: React.FC<Props> = ({
  input,
  label,
  options,
  isRequired = true,
  className = '',
  isMulti = false,
  isSearchable = false,
  meta: { touched, error },
}): React.ReactElement<Props> => {
  const { value, onChange, onBlur } = input;
  return (
    <label
      css={[labelStyle, SelectStyle]}
      className={`${className} ${isRequired ? 'required' : ''}`}
    >
      {label}
      <ReactSelect
        {...input}
        options={options}
        isMulti={isMulti}
        isSearchable={isSearchable}
        value={value}
        onChange={onChange}
        onBlur={() => onBlur(value)}
        className="select-container"
        classNamePrefix="select-element"
      />
      {touched && error && <span className="error">{error}</span>}
    </label>
  );
};

export default Select;
