import { css } from '@emotion/core';
import { Fonts, Colors } from 'common/styles/global.styles';

export const pagination = css({
  font: Fonts.Normal,
  display: 'inline-block',
  '&.clear:after': {
    content: '""',
    display: 'block',
    clear: 'both',
  },
  a: {
    color: 'black',
    float: 'left',
    padding: '6px 12px',
    textDecoration: 'none',
    transition: 'background-color .3s',
    border: '1px solid #ddd',
    '&:hover:not(.active)': {
      backgroundColor: '#ddd',
    },
    '&.active': {
      backgroundColor: Colors.BlueV2,
      color: 'white',
      border: `1px solid ${Colors.BlueV2}`,
    },
  },
});

export default pagination;
