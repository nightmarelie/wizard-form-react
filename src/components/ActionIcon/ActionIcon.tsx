/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import styles from './styles';

interface Props {
  children?: React.ReactNode;
  className: string;
  handler?: (event: React.MouseEvent) => void;
}

const ActionIcon: React.FC<Props> = ({
  children,
  className,
  handler,
}): React.ReactElement<Props> => {
  return (
    <span css={styles} className={`action-icon ${className}`} onClick={handler}>
      {children}
    </span>
  );
};

export default ActionIcon;
