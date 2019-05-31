import { css } from '@emotion/core';

import { Fonts, Colors } from 'common/styles/global.styles';
import arrow from 'common/images/icon-arrow.svg';

export const title = css({
  margin: '56px 0 25px',
  color: Colors.GreyV1,
  textAlign: 'center',
  font: Fonts.Bold,
});

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
      font: Fonts.Middle,
    },
  ],
});
