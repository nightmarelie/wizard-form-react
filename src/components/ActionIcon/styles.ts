import { css } from '@emotion/core';
import { Fonts, Colors } from 'common/styles/global.styles';

import actionDelete from 'common/images/icon-delete.svg';
import actionDeleteDanger from 'common/images/icon-delete-danger.svg';
import actionEdit from 'common/images/icon-edit.svg';
import actionAdd from 'common/images/icon-add.svg';
import actionEye from 'common/images/icon-eye.svg';
import actionEyeSlash from 'common/images/icon-eye-slash.svg';
import actionRemove from 'common/images/icon-minus.svg';

export const action = css`
  font: ${Fonts.Normal};
  color: ${Colors.GreyV3};
  display: inline-block;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  &.action-icon::before {
    content: '';
    width: 12px;
    height: 13px;
    position: relative;
    top: 2px;
    left: 0;
    display: inline-block;
    margin-right: 7px;
  }
  &.action-add.action-icon::before {
    background-image: url(${actionAdd});
  }
  &.action-remove.action-icon::before {
    background-image: url(${actionRemove});
  }
  &.action-eye-slash.action-icon::before {
    background-image: url(${actionEyeSlash});
  }
  &.action-eye.action-icon::before {
    background-image: url(${actionEye});
  }
  &.action-eye-slash.action-icon::before,
  &.action-eye.action-icon::before {
    width: 15px;
  }
  &.action-edit.action-icon::before {
    background-image: url(${actionEdit});
  }
  &.action-delete.action-icon::before {
    background-image: url(${actionDelete});
  }
  &.action-delete-danger.action-icon {
    &::before {
      background-image: url(${actionDeleteDanger});
    }
    color: ${Colors.RedV1};
  }
`;

export default action;
