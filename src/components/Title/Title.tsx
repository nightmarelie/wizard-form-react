/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';

import { title as styles } from './styles';

interface Props {
  title: string;
}

export const Title: React.FC<Props> = ({ title }): ReactElement<Props> => {
  return <h1 css={styles}>{title}</h1>;
};
