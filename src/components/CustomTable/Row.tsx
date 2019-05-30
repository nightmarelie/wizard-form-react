/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

import { flexRow as styles } from './styles';

type Props = {
  children: React.ReactNode;
} & Partial<DefaultProps>;

const defaultProps = {
  className: 'flex-row',
};

type DefaultProps = Readonly<typeof defaultProps>;

const Row: React.FC<Props> = ({
  children,
  className = 'flex-row',
}): React.ReactElement<Props> => {
  return (
    <div css={styles} className={className} role="rowgroup">
      {children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

export default Row;
