import { css } from '@emotion/core';

import { Fonts, Colors } from 'common/styles/global.styles';

const section = css({
  font: Fonts.Normal,
  width: '100%',
  color: Colors.GreyV1,
  td: {
    verticalAlign: 'top',
  },
  '&.info': {
    td: {
      width: '50%',
      paddingBottom: '15px',
      '&:last-child': {
        color: Colors.GreyV3,
      },
    },
  },
});

export default section;
