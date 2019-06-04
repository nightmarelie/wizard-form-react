/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import styles, { placeholder } from './styles';

interface Props {
  className?: string;
  image?: string;
}

const Avatar: React.FC<Props> = ({
  className,
  image = placeholder,
}): React.ReactElement<Props> => {
  return (
    <span
      css={styles}
      className={className}
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
  );
};

export default Avatar;
