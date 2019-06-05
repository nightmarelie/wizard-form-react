/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { tab as styles } from './styles';

interface Props {
  isActive: boolean;
  payload: string;
  handler?: (event: React.MouseEvent) => void;
}

const Tab: React.FC<Props> = ({
  payload,
  isActive,
  handler,
}): React.ReactElement<Props> => {
  return (
    <div
      css={styles}
      className={`tab ${isActive ? 'active' : ''}`}
      role="cell"
      onClick={handler}
    >
      {payload}
    </div>
  );
};

export default Tab;
