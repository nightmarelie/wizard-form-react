import { css } from '@emotion/core';

export const spinner = css({
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  position: 'absolute',
  opacity: 0,
  '&.loading': css({
    opacity: 1,
  }),
});

export default spinner;
