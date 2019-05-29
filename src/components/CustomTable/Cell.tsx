/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/cell.style';

type Props = {
  payload?: string;
  children?: React.ReactNode;
} & Partial<DefaultProps>;

const defaultProps = {
  className: 'flex-cell',
};

type DefaultProps = Readonly<typeof defaultProps>;

const Cell: React.FC<Props> = ({
  children,
  payload,
  className = 'flex-cell',
}): React.ReactElement<Props> => {
  return (
    <div css={styles} className={className} role="cell">
      {children}
      {payload}
    </div>
  );
};

Cell.propTypes = {
  payload: PropTypes.string.isRequired,
  children: PropTypes.element,
  className: PropTypes.string,
};

export default Cell;
