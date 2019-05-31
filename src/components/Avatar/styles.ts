import { css } from '@emotion/core';

import avatarPlaceholder from 'common/images/avatar-placeholder.svg';
import { Colors } from 'common/styles/global.styles';

export const avatar = css({
  width: '200px',
  height: '200px',
  borderRadius: '200px',
  display: 'inline-block',
  verticalAlign: 'middle',
  margin: '0 15px',
  backgroundPosition: 'center 20px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '115px',
  border: `3px solid ${Colors.BlueV3}`,
  '&.avatar-small': {
    width: '40px',
    height: '40px',
    borderRadius: '40px',
    backgroundPosition: 'center 5px',
    backgroundSize: '21px',
    border: `2px solid ${Colors.BlueV3}`,
  },
});

export const placeholder = avatarPlaceholder;

export default avatar;
