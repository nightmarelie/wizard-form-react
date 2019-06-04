/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';

import { button as styles } from './styles';

interface Props {
  title: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  handler?: (event: React.MouseEvent) => void;
}

export const Button: React.FC<Props> = ({
  title,
  handler,
  className = '',
  disabled = true,
  type = 'button',
}): ReactElement<Props> => {
  return (
    <button
      css={styles}
      className={`${className} ${disabled ? '' : 'active'}`}
      onClick={handler}
      disabled={disabled}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
