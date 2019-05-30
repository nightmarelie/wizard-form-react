/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';

import styles from './styles';
import PropTypes from 'prop-types';

interface Props {
  title: string;
}

const Title: React.FC<Props> = ({ title }): ReactElement<Props> => {
  return <h1 css={styles}>{title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
