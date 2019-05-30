/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles';
import routes from 'common/routes';

const Navigation: React.FC = (): ReactElement => {
  return (
    <nav>
      <NavLink activeClassName="active" to={routes.createUser} css={styles}>
        <span className="icon icon-add-user" />
        Add new user
      </NavLink>
      <NavLink activeClassName="active" to={routes.listOfUsers} css={styles}>
        <span className="icon icon-list-user" />
        List of user
      </NavLink>
    </nav>
  );
};

export default Navigation;
