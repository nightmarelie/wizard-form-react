/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const Container: React.FC<Props> = ({
  children,
  className = '',
}): React.ReactElement<Props> => {
  return <div className={`container ${className}`}>{children}</div>;
};
