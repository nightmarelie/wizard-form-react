/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

import { flexRow as styles } from './styles';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  isShifted?: boolean;
  addClassName?: string;
}

const Row: React.FC<Props> = ({
  children,
  addClassName,
  isShifted,
}): React.ReactElement<Props> => {
  return (
    <div
      css={styles}
      className={`flex-row ${addClassName} ${isShifted ? 'shift' : ''}`}
      role="rowgroup"
    >
      {children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  addClassName: PropTypes.string,
  isShifted: PropTypes.bool,
};

export default Row;
