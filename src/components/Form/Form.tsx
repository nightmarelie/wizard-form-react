/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';
import { InjectedFormProps } from 'redux-form';

import { form as styles } from './styles';

type Props = {
  children?: React.ReactNode | React.ReactNode[];
} & InjectedFormProps;

const Form: React.FC<Props> = (props): React.ReactElement<Props> => {
  const { children, handleSubmit } = props;
  return (
    <form css={styles} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  handleSubmit: PropTypes.func.isRequired,
};

export { Form as Wrapper };
