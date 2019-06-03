import { css } from '@emotion/core';

import { Fonts, Colors } from 'common/styles/global.styles';
import star from 'common/images/icon-star.svg';
import { url } from 'inspector';

export const form = css({
  display: 'flex',
  padding: '65px 100px',
  backgroundColor: Colors.LightV2,
  '&:after': {
    content: '""',
    display: 'block',
    clear: 'both',
  },
  input: {
    width: '100%',
    height: '40px',
    border: `1px solid ${Colors.GreyV5}`,
    margin: '4px 0 20px',
    padding: '0 32px 0 10px',
    font: Fonts.Normal,
    '&[type=radio]': {
      width: 'auto',
      height: 'auto',
      margin: '7px 9px 0 0',
    },
  },
  label: {
    font: Fonts.Normal,
    color: Colors.GreyV3,
    marginRight: '43px',
    cursor: 'pointer',
    '&.required:after': {
      content: '""',
      width: '10px',
      height: '10px',
      background: `no-repeat center url(${star})`,
      position: 'relative',
      top: 0,
      left: 0,
      display: 'block',
      float: 'right',
      marginTop: '5px',
    },
  },
  '.icon': {
    float: 'right',
    margin: '-50px 5px 0 -25px',
    position: 'relative',
    zIndex: 2,
  },
  '.button': {
    padding: '12px 24px',
    font: Fonts.Normal,
    color: 'white',
    backgroundColor: Colors.GreyV5,
    marginTop: '140px',
    cursor: 'pointer',
    '&.active': {
      backgroundColor: Colors.BlueV3,
    },
  },
  '.right': {
    float: 'right',
  },
  '.left': {
    float: 'left',
  },
  '.row-80': {
    width: '80%',
  },
  '.break-after:after': {
    // content: '""',
    // whiteSpace: 'pre',
  },
});

export const download = css({
  display: 'inline-block',
  textAlign: 'center',
  '.preview': {
    width: '171px',
    height: '171px',
    border: `3px solid #5E97F3`,
    borderRadius: '171px',
    marginBottom: '10px',
    display: 'block',
  },
});
