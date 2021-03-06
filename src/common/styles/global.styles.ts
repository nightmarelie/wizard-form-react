import { css } from '@emotion/core';

export enum FontFamily {
  Global = 'Roboto',
}

export enum Colors {
  Black = 'black',
  BlueV1 = '#2F68C8',
  BlueV2 = '#4E86E4',
  BlueV3 = '#5E97F3',
  GreyV1 = '#475666',
  GreyV2 = '#9BB0CB',
  GreyV3 = '#657C9A',
  GreyV4 = '#EAF1FD',
  GreyV5 = '#C1CFE0',
  LightV1 = '#E7F0FF',
  LightV2 = '#FAFCFF',
  RedV1 = '#FF8989',
  RedV2 = '#EB5757',
  CyanV1 = '#4EE4A5',
  CyanV2 = '#00cca4',
}

export const Fonts = {
  Small: `normal 500 9px/11px '${FontFamily.Global}'`,
  Normal: `normal 500 14px/16px '${FontFamily.Global}'`,
  Middle: `normal bold 24px/28px '${FontFamily.Global}'`,
  Bold: `normal bold 35px/41px '${FontFamily.Global}'`,
};

export const customFont = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
`;

export const reset = css`
  * {
    box-sizing: border-box;
  }
`;

const body = css`
  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: ${FontFamily.Global};
    margin: 0;
  }
`;

export const inline = css`
  .inline {
    display: inline;
  }
`;
// form end

export const link = css({
  textDecoration: 'none',
  fontFamily: 'inherit',
  font: Fonts.Normal,
  color: Colors.GreyV1,
  '&:hover': {
    textDecoration: 'underline',
  },
});

export const h2 = css({
  margin: 0,
  color: Colors.GreyV2,
  font: Fonts.Bold,
  paddingBottom: '70px',
});

export const pre = css({
  textDecoration: 'none',
  fontFamily: 'inherit',
  font: Fonts.Normal,
  margin: 0,
  padding: 0,
});

export default [customFont, reset, body];
