import { css } from '@emotion/core';

import { Colors } from 'common/styles/global.styles';

export const column = css({
  flex: 1,
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'center',
  '&.half': {
    width: '50%',
  },
  '&.right': {
    float: 'right',
  },
  '&.left': {
    float: 'left',
  },
});

export const wrapper = css({
  margin: '0 auto',
  width: '100%',
  maxWidth: '970px',
  '&.content-wrapper': {
    display: 'flex',
    padding: '65px 100px',
    backgroundColor: Colors.LightV2,
  },
});
