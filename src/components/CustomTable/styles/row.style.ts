import { css } from '@emotion/core';

import { appNormalFont } from 'common/styles/global.style';

export const flexRow = [
  appNormalFont,
  css({
    display: 'flex',
    flexFlow: 'row wrap',
    color: '#475666',
    '&:nth-child(odd)': {
      '.flex-cell': {
        background: '#E7F0FF',
      },
    },
    '&.header': {
      '.flex-cell': {
        background: '#4E86E4',
        color: 'white',
        fontWeight: 'bold',
      }
    }
  })
];

export default flexRow;
