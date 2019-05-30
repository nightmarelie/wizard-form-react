/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

interface Props {
  children: React.ReactNode;
  addClassName: string;
}

export const Column: React.FC<Props> = ({
  children,
  addClassName,
}): React.ReactElement<Props> => {
  return (
    <div css={styles} className={`column ${addClassName}`}>
      {children}
    </div>
  );
};

Column.propTypes = {
  children: PropTypes.element.isRequired,
  addClassName: PropTypes.string.isRequired,
};
