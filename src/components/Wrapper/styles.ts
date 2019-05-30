import { css } from '@emotion/core';

const column = css({
  flex: 1,
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'center',
  '&.half': {
    width: '50%',
  },
});

export default column;
