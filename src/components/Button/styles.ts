import { css } from '@emotion/core';

import { Fonts, Colors } from 'common/styles/global.styles';

export const button = css({
  textDecoration: 'none',
  fontFamily: 'inherit',
  padding: '12px 28px',
  color: 'white',
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: Colors.BlueV3,
  font: Fonts.Normal,
  '&:hover': {
    backgroundColor: Colors.BlueV2,
  },
});
