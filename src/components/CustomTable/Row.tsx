/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

import { flexRow as styles } from './styles';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  isShifted?: boolean;
} & Partial<DefaultProps>;

const defaultProps = {
  className: 'flex-row',
};

type DefaultProps = Readonly<typeof defaultProps>;

const Row: React.FC<Props> = ({
  children,
  className = 'flex-row',
  isShifted,
}): React.ReactElement<Props> => {
  return (
    <div
      css={styles}
      className={`${className} ${isShifted ? 'shift' : ''}`}
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
  className: PropTypes.string,
  isShifted: PropTypes.bool,
};

export default Row;
