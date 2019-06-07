/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import ActionIcon from 'components/ActionIcon/ActionIcon';

import styles from './styles';

interface Props {
  className?: string;
  image?: string;
  children?: React.ReactNode;
  closeHandler?: (event: React.MouseEvent) => void;
}

const Bar: React.FC<Props> = ({
  className,
  children,
  closeHandler,
}): React.ReactElement<Props> => {
  return (
    <div css={styles} className={className}>
      {children}
      <ActionIcon className="icon action-close" handler={closeHandler} />
    </div>
  );
};

export default Bar;
