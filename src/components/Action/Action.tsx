/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

interface Props {
  children?: React.ReactNode;
  addClassName: string;
  handler?: (event: React.MouseEvent) => void;
}

const Action: React.FC<Props> = ({
  children,
  addClassName,
  handler,
}): React.ReactElement<Props> => {
  return (
    <span
      css={styles}
      className={`action-icon ${addClassName}`}
      onClick={handler}
    >
      {children}
    </span>
  );
};

Action.propTypes = {
  children: PropTypes.element,
  addClassName: PropTypes.string.isRequired,
  handler: PropTypes.func,
};

export default Action;
