/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { rowLabel as labelStyle, rowInput as inputStyle } from './styles';

interface Props {
  name: string;
  label: string;
  handler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RowInput: React.FC<Props> = ({
  name,
  label,
  handler,
}): React.ReactElement<Props> => {
  return (
    <React.Fragment>
      <label css={labelStyle} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        css={inputStyle}
        type="text"
        onChange={handler}
      />
    </React.Fragment>
  );
};

export default RowInput;
