/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const Row: React.FC<Props> = ({
  children,
}): React.ReactElement<Props> => {
  return <tr>{children}</tr>;
};
