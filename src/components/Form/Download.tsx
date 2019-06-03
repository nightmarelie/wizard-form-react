/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

import { download as styles } from './styles';
import Action from 'components/Action/Action';
import Avatar from 'components/Avatar/Avatar';

interface Props {
  handler?: (event: React.MouseEvent) => void;
}

export const Download: React.FC<Props> = ({
  handler,
}): React.ReactElement<Props> => {
  return (
    <div css={styles}>
      <Avatar addClassName="preview" />
      <Action addClassName="action-add" handler={e => handler && handler(e)}>
        add avatar
      </Action>
    </div>
  );
};

Download.propTypes = {
  handler: PropTypes.func,
};
