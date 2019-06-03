/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';

import { button as styles } from './styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  link: string;
  handler?: (event: React.MouseEvent) => void;
  addClassName?: string;
}

export const Button: React.FC<Props> = ({
  title,
  link,
  handler,
  addClassName = '',
}): ReactElement<Props> => {
  return (
    <Link css={styles} className={addClassName} to={link} onClick={handler}>
      {title}
    </Link>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  handler: PropTypes.func,
  addClassName: PropTypes.string,
};

export default Button;
