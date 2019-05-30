import { css } from '@emotion/core';
import addUser from 'common/images/icon-add.svg';
import listOfUsers from 'common/images/icon-list-of.svg';
import { appNormalFont } from 'common/styles/global.styles';

const nav = [
  appNormalFont,
  css({
    textDecoration: 'none',
    color: 'white',
    opacity: 0.5,
    marginLeft: '59px',
    '&:before': {
      backgroundColor: 'red',
    },
    '&:hover': {
      opacity: 1,
    },
    '&.active': {
      opacity: 1,
    },
    '.icon-add-user': {
      backgroundImage: `url(${addUser})`,
    },
    '.icon-list-user': {
      backgroundImage: `url(${listOfUsers})`,
    },
  }),
];

export default nav;
