/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const Row: React.FC<Props> = ({
  children,
  className,
}): React.ReactElement<Props> => {
  return <tr className={className}>{children}</tr>;
};
