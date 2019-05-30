import { css } from '@emotion/core';

import { appNormalFont, Colors } from 'common/styles/global.styles';

const section = [
  appNormalFont,
  css({
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
  }),
];

export default section;
