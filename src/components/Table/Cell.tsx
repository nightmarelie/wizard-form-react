/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const Cell: React.FC<Props> = ({
  children,
  className,
}): React.ReactElement<Props> => {
  return <td className={className}>{children}</td>;
};
