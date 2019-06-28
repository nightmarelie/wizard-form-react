/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import cn from 'classnames';

import { tab as styles } from './styles';

interface Props {
  isActive: boolean;
  isLock: boolean;
  payload: string;
  handler?: (event: React.MouseEvent) => void;
}

const Tab: React.FC<Props> = ({
  payload,
  isActive,
  isLock,
  handler,
}): React.ReactElement<Props> => {
  return (
    <div
      css={styles}
      className={cn('tab', { active: isActive, disabled: isLock })}
      role="cell"
      onClick={handler}
    >
      {payload}
    </div>
  );
};

export default Tab;
