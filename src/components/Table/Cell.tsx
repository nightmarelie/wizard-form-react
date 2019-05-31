/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  children?: React.ReactNode;
}

export const Cell: React.FC<Props> = ({
  children,
}): React.ReactElement<Props> => {
  return <td>{children}</td>;
};

Cell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
