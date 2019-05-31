/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

import { wrapper as styles } from './styles';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  addClassName?: string;
}

export const Container: React.FC<Props> = ({
  children,
  addClassName = '',
}): React.ReactElement<Props> => {
  return (
    <div css={styles} className={`container ${addClassName}`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  addClassName: PropTypes.string,
};
