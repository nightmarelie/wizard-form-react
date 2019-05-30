import { css } from '@emotion/core';

export enum FontFamily {
  Global = 'Roboto',
}

export enum Colors {
  Black = 'black',
  BlueV1 = '#2F68C8',
  BlueV2 = '#4E86E4',
  GreyV1 = '#475666',
  GreyV2 = '#9BB0CB',
  GreyV3 = '#657C9A',
  Light = '#E7F0FF',
  Red = '#FF8989',
}

export const appNormalFont = css({
  font: `normal 500 14px/16px '${FontFamily.Global}', sans-serif`,
});

export const appBoldFont = css({
  font: `normal bold 35px/41px '${FontFamily.Global}', sans-serif`,
});

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

export const icon = css`
  .icon {
    width: 17px;
    height: 17px;
    display: inline-block;
    margin: 0 5px;
  }
`;

export const container = css`
  .container {
    margin: 0 auto;
    width: 100%;
    max-width: 970px;
  }
`;

export const breakAfter = css`
  .break-after {
    &::after {
      content: '';
      white-space: pre;
    }
  }
`;

export const right = css`
  .right {
    float: right;
  }
`;

export const left = css`
  .left {
    float: left;
  }
`;

export const br = css`
  .br:after {
    content: '';
    display: block;
  }
`;

export const clear = css`
  .clear:after {
    content: '';
    display: block;
    clear: both;
  }
`;

export const inline = css`
  .inline {
    display: inline;
  }
`;

export const avatar = css`
  .avatar {
    width: 200px;
    height: 200px;
    background-color: #eb5757;
    border-radius: 200px;
    display: inline-block;
    vertical-align: middle;
    margin: 0 15px;
  }
`;

export const avatarSmall = css`
  .avatar-small {
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
`;

export const contentWrapper = css`
  .content-wrapper {
    display: flex;
    padding: 65px 100px;
    background-color: #fafcff;
    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }
`;

export const link = css`
  a {
    text-decoration: none;
    font-family: inherit;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: ${Colors.GreyV1};
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default [
  customFont,
  reset,
  body,
  icon,
  container,
  breakAfter,
  right,
  left,
  br,
  clear,
  inline,
  avatar,
  avatarSmall,
  contentWrapper,
  link,
];
