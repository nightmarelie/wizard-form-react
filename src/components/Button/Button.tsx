/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';

import { button as styles } from './styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  link: string;
}

export const Button: React.FC<Props> = ({
  title,
  link,
}): ReactElement<Props> => {
  return (
    <Link css={styles} to={link}>
      {title}
    </Link>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
