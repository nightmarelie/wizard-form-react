import { css } from '@emotion/core';

import { Fonts, Colors } from 'common/styles/global.styles';

export const separator = css({
  padding: 0,
  width: '100%',
  height: '100%',
  minHeight: '30px',
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

export const flexRow = css({
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexFlow: 'row wrap',
  color: Colors.GreyV1,
  font: Fonts.Normal,
  transition: 'all .5s',
  width: '100%',
  '&:nth-of-type(odd)': {
    '.flex-cell': {
      background: Colors.LightV1,
    },
  },
  '& .first': {
    textAlign: 'center',
    justifyContent: 'start',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  '&.empty': {
    padding: '150px 360px 135px',
  },
  '&.header': {
    '.flex-cell': {
      background: Colors.BlueV2,
      color: 'white',
      fontWeight: 'bold',
      justifyContent: 'center',
    },
  },
  '&.shift': {
    marginLeft: '-90px',
    overflow: 'inherit',
  },
  '&.shift .last': {
    textIndent: '-99999px',
  },
  '&.shift .flex-cell': {
    opacity: 0.5,
  },
  '&.shift .danger': {
    opacity: 1,
    marginLeft: '-90px',
  },
});
