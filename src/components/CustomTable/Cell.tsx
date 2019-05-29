/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';

import styles from './styles/cell.style';

interface IProps {
  payload?: string;
  className: string;
}

const Cell: React.FC<IProps> = ({ children, payload, className = 'flex-cell' }): ReactElement<IProps> => {
  return (
    <div css={styles} className={className} role="cell">
      {children}
      {payload}
    </div>
  );
};

export default Cell;
