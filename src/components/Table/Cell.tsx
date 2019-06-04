/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export const Cell: React.FC<Props> = ({
  children,
}): React.ReactElement<Props> => {
  return <td>{children}</td>;
};
