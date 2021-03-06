import { css } from '@emotion/core';

import addUser from 'common/images/icon-users.svg';
import listOfUsers from 'common/images/icon-user.svg';

export const icon = css({
  width: '17px',
  height: '17px',
  display: 'inline-block',
  margin: '0 5px',
  '&.icon-add-user': {
    backgroundImage: `url(${addUser})`,
  },
  '&.icon-list-user': {
    backgroundImage: `url(${listOfUsers})`,
  },
});

export default icon;
