import { css } from '@emotion/core';

import { appBoldFont, FontFamily, Colors } from 'common/styles/global.styles';
import arrow from 'common/images/icon-arrow.svg';

export const title = [
  appBoldFont,
  css({
    margin: '56px 0 25px',
    color: '#475666',
    textAlign: 'center',
  }),
];

const beforeBack = css`
   {
    &.back::before {
      content: '';
      width: 11px;
      height: 16px;
      position: absolute;
      top: 1px;
      left: 0;
      display: block;
      float: right;
      margin-top: 5px;
      background-image: url(${arrow});
    }
  }
`;

export const breadcrumbTitle = css({
  position: 'relative',
  '.back': [
    beforeBack,
    {
      position: 'absolute',
      bottom: '6px',
      paddingLeft: '22px',
      color: Colors.GreyV2,
      font: `normal bold 24px/28px '${FontFamily.Global}', sans-serif`,
    },
  ],
});
