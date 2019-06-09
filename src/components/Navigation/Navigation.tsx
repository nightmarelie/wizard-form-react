/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import Icon from 'components/Icon/Icon';

import styles from './styles';
import routes from 'common/routes';

const Navigation: React.FC = (): ReactElement => {
  return (
    <nav>
      <NavLink activeClassName="active" to={routes.createUserBase} css={styles}>
        <Icon className="icon-add-user" />
        Add new user
      </NavLink>
      <NavLink
        exact
        activeClassName="active"
        to={routes.listOfUsers}
        css={styles}
      >
        <Icon className="icon-list-user" />
        List of user
      </NavLink>
    </nav>
  );
};

export default Navigation;
