/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { SyntheticEvent } from 'react';

import { form as styles } from './styles';

export interface Props {
  children?: React.ReactNode | React.ReactNode[];
  onSubmit: (e: SyntheticEvent) => void;
}

const Form: React.FC<Props> = (props): React.ReactElement<Props> => {
  const { children, onSubmit } = props;
  return (
    <form css={styles} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export { Form as Wrapper };
