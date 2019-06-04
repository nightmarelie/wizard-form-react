/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';

import { button as styles } from './styles';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  link: string;
  handler?: (event: React.MouseEvent) => void;
  className?: string;
}

export const LinkButton: React.FC<Props> = ({
  title,
  link,
  handler,
  className = '',
}): ReactElement<Props> => {
  return (
    <Link css={styles} className={className} to={link} onClick={handler}>
      {title}
    </Link>
  );
};

export default LinkButton;
