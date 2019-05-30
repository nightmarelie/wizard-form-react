import { css } from '@emotion/core';
import { appNormalFont, Colors } from 'common/styles/global.styles';

import actionDelete from 'common/images/action-delete.svg';
import actionDeleteDanger from 'common/images/action-delete-danger.svg';
import actionEdit from 'common/images/action-edit.svg';

export const action = css`
  ${appNormalFont}
  color: #9BB0CB;
  display: inline-block;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  &.action-add {
    &.action-icon {
      &::before {
        background-color: orange;
      }
    }
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
    color: ${Colors.Red};
  }
`;

export default action;