import { css } from '@emotion/core';

import avatarPlaceholder from 'common/images/avatar-placeholder.svg';
import { Colors } from 'common/styles/global.styles';

export const avatar = css({
  width: '200px',
  height: '200px',
  borderRadius: '200px',
  display: 'inline-block',
  verticalAlign: 'middle',
  margin: '0 8px',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  border: `3px solid ${Colors.BlueV3}`,
  transform: 'scale(1)',
  transition: 'transform 0.1s ease-in-out',
  '&.avatar-small': {
    width: '40px',
    height: '40px',
    borderRadius: '40px',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    border: `2px solid ${Colors.BlueV3}`,
  },
  '&:hover': {
    transform: 'scale(1.2)',
  },
});

export const placeholder = avatarPlaceholder;

export default avatar;
