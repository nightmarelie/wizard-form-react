/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';

import styles from './styles/wrapper.style';

interface IProps {}

const Wrapper: React.FC<IProps> = ({ children }): ReactElement<IProps> => {
  return (
    <div css={styles}>
      {children}
    </div>
  );
};

export default Wrapper;
