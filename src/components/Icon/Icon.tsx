/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import styles from './styles';

interface Props {
  className: string;
}

const Icon: React.FC<Props> = ({ className }): React.ReactElement<Props> => {
  return <span css={styles} className={className} />;
};

export default Icon;
