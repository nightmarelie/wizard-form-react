/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import styles from './styles';

interface Props {
  href: string;
  title?: string;
  className?: string;
}

const Link: React.FC<Props> = ({
  title,
  href,
  className = '',
}): React.ReactElement<Props> => {
  return (
    <a css={styles} className={className} href={href}>
      {title || href}
    </a>
  );
};

export default Link;
