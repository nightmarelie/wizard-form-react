/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import styles from './style';
import routes from '../../common/routes';

interface IProps {}

const Navigation: React.FC<IProps> = (_: IProps): ReactElement<IProps> => {
  return (
    <nav>
      <Link to={routes.createUser} css={styles}>
        <span className="icon icon-add-user"></span>
        Add new user
      </Link>
      <Link to={routes.listOfUsers} css={styles}>
        <span className="icon icon-list-user"></span>
        List of user
      </Link>
    </nav>
  );
};

export default Navigation;
