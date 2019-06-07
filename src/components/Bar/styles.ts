import { css } from '@emotion/core';

import { Colors, Fonts } from 'common/styles/global.styles';

export const bar = css({
  height: '42px',
  width: '100%',
  backgroundColor: Colors.BlueV3,
  font: Fonts.Normal,
  color: 'white',
  lineHeight: '42px',
  padding: '0 24px',
  position: 'absolute',
  '.icon': {
    position: 'absolute',
    right: '20px',
    top: '11px',
  },
});

export default bar;
