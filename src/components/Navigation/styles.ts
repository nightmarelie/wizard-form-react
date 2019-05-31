import { css } from '@emotion/core';
import { Fonts } from 'common/styles/global.styles';

const nav = css({
  font: Fonts.Normal,
  textDecoration: 'none',
  color: 'white',
  opacity: 0.5,
  marginLeft: '59px',
  '&:before': {
    backgroundColor: 'red',
  },
  '&:hover': {
    opacity: 1,
  },
  '&.active': {
    opacity: 1,
  },
});

export default nav;
