/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';

import styles from './styles/tab.style';

interface IProps {
  className: string;
  payload: string;
}

const Tab: React.FC<IProps> = ({ className, payload }): ReactElement<IProps> => {
  return (
    <div css={styles} className={className} role="cell">
      {payload}
    </div>
  );
};

export default Tab;
