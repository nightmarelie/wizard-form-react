/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';

import styles from './styles/row.style';

interface IProps {
  className: string;
}

const Container: React.FC<IProps> = ({ children, className = 'flex-row' }): ReactElement<IProps> => {
  return (
    <div css={styles} className={className} role="rowgroup">
      {children}
    </div>
  );
};

export default Container;
