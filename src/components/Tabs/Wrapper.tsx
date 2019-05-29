/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/wrapper.style';

interface Props {
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }): React.ReactElement<Props> => {
  return <div css={styles}>{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Wrapper;
