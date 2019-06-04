/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { tabs as styles } from './styles';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Wrapper: React.FC<Props> = ({ children }): React.ReactElement<Props> => {
  return <div css={styles}>{children}</div>;
};

export default Wrapper;
