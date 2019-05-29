import { css } from '@emotion/core';

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
  '&.last': {
    width: '100px',
  },
  '&.separator': separator,
});

export default flexCell;
