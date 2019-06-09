import { css } from '@emotion/core';

import { Fonts, Colors } from 'common/styles/global.styles';

const section = css({
  font: Fonts.Normal,
  width: '100%',
  color: Colors.GreyV1,
  td: {
    verticalAlign: 'top',
  },
  '.section-row td': {
    width: '85px',
  },
  '&.info': {
    'td:first-of-type': {
      width: '125px',
    },
    'td:last-child': {
      width: '153px',
    },
    td: {
      paddingBottom: '15px',
      '&:last-child': {
        color: Colors.GreyV3,
      },
    },
  },
});

export default section;
