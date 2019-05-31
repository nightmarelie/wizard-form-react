/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  addClassName?: string;
}

export const Wrapper: React.FC<Props> = ({
  children,
  addClassName = '',
}): React.ReactElement<Props> => {
  return (
    <table css={styles} className={`section ${addClassName}`} role="table">
      <tbody>{children}</tbody>
    </table>
  );
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  addClassName: PropTypes.string,
};
