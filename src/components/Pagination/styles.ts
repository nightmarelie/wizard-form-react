import { css } from '@emotion/core';
import { Fonts, Colors } from 'common/styles/global.styles';

export const pagination = css({
  '.pagination': {
    font: Fonts.Normal,
    display: 'inline-block',
    padding: 0,
    li: {
      color: 'black',
      float: 'left',
      textDecoration: 'none',
      listStyle: 'none',
      // transition: 'background-color .2s',
      border: `1px solid ${Colors.GreyV4}`,
      '&:hover:not(.active)': {
        backgroundColor: Colors.GreyV2,
      },
      '&.active': {
        backgroundColor: Colors.BlueV2,
        color: 'white',
        border: `1px solid ${Colors.BlueV2}`,
      },
      a: {
        display: 'inline-block',
        margin: 0,
        padding: '6px 12px',
        border: 0,
        font: 'inherit',
        verticalAlign: 'baseline',
        userSelect: 'none',
        '&:hover, &:active, &:focus': {
          outline: 0,
        },
      },
    },
  },
});

export default pagination;
