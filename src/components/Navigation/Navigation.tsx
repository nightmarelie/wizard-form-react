/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import styles from './style';
import routes from 'common/routes';

const Navigation: React.FC = (): ReactElement => {
  return (
    <nav>
      <Link to={routes.createUser} css={styles}>
        <span className="icon icon-add-user" />
        Add new user
      </Link>
      <Link to={routes.listOfUsers} css={styles}>
        <span className="icon icon-list-user" />
        List of user
      </Link>
    </nav>
  );
};

export default Navigation;
