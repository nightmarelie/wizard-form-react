/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

import { flexCell as styles } from './styles';

interface Props {
  payload?: string;
  children?: React.ReactNode;
  addClassName?: string;
}

const Cell: React.FC<Props> = ({
  children,
  payload,
  addClassName,
}): React.ReactElement<Props> => {
  return (
    <div css={styles} className={`flex-cell ${addClassName}`} role="cell">
      {children}
      {payload}
    </div>
  );
};

Cell.propTypes = {
  payload: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  addClassName: PropTypes.string,
};

export default Cell;
