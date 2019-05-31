/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

interface Props {
  addClassName: string;
}

const Action: React.FC<Props> = ({
  addClassName,
}): React.ReactElement<Props> => {
  return <span css={styles} className={addClassName} />;
};

Action.propTypes = {
  addClassName: PropTypes.string.isRequired,
};

export default Action;
