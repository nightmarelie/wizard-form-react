import { css } from '@emotion/core';

export const tab = css({
  cursor: 'pointer',
  padding: '17px 55px',
  fontSize: '24px',
  color: '#9BB0CB',
  borderBottom: '2px solid transparent',
  '&.active': {
    color: 'white',
    backgroundColor: '#4E86E4',
  },
});

export default tab;
