import { css } from '@emotion/core';

import { Colors } from 'common/styles/global.styles';

export const link = css({
  textDecoration: 'underline',
  color: Colors.GreyV3,
  '&:hover': {
    color: Colors.GreyV1,
  },
});

export default link;
