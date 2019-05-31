import { css } from '@emotion/core';

import { appNormalFont, Colors } from 'common/styles/global.styles';

export const separator = css({
  height: '30px',
  padding: 0,
  width: '100%',
  backgroundColor: 'transparent !important',
});

export const flexCell = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'calc((100% / 4) - 25px)',
  textAlign: 'center',
  flexFlow: 'row wrap',
  padding: '26px 14px',
  '&.danger': {
    position: 'absolute',
    right: '-90px',
    width: '90px',
    height: '100%',
    backgroundColor: 'transparent !important',
  },
  '&.last': {
    width: '100px',
  },
  '&.separator': separator,
});

export const flexRow = [
  appNormalFont,
  css({
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexFlow: 'row wrap',
    color: Colors.GreyV1,
    '&:nth-of-type(odd)': {
      '.flex-cell': {
        background: Colors.Light,
      },
    },
    '&.header': {
      '.flex-cell': {
        background: Colors.BlueV2,
        color: 'white',
        fontWeight: 'bold',
      },
    },
    '&.shift': {
      left: '-90px',
      overflow: 'inherit',
      transition: 'all 1s linear',
    },
    '&.shift .last': {
      textIndent: '-99999px',
    },
    '&.shift .flex-cell': {
      opacity: 0.5,
    },
    '&.shift .danger': {
      opacity: 1,
    },
  }),
];
