/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { flexCell as styles } from './styles';

interface Props {
  payload?: string;
  children?: React.ReactNode;
  className?: string;
}

const Cell: React.FC<Props> = ({
  children,
  payload,
  className,
}): React.ReactElement<Props> => {
  return (
    <div css={styles} className={`flex-cell ${className}`} role="cell">
      {children}
      {payload}
    </div>
  );
};

export default Cell;
