/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { download as styles } from './styles';
import ActionIcon from 'components/ActionIcon/ActionIcon';
import Avatar from 'components/Avatar/Avatar';

interface Props {
  handler?: (event: React.MouseEvent) => void;
}

export const ImgUpload: React.FC<Props> = ({
  handler,
}): React.ReactElement<Props> => {
  return (
    <div css={styles}>
      <Avatar className="preview" />
      <ActionIcon className="action-add" handler={e => handler && handler(e)}>
        add avatar
      </ActionIcon>
    </div>
  );
};
