/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { flexRow as styles } from './styles';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  isShifted?: boolean;
  className?: string;
}

const Row: React.FC<Props> = ({
  children,
  className,
  isShifted,
}): React.ReactElement<Props> => {
  return (
    <div
      css={styles}
      className={`flex-row ${className} ${isShifted ? 'shift' : ''}`}
      role="rowgroup"
    >
      {children}
    </div>
  );
};

export default Row;
