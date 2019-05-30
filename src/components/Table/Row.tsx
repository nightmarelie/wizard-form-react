/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  children: React.ReactNode;
}

export const Row: React.FC<Props> = ({
  children,
}): React.ReactElement<Props> => {
  return <tr>{children}</tr>;
};

Row.propTypes = {
  children: PropTypes.element.isRequired,
};
