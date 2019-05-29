import { css } from '@emotion/core';
import { Colors } from 'common/styles/global.style';

export const logo = css({
  height: '16px',
  width: '102px',
  margin: '10px 0',
});

export const container = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const header = css({
  padding: '10px 0',
  height: '60px',
  backgroundColor: Colors.Blue,
  display: 'block',
  '.container': container,
  '.logo': logo,
});

export default header;
