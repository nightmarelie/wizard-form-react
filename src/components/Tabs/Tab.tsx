/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { tab as styles } from './styles';
import PropTypes from 'prop-types';

interface Props {
  isActive: boolean;
  payload: string;
  handler?: (event: React.MouseEvent) => void;
}

const Tab: React.FC<Props> = ({
  payload,
  isActive,
  handler,
}): React.ReactElement<Props> => {
  return (
    <div
      css={styles}
      className={`tab ${isActive ? 'active' : ''}`}
      role="cell"
      onClick={handler}
    >
      {payload}
    </div>
  );
};

Tab.propTypes = {
  payload: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
};

export default Tab;
