/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import styles from './styles';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const Wrapper: React.FC<Props> = ({
  children,
  className = '',
}): React.ReactElement<Props> => {
  return (
    <table css={styles} className={`section ${className}`} role="table">
      <tbody>{children}</tbody>
    </table>
  );
};
