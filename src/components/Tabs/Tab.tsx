/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { tab as styles } from './styles';
import PropTypes from 'prop-types';

interface Props {
  className: string;
  payload: string;
}

const Tab: React.FC<Props> = ({
  payload,
  className,
}): React.ReactElement<Props> => {
  return (
    <div css={styles} className={className} role="cell">
      {payload}
    </div>
  );
};

Tab.propTypes = {
  payload: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Tab;
