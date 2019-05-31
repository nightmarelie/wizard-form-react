/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

import styles, { placeholder } from './styles';

interface Props {
  addClassName?: string;
  image?: string;
}

const Action: React.FC<Props> = ({
  addClassName,
  image = placeholder,
}): React.ReactElement<Props> => {
  return (
    <span
      css={styles}
      className={addClassName}
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
  );
};

Action.propTypes = {
  addClassName: PropTypes.string,
  image: PropTypes.string,
};

export default Action;
