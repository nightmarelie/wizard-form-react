import { css } from '@emotion/core';
import { appNormalFont } from '../../common/styles/global.style';

export const pagination = [
  appNormalFont,
  css({
    display: 'inline-block',
    'a': {
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
        backgroundColor: '#4E86E4',
        color: 'white',
        border: '1px solid #4E86E4',
      }
    },
  })
];

export default pagination;
