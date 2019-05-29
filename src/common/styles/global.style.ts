import { css } from '@emotion/core';

import actionDelete from '../../images/action-delete.svg';
import actionEdit from '../../images/action-edit.svg';

export enum FontFamily {
  Global = 'Roboto',
}

export enum Colors {
  Black = 'black',
  Blue = '#2F68C8',
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

export const reset = css`* {
  box-sizing: border-box;
}`;

const body = css`body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: ${FontFamily.Global};
  margin: 0;
}`;

export const icon = css`.icon{
  width: 17px;
  height: 17px;
  display: inline-block;
  margin: 0 5px;
}`;

export const container = css`.container {
  margin: 0 auto;
  width: 100%;
  max-width: 970px;
}`;

export const breakAfter = css`.break-after {
  &::after {
    content: '';
    white-space: pre;
  }
}`;

export const right = css`.right {
  float: right;
}`

export const left = css`.left {
  float: left;
}`;

export const br = css`.br:after {
  content: '';
  display: block;
}`;

export const clear = css`.clear:after {
  content: '';
  display: block;
  clear: both;
}`;

export const inline = css`.inline {
  display: inline;
}`;

export const action = css`.action {
  ${appNormalFont}
  color: #9BB0CB;
  display: inline-block;
  cursor: pointer;
  &.action-add {
    &.action-icon {
      &::before {
        background-color: orange;
      }
    }
  }
  &.action-icon {
    &::before {
      content: '';
      width: 12px;
      height: 16px;
      position: relative;
      top: 0;
      left: 0;
      display: inline-block;
      margin-right: 7px;
    }
  }
}`;

export const actionEditIcon = css`.action.action-edit.action-icon::before {
  background-image: url(${actionDelete});
}`;

export const actionDeleteIcon = css`.action.action-delete.action-icon::before {
  background-image: url(${actionEdit});
}`;

export const avatar = css`.avatar {
  width: 200px;
  height: 200px;
  background-color: #EB5757;
  border-radius: 200px;
  display: inline-block;
  vertical-align: middle;
  margin: 0 15px;
}`;

export const avatarSmall = css`.avatar-small {
  width: 40px;
  height: 40px;
  border-radius: 40px
}`;

export const contentWrapper = css`.content-wrapper {
  background-color: #FAFCFF;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
}`;

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
  action,
  actionEditIcon,
  actionDeleteIcon,
  avatar,
  avatarSmall,
  contentWrapper
];