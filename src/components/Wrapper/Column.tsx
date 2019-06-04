/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { column as styles } from './styles';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  className: string;
}

export const Column: React.FC<Props> = ({
  children,
  className,
}): React.ReactElement<Props> => {
  return (
    <div css={styles} className={`column ${className}`}>
      {children}
    </div>
  );
};
