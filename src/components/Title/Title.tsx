/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';

import styles from './style';

interface IProps {
  title: string;
}

const Title: React.FC<IProps> = ({ title }): ReactElement<IProps> => {
  return (
    <h1 css={styles}>{title}</h1>
  );
};

export default Title;
