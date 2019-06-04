import { css } from '@emotion/core';

import { Fonts, Colors } from 'common/styles/global.styles';
import star from 'common/images/icon-star.svg';

export const form = css({
  display: 'flex',
  padding: '65px 100px',
  backgroundColor: Colors.LightV2,
  '.ver-indent': {
    marginTop: '140px',
  },
  '&:after': {
    content: '""',
    display: 'block',
    clear: 'both',
  },
  '.icon': {
    float: 'right',
    margin: '-50px 5px 0 -25px',
    position: 'relative',
    zIndex: 2,
  },
  '.right': {
    float: 'right',
  },
  '.left': {
    float: 'left',
  },
  '.w80': {
    width: '80%',
  },
  '.w30': {
    width: '30%',
  },
  '.break-after': {
    marginBottom: '10px',
  },
});

export const input = css({
  width: '100%',
  height: '40px',
  border: `1px solid ${Colors.GreyV5}`,
  margin: '4px 0 20px',
  padding: '0 32px 0 10px',
  font: Fonts.Normal,
  '&[type=radio]': {
    width: 'auto',
    height: 'auto',
    margin: '0px 9px 0 0',
    float: 'left',
  },
});

export const label = css({
  font: Fonts.Normal,
  color: Colors.GreyV3,
  marginRight: '43px',
  cursor: 'pointer',
  display: 'inline-block',
  width: '100%',
  position: 'relative',
  '.error': {
    color: Colors.RedV2,
    position: 'absolute',
    bottom: '6px',
    left: '12px',
    font: Fonts.Small,
  },
  '&.required:after': {
    content: '""',
    width: '10px',
    height: '10px',
    background: `no-repeat center url(${star})`,
    position: 'absolute',
    top: 0,
    right: 0,
    marginTop: '5px',
  },
});

export const button = css({
  padding: '12px 24px',
  font: Fonts.Normal,
  color: 'white',
  backgroundColor: Colors.GreyV5,
  cursor: 'pointer',
  border: 'none',
  overflow: 'visible',
  '&.active': {
    backgroundColor: Colors.BlueV3,
  },
  '&:not([disabled]):hover': {
    backgroundColor: Colors.BlueV1,
  },
  '&[disabled]:hover': {
    backgroundColor: Colors.RedV2,
  },
  ':active, :focus': {
    outline: 'none',
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
