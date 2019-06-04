/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { wrapper as styles } from './styles';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const Container: React.FC<Props> = ({
  children,
  className = '',
}): React.ReactElement<Props> => {
  return (
    <div css={styles} className={`container ${className}`}>
      {children}
    </div>
  );
};
